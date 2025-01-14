# Zotero 7 Better note 实证经济学笔记模板



众所周知，zotero 有很多神级插件, Better note 就是其中一个。我们可以直接在 zotero 里边读文献边写 markdown 笔记。

很多时候老师会要求做 PPT 进行文献汇报。只要 markdown 模板写得好，当 PPT 用也不是不行（

结合 zotero style 、茉莉花、绿青蛙、zoteroGPT、translate 等插件，我们还可以对**笔记进行自动填充。**

> 最近想出来的两个论文选题，一顿花哨操作，发现数据都不显著，又没有新灵感，于是回过头继续折腾数学和软件了。
>
> 不显著恰恰说明了计量的可靠，不是强行显著，而是全民炼丹，总有人会挖到真正的宝藏，挖到的大佬会说，我挖到是因为有经济直觉和科研品味——这确实有点玄学了[^1]。
>
> 写这个文章也是因为 zotero 7 更新后原来的模板不再兼容，同时我想加个适合自己的文献阅读笔记模板。

![better note 经典的 sci 阅读模板，以上信息来自文件元信息读取](/img/Zotero7Betternote模板.zh-cn-20240523135612745.webp)
## 一、Better note 的安装

github 项目地址：[https://github.com/windingwind/zotero-better-notes](https://github.com/windingwind/zotero-better-notes)

项目[讨论区](https://github.com/windingwind/zotero-better-notes/discussions)（discuss）就是大家分享模板的地方。

## 二、模板加入

复制我的模板，或者自己去讨论区复制想要的模板。

### 模板 1：极致简洁

![内容是我自己阅读完写的，本模板不支持元数据自动导入，但小白也看得懂怎么修改代码标题](/img/Zotero7Betternote模板.zh-cn-20240523135630670.webp)

文字部分就是标题，`<h1>` 代表一号标题，`</li>` 代表无序列表。

```html
<h1>标题</h1>
<p></p>
<h2>创新与边际贡献</h2>
<p></p>
<h2>模型方法</h2>
<ul>
  <li>数据：</li>
  <li>因变量：</li>
  <li>自变量：</li>
  <li>控制变量：</li>
</ul>
<h2>稳健性和内生性 </h2>
<p></p>
<h2>机制检验</h2>
<p></p>
<h2>异质性</h2>
<p></p>
<h1>总结</h1>
<p></p>
```

### 模板 2：花里胡哨

改自：[自用SCI笔记模版](https://github.com/windingwind/zotero-better-notes/discussions/771)

可以在 [github](https://github.com/windingwind/zotero-better-notes/discussions/973) 或者[知乎](https://zhuanlan.zhihu.com/p/696175807 )找到我改造后的源码。

> 就是文章开始展示的图片。  
> 需要额外安装 zotero style、绿青蛙、translate 插件作为模板支持。

![主要加了表格和修改标题](/img/Zotero7Betternote模板.zh-cn-20240523135644862.webp)

由于 HUGO 博客不支持放 zotero 的 html 代码（放代码块里也会渲染出错），

可以在 [github](https://github.com/windingwind/zotero-better-notes/discussions/973) （ #973 ）找到源代码；也可以在[知乎](https://zhuanlan.zhihu.com/p/696175807)找到代码。

### 模板载入与报错：

`zotero 左上角` - `编辑` - `模板编辑器` - `新建` - `把代码复制到中间去` - `保存`

![如图](/img/Zotero7Betternote模板.zh-cn-20240523135706608.webp)

-   可能报错情况 1：**_Template New Template: 1714978248098 Error: ReferenceError: topItem is not defined_**

因为模板名称得是 `[Item]论文笔记` 的形式。别问，问就是 zotero 6 流传下来的底层代码。

-   可能报错情况 2：**_Template Preview Error: TypeError: Zotero. ZoteroStyle. Data. Ztoolkit. ItemTree. FieldHooks. GlobalCache is undefined_**

这里是笔记模板通过 zotero style 读取文件元数据，如果版本不匹配就不行。

本文代码对应,

`Zotero 7.0.0-beta.77+adaa61f2c版本` + `Ethereal Style4.4.2版本` + `Better note1.1.4-49`。

> 也是因为 zotero 7 最近几个版本都是优化 bug ，版本比较平稳了我才决定更新下 better note 的模板。
>
> 提醒一下， best note 版本还停留在 2023.12[^2]，所以笔记导出好像还有点问题。

-   可能报错 3：很多人完成以上两步依旧报错，原因还是在于这个笔记模板要读取文件元数据，如果直接对着 pdf 附件而不是论文条目加笔记模板，由于没有元数据，也会出错。

## 三、模板使用

打开自己要阅读的文件 pdf 后（确定这个 pdf 有 zotero 条目信息）

右侧条目笔记一排的加号-从模板新建条目笔记-然后在弹窗中打开自己要的模板即可。

![右侧条目笔记一排的加号-从模板新建条目笔记](/img/Zotero7Betternote模板.zh-cn-20240523135728403.webp)

## 四、经济学国内外

最后说点最近读论文的感想。目前，国内经济学家的风评极度不好，大家也说要学经济学必须出国（贫穷如我加英语不好当然选择国内苟着了）。我是赞同的，毕竟主流经济学框架就是来自西方。

但是这不是一个总量比较问题，而是追击问题。国内大把高校连三高的优质教学资源都凑不出来[^3]，但是研究进度已经日新月异，也算是新生代把难度卷上去了（

- 10 年前，《经济研究》做个完整的回归流程就行。

- 5 年前，计量经济学已经普及。

  毕业论文不写计量都要催着写计量。

- 如今，中国工业经济、管理世界、世界经济，一看最近的，大片好论文已经是 **数理模型定性+社会现实分析+计量论证三合一。** 至少模板上已经完全对齐了国际标准。

  最近读的越来越多的论文、异质性、机制检验有点经由经济含义分析，从而使得检验混合的意思了？感觉大佬们颇有无招胜有招的感觉。

只考虑纯本土培养。研究规范性起来了，剩下的就是原创性思想，这个追上去起码还有 20 年时间吧？就算今年提出天才的创新理论，还要等 20 年理论经历历史和社会的考验。
## 其他 zotero 相关

[滑翔闪：Word替代LaTex？](https://zhuanlan.zhihu.com/p/624450256)

[滑翔闪：是否选择更新zotero6到7？](https://zhuanlan.zhihu.com/p/673661938)

[滑翔闪：Zotero与经济期刊RSS订阅](https://blog.huaxiangshan.com/zh-cn/posts/zoterorss/)



[^1]: 最近我怀疑我是不是被洗脑了，天天经济学要讲有趣的故事，然而所谓的品味却不由自己决定。再说问题，现在我国经济这么多问题我却不能提出来一个能具体研究的问题，也太悲伤了...
[^2]: zotero 6 更新到 7 炸了一大波插件的适配，而且我觉得越来越卡了。
[^3]: 101 计划其实没有执行的土壤吧


