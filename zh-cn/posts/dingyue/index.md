# 聚合订阅：影视、漫画、文献、音乐自由




各主流期刊必有网站，世界上也有许多隐秘的漫画、动漫、影视剧资源网站，唯一的问题就是网站之间资源不同且较为隐蔽。那么，有没有可能搞一个网站再聚合所有我们想要的网站呢？这就是聚合订阅！很多大佬开发了工具使得我们能通过一个软件直接抓取这些网站，实现资源的一键订阅和使用。

资源网站只解决燃眉之急，如果支持喜爱某个作品还请支持正版。

## 影视剧：TVbox

### 非电视端

播放系统兼有大部分画面、字幕调节功能的同时，很多人维护着影视剧资源和电视直播资源。

官网在链接 [TVbox官网](http://tvbox.clbug.com/#google_vignette)。下载后点击设置，进入配置地址输入订阅配置就行。如下图，如此我们就可以实现在一个 app 里观看收藏不同网站的资源。

![TVbox](/img/聚合订阅：影视、漫画、文献自由.en-20240523104059529.webp)

![setting](/img/聚合订阅：影视、漫画、文献自由.en-20240523104120602.webp)

**推荐订阅源如下**，感谢大佬们的维护！

```
饭太硬
http://饭太硬.top/tv
肥猫
http://肥猫.live
菜妮丝
https://tvbox.cainisi.cf
南风
https://agit.ai/Yoursmile7/TVBox/raw/branch/master/XC.json
小米
http://xhww.fun:63/小米/DEMO.json
巧儿
http://pandown.pro/tvbox/tvbox.json
```

### 电视安装

如今大部分人家里都是数字电视，同时天下人苦 vvvvip 久矣，电视投屏 vip 和软件 vip 多半是两套付费路！在家父母总是担心数字电视这里收费那里收费，同时他们喜欢的电视剧不容易在电视上找到资源。例如家里人有人刷了抖音天天念叨“[狗剩快跑](https://movie.douban.com/subject/35231245/)”。于是以此为契机本人研究了下电视上的 TVbox。

电视环境其实就是老版本的安卓环境，将手机软件下载到电视上有两种方法。

1. 软件：通过一些电视软件（谷歌一下即可）链接手机进行安装。
2. 硬件：U 盘进行安装

![my xiaomi TV](/img/聚合订阅：影视、漫画、文献自由.en-20240523104152090.webp)

小米电视正后面的两个 U 盘接口。同时前文有提到电视的软件环境是**旧版安卓**，所以 TVbox 也要使用旧版本。下载的 github 链接：[TVBox_电视端适配版.apk](https://github.com/o0HalfLife0o/TVBoxOSC/releases/download/20230823-1758/TVBox_q215613905_20230823-1758.apk)。

电视播放失败时，重点关注版本适配、设置中的解码方式（我也不懂，随便换着多试就行）。

## 漫画：Tachiyomi

### 异次元

和 TVbox 逻辑相同，官方提供图源。官方地址请见[异次元漫画](https://fairyflower.github.io/)。

### Tachiyomi

Tachiyomi 的好处是可以对接正版软件。例如我付费购买过《一拳超人》和《辉夜大小姐想让我告白》漫画的付费章节，也可以在里面进行官网的登录后查看漫画。下载请见 [Tachiyomi](https://tachiyomi.org/)。

使用方法是在底部浏览中下载

![Tachiyomi](/img/聚合订阅：影视、漫画、文献自由.en-20240523104218380.webp)

插件即可。每个插件对应着网站资源爬取。国漫包子漫画一个就够了。如果自己有正版的 B 站漫画和腾讯漫画也可以在里面订阅自己有的资源。

## 文献：zotero!

订阅效果

![zotero](/img/聚合订阅：影视、漫画、文献自由.zh-cn-20240523104410804.webp)

详细教程请见如下链接：[Zotero与经济期刊RSS订阅](https://hzp2333.github.io/zh-cn/posts/zoterorss/)

## 音乐：musicfree

插件化、定制化、无广告的免费音乐播放器。

![而且支持多客户端适配](/img/聚合订阅：影视、漫画、文献自由.zh-cn-20241215191304742.webp)

能通过插件聚合 Bilibili（提取视频声音）、网易云、QQ、咕咪、酷狗。

>终于能集中整理 B 站很多鬼畜视频或者原创 MV 的声音了

- [GITHUB 项目地址](https://github.com/maotoumao/MusicFree)
- [官网](https://musicfree.catcat.work/)

推荐的插件导入：

以下插件包含了热榜功能。

国内用户：

```
https://musicfreepluginshub.2020818.xyz/plugins.json
```

国际用户：
```
https://musicfreepluginshub.pages.dev/plugins.json
```

## 截图

最后推荐一个开源的截图软件。能截图后置顶，便于工作。

[SETUNA2](https://github.com/tylearymf/SETUNA2)
