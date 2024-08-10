# 多语言 hugo 添加总字数统计和建站时间

{{< music netease song 32201359>}}

将**建站时间**和**博客总字数**添加到页脚，并适配**多语言**自动切换：

效果如下

![中英文效果图](/img/Hugo中英文建站.zh-cn-20240810161839711.webp)

一般多语言 hugo 博客都有一个 `i18n` 文件，目的就是识别页面语言参数，然后替换相应文字。
## 总字数

### 添加博客总字数统计

找到 `<你的博客文件>\layouts\partials\footer.html`，

在里面添加以下代码：

```HTML

{{ $articleCount := len .Site.RegularPages }}
{{ $totalWordCount := 0 }}
{{ range .Site.Pages }}
{{ $totalWordCount = add $totalWordCount .WordCount }}
{{ end }}

{{ i18n "articleCount" (dict "Count" $articleCount) }}，{{ i18n "totalWordCount" (dict "WordCount" $totalWordCount) }}。

```

然后找到 `<你的博客文件>\i18n`

在 `zh-CN.toml` 里添加

```HTML
# === footer/wordcount ===

[articleCount]
other = "发布了 {{ .Count }} 篇文章"

[totalWordCount]
other = "共 {{ .WordCount }} 字"
```

在 `en.toml` 里添加

```HTML
# === footer/wordcount ===

[articleCount]
other = "published {{ .Count }} posts"

[totalWordCount]
other = "total {{ .WordCount }} words"
```

>多语言切换显然是一对一的字符识别。
>
>因此，在 `i18n` 文件中，每个[调用名称]下只能有一个 `other=`，同时[调用名称]不能重复，这样才能一对一自动切换字符。

### 一个 bug

如果你像我一样，通过 aplayer 为每个博客都添加了一个音乐播放器，那么会出现一个 bug.

由于 hugo 自带的字数统计会和 aplayer 发生冲突。纯音乐的播放器会消失，带歌词的播放器会继续保留，原因不明。

因此个人选择放弃添加字数统计。
## 站点运行时间

### 添加自定义的 `custom.js`

在站点根目录下创建一个自定义的 JavaScript 文件 `\static\js\custom.js`。

写入如下代码：

```js
/* 站点运行时间 */
// 获取当前语言设置
function getCurrentLanguage() {
    // 假设你有一个全局变量或方法来获取当前语言
    return document.documentElement.lang || 'zh'; // 默认返回中文
}

// 更新站点运行时间
function runtime() {
    window.setTimeout(runtime, 1000);
    let startTime = new Date('02/18/2024 15:00:00');
//这里写自己的建站时间
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));

    // 根据语言设置选择对应的文本
    let language = getCurrentLanguage();
    let runtimeText;

    if (language === 'zh') {
        runtimeText = '本站已运行<i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' 天 '
            + ((hours < 10) ? '0' : '') + hours + ' 时 '
            + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
            + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
    } else if (language === 'en') {
        runtimeText = 'Running for <i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' d '
            + ((hours < 10) ? '0' : '') + hours + ' h '
            + ((minutes < 10) ? '0' : '') + minutes + ' m '
            + ((seconds < 10) ? '0' : '') + seconds + ' s ';
    } else {
        // 默认文本（可以选择其他语言或保留中文/英文）
        runtimeText = '本站已运行<i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' 天 '
            + ((hours < 10) ? '0' : '') + hours + ' 时 '
            + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
            + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
    }

    // 更新页面上的内容
    document.getElementById('run-time').innerHTML = runtimeText;
}

runtime();

```

感兴趣的也可以看看本站完整的 [custom.js](https://github.com/hzp2333/hzp2333.github.io/blob/master/js/custom.js)。

找到 `<你的博客文件>\layouts\partials\assets.html`，在最末尾的 `{{- partial "plugin/analytics.html" . -}}` 的上一行添加如下代码：
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@2.1.3/dist/jquery.min.js"></script>

{{- /* 自定义的js文件 */ -}}

<script type="text/javascript" src="/js/custom.js"></script>
```

这样博客就可以调用自定义的 js 文件了。其他 js 文件也可以写在这里面。
### 修改 `i18n`


找到 `<你的博客文件>\i18n`

在 `zh-CN.toml` 里添加

```HTML
[runtime]
other = "本站已运行{{ .Days }}天 {{ .Hours }}小时 {{ .Minutes }}分钟 {{ .Seconds }}秒"
```

在 `en.toml` 里添加

```HTML
[runtime]
other = "The site has been running for {{ .Days }} days {{ .Hours }} hours {{ .Minutes }} minutes {{ .Seconds }} seconds"
```

## 参考资料

- [总字数统计：“发表了 x 篇文章，共计 x 字”]( https://thirdshire.com/hugo-stack-renovation/#%E6%80%BB%E5%AD%97%E6%95%B0%E7%BB%9F%E8%AE%A1%E5%8F%91%E8%A1%A8%E4%BA%86x%E7%AF%87%E6%96%87%E7%AB%A0%E5%85%B1%E8%AE%A1x%E5%AD%97 )
- [添加站点运行时间](https://lewky.cn/posts/hugo-3.2.html/#%E6%B7%BB%E5%8A%A0%E7%AB%99%E7%82%B9%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4)
- [Hugo 的一些模板语法](https://zishu.me/blog/213.html/)
- [Hugo 总文章数和总字数](https://flynx.dev/post/hugo-total-count/)
