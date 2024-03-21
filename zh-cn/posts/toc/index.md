# 中文博客目录跳转失败


## 问题

> 环境：hugo扩展版+loveit系列主题

hugo会为每个博客文章生成目录，并且目录标题应该能实现点击跳转。几天前我发现我的博客，中文页面不能实现标题跳转，英文依旧可以。

![hugo目录生成](/img/9773c9cdf18cb7e866628c0f8ad3f35.png)

## 原因

在询问[doit主题维护者](https://github.com/HEIGE-PCloud/DoIt/issues/1209)后我得到了错误原因：

我在页面里添加了BGM（如下）——这个功能使用了[APIayer](https://github.com/DIYgod/APlayer)，同时APIayer又调用了[smoothScroll](https://github.com/alicelieutier/smoothScroll)。

{{< music url="/music/Sunflower.flac" name=sunflower   artist="Post Malone, Swae Lee" cover="/images/spyder.jpg" >}}

smoothScroll默认设置是英文参数，当引入APIayer播放音乐后，目录跳转[返回值就变成了空值](https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js#L100)。

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

修改`<个人网站>\assets\lib\aplayer`目录下的`APlayer.min.js`。

[鱼の乐](https://blog.wangriyu.wang/)大佬给出了他修改好的[APlayer.min.js](https://src.wangriyu.wang/lib/Aplayer/APlayer.min.js)。

全文替换即可。

**这些问题都是2018年就暴露的问题，看来以后也不会有维护了，建议自己修改**。


