#  LaTeX 与绘图



众所周知，tikz 宏包是 latex 画图的神级宏包，但是代码确实难打。

于是个人推荐使用 tikzit 软件，鼠标操作作画，然后自动转化成 latex 代码。

## 软件下载

下载链接: [TikZit](https://tikzit.github.io/)

建议上谷歌翻译，功能介绍耐心细致，
这里不再重复作画教程，tikzit 页面简洁易懂。

页面如下：

![tikzit](/img/LaTeX入门2.zh-cn-20250103203258581.webp)

## 环境配置 （两种图片插入方式）

这里先强调环境配置。

核心是还要自己下载宏包拓展—— [tikzit.sty](https://tikzit.github.io/tikzit.sty)


同时有两种插入方式。

![本段文字就在下载页面的插入latex部分，注意里面的蓝色超链接字体，点进去即可下载。](/img/LaTeX入门2.zh-cn-20250103203412739.webp)

本段文字就在下载页面的插入 LaTeX 部分，注意里面的蓝色超链接字体，点进去即可下载。

### 个人推荐：直接代码插入

首先将下载好的 `tikzit.sty` 和 LaTeX 论文软件放在同一主体下，

![将下载好的tikzit.sty和latex论文软件放在同一主体下](/img/LaTeX入门2.zh-cn-20250103203444252.webp)

这样才能识别宏包

LaTeX 宏包使用：

```LaTeX
\usepackage{tikzit} \\使用宏包tikzit.sty
```

当在 tikzit 做好图后，依次点击工具栏，`tool`，`jump to selection`，底部就会弹出 LaTeX 代码

![自动生成](/img/LaTeX入门2.zh-cn-20250103203736095.webp)


整体环境代码如下：
```LaTeX
\documentclass{article}
\usepackage{tikzit}
\begin{document}

\begin{tikzpicture}
	\begin{pgfonlayer}{nodelayer}
		\node [style=none] (0) at (-5.75, 1) {Y};
		\node [style=none] (2) at (-2, 0.75) {无差异曲线};
		\node [style=none] (3) at (-4, 4) {};
		\node [style=none] (4) at (2.25, -1) {};
		\node [style=none] (5) at (-5, 3.75) {};
		\node [style=none] (6) at (-5, -1.5) {};
		\node [style=none] (7) at (2.75, -1.5) {};
		\node [style=none] (8) at (-1, -2.25) {X};
	\end{pgfonlayer}
	\begin{pgfonlayer}{edgelayer}
		\draw [bend right=45, looseness=1.50] (3.center) to (4.center);
		\draw (6.center) to (7.center);
		\draw (6.center) to (5.center);
	\end{pgfonlayer}
\end{tikzpicture}

\end{document}
```


![页面](/img/LaTeX入门2.zh-cn-20250103203827922.webp)



### 图片引用插入

过程就是，先利用 tikzit 保存多组自己作画的矢量图，然后编号，再插入 tex 中。

> （参考 latex 参考文献插入和图片插入的类似插入方式）

具体过程，

- 创建个文件夹，命名为 `tikzpaper`。
- 把 [tikzit.sty](https://tikzit.github.io/tikzit.sty) 放进里面
- 在 `tikzpaper` 文件夹中创建一个叫 `figures` 的文件夹，把所有 tikzit 保存的作图保存在里面。
- 在 tikzpaper 文件夹中创建 `paper.tex` 。

`paper.tex` 环境如下

> 其中 `\tikzfig{ddd} ` 和 `\ctikzfig{ddd} ` 就是两种引用图片的方式，大括号{}里面就是保存在 figures 文件夹里的图片文件名。

```LaTeX
% paper.tex
\documentclass{article}
\usepackage{tikzit}
%\input{sample.tikzstyles}

\begin{document}
	
	A tikz picture as an equation:
	\begin{equation}
		\tikzfig{ddd} 
	\end{equation}
	
	A centered tikz picture:
		\ctikzfig{ddd}	
\end{document}
```

![效果如图](/img/LaTeX入门2.zh-cn-20250103204125035.webp)

## 其他工具

开源软件都是小巧玲珑的，不少解压即用。

- [mathcha](https://www.mathcha.io/)（网页，付费）
- [tikzcd-editor]( https://tikzcd.yichuanshen.de/ ) (很多回答提到了这个网站，但麻烦的是里面没有告诉需要的宏包，但是现在有了 gpt 了影响不大）
```LaTeX
\usepackage{tikz} \usetikzlibrary{cd} \\tikz子包 调用关系图tikzcd命令环境
```
- [inkscape](https://inkscape.org/)（可以当成开源的 PS）
- [ipe](http://ipe.otfried.org/)（免费开源，但是目前没有汉化包，但页面都是图形为主）
下载 ipe 时安装路径不要有中文，不然打开会出错
（ipe 建议配合 B 站有个教学视频服用：[B站教学](https://www.bilibili.com/video/BV14E411u7Na/?spm_id_from=333.337.search-card.all.click&vd_source=0e137afa81fa006aaa9f39b597699a06)）
- [latexdraw](https://latexdraw.sourceforge.net/)（免费开源）

![LaTeXdraw](/img/LaTeX入门2.zh-cn-20250103204450111.webp)
- [TikzEdit](http://tikzedt.org/)（免费开源，英文，但通俗易懂
![tikzedit](/img/LaTeX入门2.zh-cn-20250103204534530.webp)

Tikzedit 就像一个即时编译的 tex，页面也和 tex 完全一致

> TikzEdit 和 latexdraw 我都体验过，latexdraw 可视化编辑做得更好，文字位置颜色也能可视化调整位置。TikzEdit 则更多的是点位和线条的可视化移动编辑。但是两者对于箭头样式都不能可视化编辑。对于有一定基础的人，TikzEdit 更好用。

- 邪道方法：花里胡哨的工具（例如 PPT，[processon](https://www.processon.com/)（在线网页））作图，保存 PDF，然后剪切，作为 PDF 文件插入 latex 中（这样也可以减少 latex 的排版和代码运行压力）
    
![这个是我使用processon网页版随便画的图，不过里面的latex公式保存为PDF会失真，其他中文格式不会](/img/LaTeX入门2.zh-cn-20250103204622722.webp)

以下是插入剪切后的 PDF 的局部环境

```LaTeX
\begin{figure}
	\centering
	\includegraphics[width=0.8\textwidth,height=0.5\textwidth]{实践时间是.pdf}
	\\中括号是控制PDF大小长宽；大括号是PDF的名字
	\caption{标题} 
\end{figure}

顺便补充下插入整页PDF文件的整体环境吧

\documentclass[a4paper]{article}
\usepackage{pdfpages}
\begin{document}
            \includepdf[pages={1,2,4,7}]{PDF的名字.pdf} 
            \\中括号里面的就是原PDF的页数
\end{document}

```

