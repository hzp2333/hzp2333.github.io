# 中文博客目录跳转失败




## 问题 1

> 环境：hugo 扩展版+loveit 系列主题

Hugo 会为每个博客文章生成目录，并且目录标题应该能实现点击跳转。几天前我发现我的博客，中文页面不能实现标题跳转，英文依旧可以。

![hugo目录生成](/img/中文博客目录跳转失败.zh-cn-20240523120305243.webp)
## 原因

在询问 [doit主题维护者](https://github.com/HEIGE-PCloud/DoIt/issues/1209)后我得到了错误原因：

我在页面里添加了 BGM（如下）——这个功能使用了 [APIayer](https://github.com/DIYgod/APlayer)，同时 APIayer 又调用了 [smoothScroll](https://github.com/alicelieutier/smoothScroll)。

{{< music url="/music/三葉のテーマ.flac" name=三葉のテーマ artist= 君の名 cover="/images/三葉のテーマ.jpg" >}} 

smoothScroll 默认设置是英文参数，当引入 APIayer 播放音乐后，目录跳转[返回值就变成了空值](https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js#L100)。

```js
        if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
        // using the history api to solve issue #1 - back doesn't work
        // most browser don't update :target when the history api is used:
        // THIS IS A BUG FROM THE BROWSERS.
        // change the scrolling duration in this call
        var node = document.getElementById(this.hash.substring(1))
        if (!node) return; // Do not scroll to non-existing node
```

## 解决方法

最后是在博客文章[使用 Aplayer 导致博客目录跳转失效](https://blog.wangriyu.wang/2018/06-Aplayer.html)中找到了解决方法。

修改 `<个人网站>\assets\lib\aplayer` 目录下的 `APlayer.min.js`。

[鱼の乐](https://blog.wangriyu.wang/)大佬给出了他修改好的 [APlayer.min.js](https://src.wangriyu.wang/lib/Aplayer/APlayer.min.js)。

全文替换即可。
**这些问题都是 2018 年就暴露的问题，看来以后也不会有维护了，建议自己修改**。
## 问题 2

当我添加 giscus 评论区后，这个问题又出现了？前面的解决办法也失效了。

这里超级感谢 [@yllhwa](https://blog.yllhwa.com/) 的帮助😍👍。

将 `themes\LoveIt\assets\data\cdn\jsdelivr.yml` 复制到 `<自己网站>\assets\data\cdn\jsdelivr.yml`。

然后注释掉 `aplayerJS: aplayer@1.10.1/dist/APlayer.min.js`。

![看来最后还是出现在调用问题上](/img/中文博客目录跳转失败.zh-cn-20240717214838677.webp)


