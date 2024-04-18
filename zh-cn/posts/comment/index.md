# Hugo搭建Giscus评论区




{{< music netease song 22078173 >}}



如今hugo评论区已经有了很多成熟的方案。Waline强大且好用，但对我这种小白来说太不友好了；gitalk利用github仓库的Issue区域作为评论区，搭建简单但权限授予有点问题（可见这里的[讨论](https://www.v2ex.com/t/535608)）。综上，我选择Giscus——搭建简单且安全。

> 虽然loveit[主题](https://hugoloveit.com/zh-cn/)支持Giscus，但个人在查看其`comment.html`文件时好像已经不再适配最新的giscus。按照网上已有的loveit主题教程也没有成功安装评论区，所以在这里记录。

环境：[hugo增强版(V0.123.7)](https://github.com/gohugoio/hugo/releases/tag/v0.123.7)+win64amd+[loveit主题](https://hugoloveit.com/zh-cn/)

## 创建Github仓库作为评论区



![github主页创建](/img/image-20240305160149311.png)

![需要是Public](/img/image-20240305160236865.png)

选择完后即可点击Create repository创建。创建完成之后进入仓库勾选Discussions来开放讨论区。

![仓库setting](/img/image-20240305160556790.png)

## 进入Giscus官网获取调用

进入[Giscus](https://github.com/apps/giscus)官网点击Install,输入自己刚才创建的仓库。

![忘记了也可以在仓库setting页面查看名字](/img/image-20240305161007335.png)

设置上我选择默认设置：

> - **页面 ↔️ discussion 映射关系：**选择**Discussion 的标题包含页面的 `pathname`**
> - **Discussion 分类**：选择**Announcements**
> - **主题**：选择**用户推荐的色彩方案**

勾选完成后页面会出现对应的**调用代码**：

重点关注`data-repo`，`data-repo-id`，`data-category`，`data-category-id`，`data-mapping`几个值。

```js
<script src="https://giscus.app/client.js"
        data-repo="*************" #注意自己的仓库名字
        data-repo-id="*************" #注意自己的代码
        data-category="Announcements"  #注意自己选择的型号配置
        data-category-id="*************" #注意自己的代码
        data-mapping="pathname" #一般为pathname
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="" #默认语言，推荐填空，会自动使用网站语言
        crossorigin="anonymous"
        async>
</script>
```

## hugo配置

### 添加html

- 将`themes/loveit/layouts/_default/`目录的 `single.html`文件，复制到`个人网站/layouts/_default/`目录中去。

需要的是其中包含以下评论区html调用代码：

```html
    {{- /* Comment */ -}}
    {{- partial "comment.html" . -}}
</div>
```

- 将`themes/loveit/layouts/partials/`目录的 `comments.html`文件，复制到`个人网站/layouts/partials/`目录中去。
- 打开`comments.html`，将**Giscus**对应的调用代码复制到文件中`{{- dict "comment" $commentConfig | dict "config" | merge (.Scratch.Get "this") | .Scratch.Set "this" -}}`部分的上一行。

### 修改toml配置

个人网站项目下的`config.toml`文件内写入以下内容:

```js
[params.page.comment]
   enable = true       
[params.page.comment.giscus]   

  # 你可以参考官方文档来使用下列配置   
  enable = true   
  repo = "**********"   
  repoId = "**************"   
  category = "Announcements"   
  categoryId = "***************"   
  # <your_repo> 对应官网的 data-repo   
  # <your_repoId> 对应官网的 data-repo-id   
  # <your_category> 对应官网的 data-category   
  # <your_categoryId> 对应官网的 data-category-id
  # 为空时自动适配当前主题 i18n 配置   
  lang = ""   
  mapping = "pathname"   
  # <your_mapping> 对应官网的 data-mapping   
  reactionsEnabled = "1"   
  emitMetadata = "0"   
  inputPosition = "bottom"   
  lazyLoading = false   
  lightTheme = "light"   
  darkTheme = "dark_dimmed"
```

## hugo渲染

`hugo serve`是本地预览环境，不会启用生产力环境。

启动`hugo serve -e production`渲染启动生产力环境，开启评论区。

![个人认为样式也比gitalk好看](/img/image-20240305164652485.png)

## bug代价

由于`loveit`的变量调用已经失效，我们是直接把调用代码原文插入`comments.html`,

这样就无法实现文本框提示语中英文、白天黑夜模式自动切换了。

如下图所示：

（主要是我也不会写定义全局弘变量的代码...）

如果能接受就不用折腾了。

![代价](/img/image-20240322004507731.png)

## 换为主题doit

个人解决方案是使用了[doit](https://github.com/HEIGE-PCloud/DoIt/tree/main)主题,但是似乎也有些变化，操作如下：

1、下载`doit`到`theme`文件夹中

2、修改`config.toml`中的` theme = ["LoveIt"]`成` theme = ["DoIt"] .` 

3、将以下代码

```html
        {{- /* giscus Comment System */ -}}
        {{- $giscus := $comment.giscus | default dict -}}
        {{- if $giscus.enable -}}
            <div id="giscus"></div>
            {{- $commentConfig = dict "dataRepo" $giscus.dataRepo | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = dict "dataRepoId" $giscus.dataRepoId | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = dict "dataCategory" $giscus.dataCategory | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = dict "dataCategoryId" $giscus.dataCategoryId | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataMapping | default "pathname" | dict "dataMapping" | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataStrict | default "0" | dict "dataStrict" | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataReactionsEnabled | default "1" | dict "dataReactionsEnabled" | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataEmitMetadata | default "0" | dict "dataEmitMetadata" | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataInputPosition | default "bottom" | dict "dataInputPosition" | dict "giscus" | merge $commentConfig -}}
            {{- $commentConfig = $giscus.dataLang | default "en" | dict "dataLang" | dict "giscus" | merge $commentConfig -}}
            {{- $options := dict "targetPath" "js/giscus.min.js" "minify" true -}}
            {{- $js := resources.Get "js/lib/giscus.js" | js.Build $options -}}
            {{- $_ := $js.RelPermalink -}}
            {{- dict "Link" $js.RelPermalink "Fingerprint" $fingerprint "Defer" true | dict "Scratch" .Scratch "Data" | partial "scratch/script.html" -}}
            <noscript>
                Please enable JavaScript to view the comments powered by <a href="https://giscus.app/">giscus</a>.
            </noscript>
        {{- end -}}
    </div>
{{- end -}}
```

复制到`个人网站/layouts/_default/comment.html`中，替换掉之前的Giscus调用代码，使其覆盖掉loveit原来对应的`{{- /* giscus Comment System */ -}}`部分。

> 这部分替换代码删去了原代码中的以下部分
>
> ```
>             {{- $commentConfig = $giscus.lightTheme | default "light" | dict "lightTheme" | dict "giscus" | merge $commentConfig -}}
>             {{- $commentConfig = $giscus.darkTheme | default "dark" | dict "darkTheme" | dict "giscus" | merge $commentConfig -}}
> ```
>
> 因为我发现我使用完整的，评论区颜色会被定死成“light”,删去后是透明的，就可以实现背景颜色变化了。

4、修改`config.toml`

```html
[params.page.comment]
      enable = true       
[params.page.comment.giscus]   
  # 你可以参考官方文档来使用下列配置   
  enable = true   
  dataRepo  = "**************"
  dataRepoId  = "**************"   
  dataCategory  = "Announcements"   
  dataCategoryId  = "**************"   
  # <your_repo> 对应官网的 data-repo   
  # <your_repoId> 对应官网的 data-repo-id   
  # <your_category> 对应官网的 data-category   
  # <your_categoryId> 对应官网的 data-category-id
# 为空时自动适配当前主题 i18n 配置   
  Lang = ""   
  mapping = "pathname"   
  # <your_mapping> 对应官网的 data-mapping   
  reactionsEnabled = "1"   
  emitMetadata = "0"   
  inputPosition = "bottom"   
  lazyLoading = true

```

效果如下：

![dark](/img/image-20240322011116484.png)

![light](/img/image-20240322011147609.png)

