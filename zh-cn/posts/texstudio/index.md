# 优化你的 Texstudio 编辑体验


对于中文背景的用户来说，恐怕没有比想打出 `$$` 却由于输入法没来得及切换，最后打成了 `￥￥` 更让人抓狂的日常了。

尽管现在有 [overleaf](https://www.overleaf.com/)、[texpage](https://www.texpage.com/zh/) 、[slager](https://www.slager.link/#/home) 等一系列 $\LaTeX$ 在线编译网站，但他们依旧难以为此提供便利。线上渲染正变得越来越小气。如果想要尝试编译更大、更复杂、更长的文档又不愿付费，本地化软件永远是最好的选择（**只要没有协作编辑的需求**），同时也意味着更大的自由。

 - $\LaTeX$ 教程可参见[如何在1小时内快速入手LaTeX？](https://blog.huaxiangshan.com/zh-cn/posts/latex/)

## 宏命令

对于中文背景的 $\LaTeX$ 用户来说，恐怕没有比打出 `$$` 却由于输入法没来得及切换打成了 `￥￥` 更让人抓狂的日常了。

 [Obsidian](https://blog.huaxiangshan.com/zh-cn/posts/ob/) 留住我的原因是极其便利的写作插件：
 
- 快捷命令：`commander`、` editing toolbar`
- 图片转化：`image converter`
- 写作增强：`easy typing`
- ......

尤其是写作增强的 [easy typing](https://github.com/Yaozhuwa/easy-typing-obsidian/tree/master)，支持自定义补全、中英文自动空格、无缝中英字符切换——例如连续两次输入 `￥￥` 就会自动变成 `$$`。

那么问题在于，如何使得 texstudio 实现同样的功能呢？

答案是自定义宏。Texstudio 支持自定义宏定义，详细语法参见官方文档 [Personal macros](https://texstudio-org.github.io/advanced.html#personal-macros)。

**正常模式**的宏可以理解为文本转化和补全。我在**触发器**中写入 `￥￥￥￥ `（注意，此处结尾故意留下了一个空格）。`%|` 代表补全后的光标位置。

个人宏还可以自定义快捷键，例如下图我设置了 `Ctrl+M` 作为 `$$` 插入的快捷键。当我输入 `￥*2（空格）` 时，也会自动触发转化。

![触发器就是格式检测，当正则表达识别满足时自动触发](/img/texstudio.zh-cn.md-1760090933518.webp)

个人宏还支持脚本顺序，如果会玩可以玩出各种花样（例如一环扣一环的转换）。因此写宏时要注意顺序，**将更严格的正则检验宏放在上面**，例如 `￥￥￥￥转$$$$` 应当放在 `￥￥转$$` 之前。

**环境模式**感觉很鸡肋，完全能用正常模式替代。

**脚本模式**更加灵活，支持 `java script` 语言。

个人写了一个是，能把 `-内容1-内容2-内容2`（tab 键） 格式的内容转化为代码：

```
\begin{内容1}[内容2]\label{内容2}

\end{内容1}
```

顺便进一步设置了个映射，如果内容 1 是“证明”，就转化为“proof”; 是“概念”，就转化为“definition”。

代码如下：

```js
// ===== 环境中英文映射 =====
var envMap = {
    "定理": "theorem",
    "引理": "lemma",
    "命题": "proposition",
	"性质": "proposition",
	"练习": "exercise",
	"思考题": "exercise",
	"思考": "exercise",
	"问题": "exercise",
    "推论": "corollary",
    "定义": "definition",
	"概念": "definition",
    "例子": "example",
    "备注": "remark",
	"注意": "remark",
    "笔记": "note",
	"注释": "note",
    "案例": "case",
    "证明": "proof",
	"证": "proof",
    "练习": "exercise"
};

// ===== 获取匹配内容 =====
var env = triggerMatches[1];   // 环境
var title = triggerMatches[2]; // 标题
var label = triggerMatches[3]; // 标签

// ===== 转换中文环境为 LaTeX 英文环境 =====
if (envMap[env]) {
    env = envMap[env];
}

// ===== 构造 LaTeX 代码 =====
var txt = "\\begin{" + env + "}";
if (title) txt += "[" + title + "]";
if (label) txt += "\\label{" + label + "}";
txt += "\n\n\\end{" + env + "}\n";

// ===== 插入文本 =====
cursor.insertText(txt);

// ===== 调整光标位置到环境内部 =====
cursor.movePosition(2, cursorEnums.Up);
cursor.movePosition(1, cursorEnums.StartOfLine);
```

触发器设置为
```js
\-(.+)\-(.+)\-(.+)\t
*\t 是tab键
*(.+) ：括号就是一个环境，代表分隔符-中的环境。其中.+代表一个及其以上字符，如果要求至少两个字符，使用.+.即可。
```

逻辑也不难，触发器三个括号的正则识别内容对应着代码里的 env 、title、label。填入构造代码模板，然后移动光标。(唯一问题是 texstudio 正则识别对中文符号的兼容太差了)

![如图](/img/texstudio.zh-cn.md-1760491203042.webp)


## Texstudio 配置语言助手

Texstudio 页面。

![如图](/img/LaTeX入门.zh-cn-1758093039527.webp)

先下载 java (请自行寻找教程)

然后下载免费的语法检查助手—— [https://languagetool.org/download/](https://languagetool.org/download/)

下载自己对应的电脑版本，我是 win 系统加最新版 texstudio，所以选择 [LanguageTool-6.6.zip](https://languagetool.org/download/LanguageTool-6.6.zip)。

下载好之后解压对应的 languagetool 压缩包。在对应的文件夹页面打开 cmd（直接在路径栏输入 cmd 即可从这里打开）

然后运行 java -jar languagetool. Jar

打开后，`text checking` - `选项` 进入页面，设置语言、服务器端口。

![如图](/img/LaTeX入门.zh-cn-1758092612033.webp)

设置完成后，进入 texstudio 设置最下面的 languagetool 即可。

![如图](/img/LaTeX入门.zh-cn-1758092768418.webp)

之后重启 texstudio，在帮助检查语言工具即可：

波浪线对应的就是语法错误。

![如图](/img/LaTeX入门.zh-cn-1758092931198.webp)

右键错误地方就会有更正提示：

![如图](/img/LaTeX入门.zh-cn-1758092975675.webp)

## 一些快捷键

- **`Ctrl` + 鼠标左键**：可以快速定位（跳转到源代码或 PDF 对应位置）。
- **`Ctrl` + `Shift` + `I`**：可以迅速添加 `\item`（用于列表环境 `itemize`/`enumerate`）。
- **`Ctrl` + `T`**：可以快速添加、取消注释（对当前行或选中的多行）。
- **`Ctrl` + `Shift` + `M`**：可以快速添加**行内代码**，例如在光标位置添加 `$ x $`。
- **`Ctrl` + `Shift` + `N`**：可以增加 `equation` 环境（例如 `\begin{equation} ... \end{equation}`）。
- **`Alt` + `Shift` + `M`**：可以增加**显示的代码**（通常是数学环境，例如 `$$...$$` 或 `\[ ... \]`）。

## 其他提示

活用左边列的符号收藏功能。

![如图](/img/texstudio.zh-cn.md-1760092010830.webp)

代码编辑页面右键可以跳转 pdf 渲染位置。
`Ctrl` 键点击 pdf 位置可以跳转代码编辑位置。


Texstudio 支持行内预览。`alt+p` 启动，但是可能和其他模板渲染设置冲突。例如我使用了 elegent 系列的模板就无法查看预览了。

![Texstudio 支持行内预览。`alt+p` 启动](/img/texstudio.zh-cn.md-1760238587723.webp)

## 参考资料

- [Advanced features](https://texstudio-org.github.io/advanced.html#personal-macros)
- [Texstudio宏脚本编写-2022-4-24 16:48:09](https://www.bilibili.com/video/BV1uA4y1X7Ji/?spm_id_from=333.1391.0.0&vd_source=0e137afa81fa006aaa9f39b597699a06)
- [Installing Language Tool in TexStudio](https://tex.stackexchange.com/questions/155148/installing-language-tool-in-texstudio)
