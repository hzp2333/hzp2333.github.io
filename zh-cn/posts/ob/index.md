# Obsidian 管理文献阅读和博客文档



最近开始接触 Obsidian，在此记录使用流程。

个人主要用 ob 编写管理博客文档和文献阅读笔记。

## Obsidian 和插件使用

- 论坛： [https://forum-zh.obsidian.md/](https://forum-zh.obsidian.md/)

- 推荐教程：[obsidian新手不完全指南](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/obsidian%E6%96%B0%E6%89%8B%E4%B8%8D%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97+by+windily)

Obsidian 代表<font color="#ff0000">双链</font>笔记理念——**让笔记文件能相互联系，进而构建知识网络**。对我而言，使用 obsidian 的唯一理由是它的无数神级插件，让笔记编写和整理成为一种享受！

提示：最基本的使用门槛是掌握 markdown 语法。

### 软件下载

在官网下载软件： [https://obsidian.md/](https://obsidian.md/)

下载后打开界面如下，仓库就是笔记存储文件夹。例如我的两个仓库就是博客文档和文献笔记的存储位置。
![打开页面](/img/Obsidian配合文献阅读和博客-20240524184612776.webp)
选择完仓库地址后，文件夹里会多出一个 `.obsidian` 文件，对应的就是软件设置——包含插件、界面样式等设置文件。

个人页面设置如下：
![页面如下](/img/Obsidian配合文献阅读和博客-20240524191650737.webp)

富人分屏（副屏），穷人分屏（复屏）😤

>Obsidian 文件设置：
>
>替换仓库中 `.obsidian` 文件即可。
>
>可在 github 仓库下载[我的`.obsidian`配置](https://github.com/hzp2333/hzp2333.github.io/blob/master/.obsidian)
>
>下载后注意把其中 `themes.zip ` 解压一下。


每一个仓库设置是独立的！也就是说每个仓库可以设置完全不同的主题风格和插件！这一点很棒，比如编写博客文档和编写笔记文档的功能诉求是存在矛盾的，仓库的独立设置显得非常必要👍。

### 界面字体

调整页面字体，在左下角设置-外观-字体里面即可调整。

### 双链相关

- **文档属性**：在空白第一行连续输入三次短横线 `---` 即可添加文档属性。非空白第一行时 `---` 作用是添加**分界线**。
- **标签添加**： `#标签1`、 `#标签2`
- **链接**：
```obsidian
链接到某一篇笔记：[[文件名]]
链接到某一篇笔记中的某个标题：[[ # ]]
链接到某一篇笔记中的某个段落（块）：[[ # ^ ]]
为链接创建定义（关键词）：[[ | 关键词]]
链接到外部文件如印象笔记：[关键词]（链接）
图片添加：![[]] 或者![图片标题](图片引用路径)
```
## 插件使用

替换 `.obsidian` 文件后打开仓库，点击信任对方并关闭安全模式。
![设置页面，外观部分可以更换主题，第三方插件设置安装和开启](/img/Obsidian配合文献阅读和博客-20240524194922250.webp)
左下角齿轮图案 `设置` ，打开所有已安装插件。
可以检查插件更新和浏览第三方插件市场（**需要梯子**）。

### Command

大部分插件在界面显示后应该能直接上手，剩余插件则是通过**快捷键命令**驱动。

点击最左侧竖条的 `>_` 符号（快捷键为 `ctrl+p`），在弹窗里输入对应命令，然后执行插件功能。
![一些插件需要命令调用](/img/Obsidian配合文献阅读和博客-20240524200110588.webp)

Command 插件能帮我们添加命令快捷运行按钮。

![出现添加命令的地方](/img/Obsidian配合文献阅读和博客.zh-cn-20240525005836916.webp)

打开鼠标右键菜单，或者笔记栏顶部右侧的三点符号，点击添加命令，经过 `选择指令-选择栏目符号-选择栏目名称` 三次选择后，快捷按钮完成添加。

### Pandoc

不是只下载好插件就行！

Obsidian 笔记语法为 markdown 语法，支持输出 pdf 格式。Pandoc 能帮助我们输出更多格式（例如 latex、equb、html......）

使用分为两步：

去[官网](https://www.pandoc.org/installing.html)下载 Pandoc 软件本体。

安装并启动 Pandoc 插件、Enhancing export 插件。在两个插件的设置中填写好 Pandoc 文件路径，设置好输出地址。

此时笔记栏右上角三点中会多出来 `导出为...` 选项，完成设置。

### Easy typing

吸引我使用 obsidian 的主要插件！中英文混杂的文档编写有很多规范需要注意，例如：

- 中文间夹杂数字和英文，应该用空格隔开；
- 中英文输入法切换也麻烦；
- 英文句子开头需要大写。

有了 easy typing 后，中文环境的数字和英文会自动空格；中文符号重复输入一次就会变成英文符号；首句英文单词字母自动大写......

### Annotator

Obsidian 自身并不能阅读 pdf 文件，一般使用 annotator 插件阅读。

在新建笔记第一行输入 `---` 添加文档属性 `annotation-target` 再在之后的格子中点击自己要读取的 pdf 文件，然后关闭再打开笔记页面，就变成了 pdf 阅读界面了，并且**支持批注添加**！
![文档属性例子](/img/Obsidian配合文献阅读和博客.zh-cn-20240524205940959.webp)

### Copilot chat

Obsidian 嵌入 ai 有三种流派，一种是直接嵌入，通过命令根据上下文续写笔记；一种是内置管理搜索文件和笔记样式。

一种是保持侧边栏对话。个人推荐第三种的代表插件：Copilot chat。

安装完成后，进入界面设置。

Default model 设置，我推荐选择 OPEENROUTER. AI。这是一个 ai 中介商，能通过它调用各自 ai 模型。

![往下找到模型设置，选择自己想要的模型，我推荐选择 OPEENROUTER. AI](/img/Obsidian配合文献阅读和博客.zh-cn-20240526165250508.webp)

再往下滑找到 OPEENROUTER 的 api 输入处。

![往下找到模型设置，选择自己想要的模型](/img/Obsidian配合文献阅读和博客.zh-cn-20240526165713463.webp)
Openrouter. Ai 的 api key [生成处](https://openrouter.ai/keys)

模型选择网站在[这里](https://openrouter.ai/models?q=free)：

也不局限于 gpt3.5，可以直接搜索关键词 free, 显示的 ai 都免费调用

![选择自己想要的free模型名称](/img/Obsidian配合文献阅读和博客.zh-cn-20240526170748976.webp)

例如将以下模型名称选一个复制到 `openrouter model` 处即可

```
openchat/openchat-7b:free
meta-llama/llama-3-8b-instruct:free
google/gemma-7b-it:free
gryphe/mythomist-7b:free
```

点击左侧竖条中的 copilot chat，右侧就会增加一个 ai 聊天框。而且自带读取笔记功能。
### 其他插件

Better word count 插件：更好地统计中文字数（obsidian 右下角有字数统计）。

Footnote shortcut 插件：更好的脚注编辑体验，使用命令自动添加脚注。在编好的脚注上再次使用脚注命令就能实现文章尾部脚注内容和脚注位置的跳转。

Word Splitting for Simplified Chinese in Edit Mode and Vim Mode 插件：双击句子自动选择词语，这个插件能更好地识别中文分词。

## Obsidian 与移动端

[2022年3月如何同步obsidian文件（阶段性总结）](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/2022%E5%B9%B43%E6%9C%88%E5%A6%82%E4%BD%95%E5%90%8C%E6%AD%A5obsidian%E6%96%87%E4%BB%B6%EF%BC%88%E9%98%B6%E6%AE%B5%E6%80%A7%E6%80%BB%E7%BB%93%EF%BC%89)

Obsdidian 的缺点之一就是麻烦且不稳定的多端互通（有钱上官方服务是最好的）

省流总结：

### 全平台同步方案 ：Remotely save 

[Remotely save（同步插件）](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Remotely+save%EF%BC%88%E5%90%8C%E6%AD%A5%E6%8F%92%E4%BB%B6%EF%BC%89)是本周讨论最火的插件，教程中已经收录了许多内容：

- [Obsidian 同步 Remotely Save S3 配置指南 by 恐咖兵糖](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian+%E5%90%8C%E6%AD%A5+Remotely+Save+S3+%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97+by+%E6%81%90%E5%92%96%E5%85%B5%E7%B3%96)
- [第三方同步插件（Remotely save介绍） by 软通达](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E7%AC%AC%E4%B8%89%E6%96%B9%E5%90%8C%E6%AD%A5%E6%8F%92%E4%BB%B6%EF%BC%88Remotely+save%E4%BB%8B%E7%BB%8D%EF%BC%89+by+%E8%BD%AF%E9%80%9A%E8%BE%BE):Dropbox
- ~~[Obsidian Remotely Save 插件实现电脑和移动端同步 by yaozhuwa](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian+Remotely+Save+%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E7%94%B5%E8%84%91%E5%92%8C%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%90%8C%E6%AD%A5+by+yaozhuwa):onedrive方式~~

（个人测试时发现纯 Remotely save+ondrive 方案已经挂掉了，安卓端 ondrive 文件夹识别有问题，需要 foldersync 这类第三方转移软件作为 onedrve 中介，还得手动启动同步）

- [最舒服的Obsidian第三方多端同步 by 维客笔记](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E6%9C%80%E8%88%92%E6%9C%8D%E7%9A%84Obsidian%E7%AC%AC%E4%B8%89%E6%96%B9%E5%A4%9A%E7%AB%AF%E5%90%8C%E6%AD%A5+by+%E7%BB%B4%E5%AE%A2%E7%AC%94%E8%AE%B0)：Dropbox
- [remotely插件搭配腾讯云cos教程 by 八宝周](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/remotely%E6%8F%92%E4%BB%B6%E6%90%AD%E9%85%8D%E8%85%BE%E8%AE%AF%E4%BA%91cos%E6%95%99%E7%A8%8B+by+%E5%85%AB%E5%AE%9D%E5%91%A8)：腾讯云，S3
- [Obsidian通过Remotely save插件实现坚果云同步 by BCS](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian%E9%80%9A%E8%BF%87Remotely+save%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%9D%9A%E6%9E%9C%E4%BA%91%E5%90%8C%E6%AD%A5+by+BCS)：坚果云，webdav
- [Obsidian使用Remotely Save 和阿里云 OSS 实现多平台同步 by zm](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian%E4%BD%BF%E7%94%A8Remotely+Save+%E5%92%8C%E9%98%BF%E9%87%8C%E4%BA%91+OSS+%E5%AE%9E%E7%8E%B0%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%90%8C%E6%AD%A5+by+zm)：阿里云oss，S3
### PC和安卓同步 

Win和安卓可以考虑 [Syncthing（同步软件）](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Syncthing%EF%BC%88%E5%90%8C%E6%AD%A5%E8%BD%AF%E4%BB%B6%EF%BC%89)或者类似的[微力同步](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/%E5%BE%AE%E5%8A%9B%E5%90%8C%E6%AD%A5)。可见[使用腾讯云搭建Syncthing来同步obsidian by 软通达](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AF%E4%BA%91%E6%90%AD%E5%BB%BASyncthing%E6%9D%A5%E5%90%8C%E6%AD%A5obsidian+by+%E8%BD%AF%E9%80%9A%E8%BE%BE)。

### Mac和iOS同步

可以考虑[iCloud](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/iCloud)，没有设备，没有尝试。

### 仅电脑之间同步

推荐使用[坚果云](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E5%9D%9A%E6%9E%9C%E4%BA%91)等同步软件。这里注意2点：

1. 不要两台机同时开着ob和同步软件，这样会导致保存出错。
2. 注意分辨同步盘和储存盘（网盘）的区别。
## Hugo 与 obsidian

推荐参考：

- [Hugo 博客写作最佳实践](https://blog.zhangyingwei.com/posts/2022m4d11h19m42s28/)
- [使用 Obsidian 一键发布博客](https://yaofun.top/posts/2024/03/%E4%BD%BF%E7%94%A8-obsidian-%E4%B8%80%E9%94%AE%E5%8F%91%E5%B8%83%E5%8D%9A%E5%AE%A2/)
- [obsidian 配合 hugo、cloudflare：让发布博客简单到不可思议](https://lillianwho.com/posts/obsidian-hugo-cloudflare/)

个人额外推荐 hugo preview 这个插件——相当于加载一个在线博客预览页面。启动插件后点击右下角的<font color="#00b0f0">蓝色方块</font>即可打开页面。其实就是把特定网页导入 obsidian 预览。

![左右开弓！](/img/Obsidian配合文献阅读和博客.zh-cn-20240524211004569.webp)

值得一提的还有 mermaid 插件。Loveit 主题的 hugo 博客支持流程图渲染，有些流程图的细节命令我记不住可以使用这个插件辅助。

我目前还是本地图片引用（就是喜欢本地管理😀），
- **imge converter** 能自动压缩、重命名并转化图片格式；
- **clear unsed images** 插件能帮助清理未被引用的本地图片。

至于**图片引用路径**的修改（post/img 复制到 static/img），和博客上传到 git，我没有使用 obsidian 的 git 插件，都使用的 `.bat` 脚本代劳（让 gpt 写就完了！），也简单。如此一来专注写作就行了。

至于新建博客模板，用不着设置 quick 插件，obsidian 自带模板设置，新建一个模板文件夹放入 markdown 模板文件，每次新建文章时在左侧竖条点击对应模板导入的图标即可。

## Zotero 与 obsidian

推荐参考：[Zotero + Obsidian联动方案汇总盘点 - 2023最全](https://zhuanlan.zhihu.com/p/651144180)

悲伤的是——最好用的都是有付费的🤧。

在 zotero7 刚刚更新的时候，个人上了青柠学术付费插件的车，采用他的插件能实现 zotero 文献注释笔记和 obsidian 无缝传递。

![青柠学术的插件对接。想要图片丝滑无缝传递，无论如何都得搭建图床](/img/Obsidian配合文献阅读和博客.zh-cn-20240525000044724.webp)


到 2024 年，zotero 分为了 zotero6 和 zotero7 版本，且 zotero 插件 mdnote 的作者明确表态不会完善插件适配 zotero7。所以可选的方案更少了。

个人目前也在用的其他免费方案是—— zotero 的 better note 插件加 obsidian 的 zotero integration 插件方案。

[个人的 zotero better note 模板和教程](https://blog.huaxiangshan.com/zh-cn/posts/zoteronote/)

在 zotero 中使用 better note 建立文献笔记，然后通过 zotero integration 插件将文献笔记导入 obsidian 进行归纳整理。

## 笔记软件之争

网上很多人在比较 notion、obsidian 和其他笔记软件。个人选择 obsidian 的原因主要是丰富的开源插件和安全感满满的本地储存。

不过 obsidian 被吐槽的点是——插件太多，功能太花哨，上手门槛也比较高，于是显得主次不分。不过到目前为止，我尚未用 obsidian 建立知识图谱，光是使用他来编辑文档就已经很舒服了。

除此之外，obsidian 的初衷是构建知识体系。对于他人的使用分享，我受到启发的并不是他们的笔记美观程度，而是他们如何让利用 obsidian 贯彻自己的资料整理理念🦾。利用插件建立周期笔记轮替复习；建立关键词分块不断扩展；利用 obsidiana 联动工具完善自己的工作流程；笔记分块逻辑与设计结合......
