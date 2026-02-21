# Hugo 搭建 Giscus 评论区




如今 hugo 评论区已经有了很多成熟的方案。Waline 强大且好用，但对我这种小白来说太不友好了（例如我就不会配置 waline 评论区的中英文自动切换）；gitalk 利用 github 仓库的 Issue 区域作为评论区，搭建简单但权限授予有点问题（可见这里的[讨论](https://www.v2ex.com/t/535608)）。综上，我选择 Giscus——搭建简单且安全。


环境：[hugo增强版(V0.123.7)](https://github.com/gohugoio/hugo/releases/tag/v0.123.7) +win 64 amd+ [loveit主题](https://hugoloveit.com/zh-cn/)

## 创建 Github 仓库作为评论区


![github主页创建](/img/Hugo搭建Giscus评论区.zh-cn-20240523125357558.webp)

![需要是Public](/img/Hugo搭建Giscus评论区.zh-cn-20240523125412376.webp)

选择完后即可点击 Create repository 创建。创建完成之后进入仓库勾选 Discussions 来开放讨论区。

![仓库setting](/img/Hugo搭建Giscus评论区.zh-cn-20240523125428948.webp)

## 进入 Giscus 官网获取调用

进入 [Giscus](https://github.com/apps/giscus) 官网点击 Install, 输入自己刚才创建的仓库。

![忘记了也可以在仓库setting页面查看名字](/img/Hugo搭建Giscus评论区.zh-cn-20240523125444871.webp)

设置上我选择默认设置：

> - **页面 ↔️ discussion 映射关系：**选择**Discussion 的标题包含页面的 `pathname`**
> - **Discussion 分类**：选择**Announcements**
> - **主题**：选择**用户推荐的色彩方案**

勾选完成后页面会出现对应的**调用代码**：

重点关注 `data-repo`，`data-repo-id`，`data-category`，`data-category-id`，`data-mapping` 几个值。

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

## Hugo 配置

### 修改 toml 配置

个人网站项目下的 `config.toml` 文件内写入以下内容:

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

## Hugo 渲染

`hugo serve` 是本地预览环境，不会启用生产力环境。

启动 `hugo serve -e production` 渲染启动生产力环境，开启评论区。

![个人认为样式也比gitalk好看。下面是深色模式和中英文效果](/img/Hugo搭建Giscus评论区.zh-cn-20240703115100547.webp)
## 注意版本控制

严格按照以上方法，使用的 loveit 主题，却没有出现评论区。可能是版本不对。[Loveit](https://github.com/dillonzq/LoveIt) 页面，直接通过 code 下载解压。Release 部分的 latest 代码其实是落后几个版本的代码！不支持 giscus。
