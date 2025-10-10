#  如何在1小时内快速入手LaTeX？




因为学长发的朋友圈接触了 LaTeX ，在这里记录下学习过程，顺便整合下这段时间看的实用帖子。

## LaTeX 何方神圣

> LaTeX（/ˈlɑːtɛx/，常被读作/ˈlɑːtɛk/或/ˈleɪtɛk/） 是一种基于 TeX 的高品质排版系统，由美国计算机科学家莱斯利·兰伯特在 20 世纪 80 年代初期开发，非常适用于生成高印刷质量的科技和数学、物理文档，尤其擅长于复杂表格和数学公式的排版。LaTeX 是科学文献交流和出版的事实标准。 （维基百科）

- Word：所见即所得
- LaTeX：排版格式和文字内容是分开的

（排版是通过代码调整，里面最棒的是各种宏包，调用来各可以做何种事情，比如在文章中加几个 emoji~）

![插入emoji，Word就不会插入的这么自然啦~](/img/LaTeX入门-20240804115505904.webp)

对我而言，LaTeX 的排版是真的美，排除舒服的版面很有成就感。如果你的文章里会出现**大量的数学公式和图文表格**，那么 LaTeX 一定是比较好的选择~

![word排版](/img/LaTeX入门-20240804115702301.webp)

![LaTeX排版](/img/LaTeX入门-20240804115745943.webp)

![我们队在一次数学建模比赛中描写排队模型，LaTeX排](/img/LaTeX入门-20240804115849727.webp)

## 下载和安装

不下载也行，有在线编辑的 LaTeX 网站，可以跳过这里，先看后面的 LaTeX 网站。

LaTeX 有很多版本：LaTeX 、Ctex....... 对应的编码环境配置也有很多版本 winedit，studio......

个人推荐以下配置（针对 Windows 系统）: `texlive` + `texstudio`

原因：对新手友好，支持中文页面（winedit 页面是英文的）

[LaTeX 下载教程]( https://blog.csdn.net/SevenBerry/article/details/126692374 )：随便找的，可以自己找最新的。

> 当初我找的教程是 2018 版本的，结果 2021 安装有点不同，这里放的是 2022 版本

## 快速上手 （两个小时以内）

> 打开链接之前的 tips:
> 
> 里面有个地方在 Windows 更新后已经不行了，那就是“如何让 LaTeX 支持中文正文”，代码修正放在链接下面的代码块里：

{{< bilibili BV11h41127FD>}}

```
\usepackage[fontset=windows]{ctex} 
%百分号就是注释的意思 
%usepackage就相当于添加宏包，比如给手机下载应用，个浏览器下载插件，有了宏包能做更多事 
%window升级后用这个才方便输出中文或者识别
```

如果内置 PDF 无法预览显示，可能是 PDF 阅读器的锅。

## 进阶教程（论文需要的）

基于上个链接视频没有的内容进行补充

### 引用有两种方法

[LaTeX 插入参考文献的方法（两种全）](https://blog.csdn.net/weixin_44378800/article/details/109905695?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=1)

其中第一种方法（BiB 格式）如果编码不成功：

1. 验 bib 格式或者引用文献那里有没有打了什么奇怪的符号
2. 编码顺序和编码次数不对
3. 重启然后再来

### 补充，知网文献如何转化为 BIB 格式？

我采用的方案是油猴插件（大学生的网课利器！）。
目前火狐，QQ 浏览器，edge，谷歌浏览器都支持油猴插件。
- [油猴插件下载](https://www.tampermonkey.net/index.php?browser=chrome&locale=zh)
- [插件脚本下载](https://greasyfork.org/zh-CN/scripts?page=2)
- [ 知网参考文献 bibtex](https://greasyfork.org/zh-CN/scripts/393305-%E7%9F%A5%E7%BD%91-%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE-bibtex)

### Emoji 卖萌

我推荐宏包的方式插入 emoji，
详细可以看看对应的手册。

举个例子：

	\emoji{grinning}	
	\emoji{sweat-smile}	
	\emoji{rofl}	
	\emoji{joy}	
	\emoji{smiling-face-with-hearts}	
	\emoji{face-savoring-food}

[在 LaTeX 中使用 Emoji ✌️](https://zhuanlan.zhihu.com/p/109158588)

LaTeX 有很多个编译器，适用于 emoji 宏包的是 luaLaTeX

> 但如果一开始就这样似乎无法产生 PDF 文件。我的建议是，先不用 emoji 宏包，用 pdfLaTeX 编译，产生 PDF 后，再加入 emoji 命令使用 luaLaTeX 编译。

### 有趣的宏包

下棋宏包，围棋，中国象棋，国际象棋，乐谱

[LaTeX 编辑部](https://www.LaTeXstudio.net/huLaTeX/templet/musicBook.htm)

### 进阶道路（来自学长的补充）

> LaTeX 进阶还可以学一下：
>  
> 1. Tikz package 绘图 
> 2. Beamer document class 做 ppt 
> 3. 自己开发 package/class document 
> 
> 感觉这样作为 LaTeX 的使用者来讲，几乎就到头了。

## LaTeX 网站

### 在线 LaTeX 编辑网站
- 国外：[overleaf](https://www.overleaf.com/)
- 国内：[texpage](https://www.texpage.com/) 、[slager](https://www.slager.link/#/home)
- LaTeX 模板：[TeX 工作室](https://www.LaTeXstudio.net/category/5.html)、[shareLaTeX](https://www.shareLaTeX.com/)
### 数学公式识别网站
- [SimpleLaTeX](https://simpletex.cn/)
- [白描](https://web.baimiaoapp.com/image-to-LaTeX)
- [LaTeX 公式编辑器](https://www.LaTeXlive.com/)
- [Mathpix](https://mathpix.com/)
### LaTeX 表格生成
- [LaTeX 表格](https://www.tablesgenerator.com/)
- [表格转换工具](https://tableconvert.com/zh-cn/LaTeX-generator#google_vignette)
### PDF 处理网站
> 为什么把这个放在 LaTeX 这里？因为 LaTeX 的效果是生成 PDF ，有时候一些比赛，论文场合只给 PDF 的封面。大家 LaTeX 协作时，我们也需要把几个 PDF 进行整合。

[PDF 处理网站](https://www.ilovepdf.com/zh-cn/merge_pdf)


## 个人入门代码


```LaTeX
\documentclass{article}
\usepackage[fontset=windows]{ctex}
%window升级后用这个才方便输出中文或者识别
\usepackage{graphicx}%图片插入
\usepackage{emoji}%表情
\usepackage{amsmath}
\usepackage{xcolor}
 \usepackage{cite}%引用
\usepackage{amssymb}%数学符号
\usepackage{indentfirst}
\usepackage{tikz}
\usepackage{pdfpages} %插入PDF
%\pagestyle{myheadings}%设置页面格式
%arabic 阿拉伯数字
%roman l小写的罗马数字
%Roman 大写的罗马数字
%alph 小写字母
%Alph 大写字母
\pagenumbering{arabic}%设置页码格式
\usepackage{fancyhdr}%导入fancyhdr包
\pagestyle{fancy}
\fancyhead[L]{左页眉}
\fancyhead[R]{右页眉}
\fancyhead[c]{中间页眉}
\fancyfoot[L]{左页脚}
\fancyfoot[C]{\thepage}
\fancyfoot[R]{右页脚}
%-------------------------------
%\fancyfoot[LO]{奇数页左页脚}
%\fancyfoot[LE]{偶数页左页脚}
%\fancyfoot[RO]{奇数页右页脚}
%\fancyfoot[RE]{偶数页右页脚}
%------------------------------
\renewcommand{\headrulewidth}{4pt}%分隔线宽度4磅
\renewcommand{\footrulewidth}{4pt}
%以上是导入的各种数据包，就像浏览器的插件一样，有了这些包才方便生效一些好用的代码
\title{\heiti 我的\LaTeX
的上路操作记录}
\author{\kaishu 胡昂}
\date{\today}
\renewcommand{\abstractname}{\textbf{\zihao{4}摘\quad 要}}
%摘要字体：4号，加粗，中间有空格
%以上部分属于是前言

%————————————————————————%
%接下来就是正文了
\usepackage{tikzit}
\begin{document}

\maketitle%取标题
%%就是注释的意思
\newpage%另起一页
\tableofcontents%命令输出论文目录
%\listoffigures   插图目录
%\listoftables    表格目录
\newpage

\begin{abstract}%摘要

这里就是摘要环节了。对于三种文档类article，report，book，前两种是有摘要环境的，用法环节就和这部分一样。

\noindent{\textbf{关键词：} 摘要;\LaTeX;论文格式;操作记录}\centering%关键词居中

\end{abstract}

\emoji{grinning}
\emoji{sweat-smile}
\emoji{rofl}
\emoji{joy}
\emoji{smiling-face-with-hearts}
\emoji{face-savoring-food}

\part{标题的层次}

但chapter一般在report里用
{比section更大的是chapter}

\section{第一个章节}
直接在章节标题下面写点东西？\emoji{+1}
这里描述下字体处理\emoji{joy}
\subsection{第一个章节下的第一个子章节}
\subsubsection{我已经可以开始套娃了}
我直接开始胡言乱语并且开始写点东西
哈哈哈哈\footnote{这个是添加脚注的命令}

\subsubsection{子章节用无限sub描述}

\section{第二个章节}

\section{第三个章节}
这里说明的是列表
的begin end 对应的是列表环境域，其中的所有内容共享一个文字格式


\begin{itemize}

\item 无序列表一 
\item 无序列表二
\item 无序列表三

\end{itemize}

\begin{enumerate}

\item 有序列表一 
\item 有序列表二
\item 有序列表三

\end{enumerate}

\part{文字特效}

\textbf{加粗}

\textit{斜体}

\underline{下划线}

\part{数字工具排版}

\section{公式环境}


LaTeX支持直接输入，不过需要特定的符号：$E=C^2$
写成单独一行也是可以打，加上符号

\begin{equation}
E=MC^2
\end{equation}

    也可以缩写： 
      
    \[
x^{4}+\frac{x}{y}=x^3-23y{7}
\]
    
    \[
    d={k \varphi(n)+1} \over e   
    \]
    
    \[
\mathrm{func}(x, y)\triangleq \sum \left({x^{100}}\right)
    \]
    
\section{加减号}

数学符号：变量

大于号：\textgreater

小于号： \textless

下面的后面要加空格，否则会识别错误

大于等于：\geq

小于等于：\leq

\section{大括号}

方法一：


$$ f(x)=\left\{
\begin{aligned}
x & = & \cos(t) \\
y & = & \sin(t) \\
z & = & \frac xy
\end{aligned}
\right.
$$

方法二：

$$ F^{HLLC}=\left\{
\begin{array}{rcl}
F_L       &      & {0      <      S_L}\\
F^*_L     &      & {S_L \leq 0 < S_M}\\
F^*_R     &      & {S_M \leq 0 < S_R}\\
F_R       &      & {S_R \leq 0}
\end{array} \right. $$

方法三：

$$f(x)=
\begin{cases}
0& \text{x=0}\\
1& \text{x!=0}
\end{cases}$$


$\longleftrightarrow$ \\箭头


\part{表格怎么打}

随意写点东西？

\begin{table}
\centering
\begin{tabular}{||p{2cm}|r|c|l||}
\hline\hline 
单元格1&单元格2&单元格3&单元格\\
\hline
单元格4&单元格5&单元格6&单元格\\
\hline
单元格7&单元格8&单元格9&单元格\\
\hline\hline
\end{tabular}
\caption{表格的标题}
\end{table}



这下面是很秀的三线格

\begin{table}[h]

\begin{tabular}{ccc}
\hline
变化部分  & 所有（容易变化） & 国有（不易变化） \\ \hline
耕地    & 自种；荒废；外包 & 一般不变     \\
未利用荒地 & 转变为耕地    & 转变为耕地    \\ \hline
\end{tabular}

\end{table}



\part{关系图}

\begin{tikzpicture}
\node [draw,rectangle](a)at(0,0){concat};
\node [draw,rectangle](b)at(0,-1){relation};
\node [draw,rectangle](c)at(-2,-1){relation};
\node (d)at(1,-1){...};
\node [draw,rectangle](e)at(2,-1){relation};
\node [draw,circle](f)at(-3.5,2){+};
\node (g)at(-3.5,3){$\{f_A^n\}$};
\node (h)at(-3.5,-3){$\{f_A^n\}$};
\node (i)at(-2,-3){$\{f_G^m,f_G^n\}$};
\node [draw,rectangle](j)at(4.3,2.5){mat multiply};
\node [draw,rectangle](k)at(6,1.5){weight eq.(3)};
\node [draw,rectangle](l)at(6.5,0.5){ReLU};
\node [draw,rectangle](m)at(5,-0.5){scaled dot};
\node [draw,rectangle](n)at(3.5,-1.5){$W_V$};
\node [draw,rectangle](o)at(4.6,-1.5){$W_Q$};
\node [draw,rectangle](p)at(5.6,-1.5){$W_K$};
\node [draw,rectangle](q)at(6.5,-0.5){$W_G$};
\node [draw,rectangle](r)at(6.7,-1.5){$\epsilon_G$};
\node (s)at(6.7,2.5){relation};
\node (t)at(4.3,3.5){$\{f_R^n\}$};
\node (u)at(4.6,-2.5){$\{f_A^n\}$};
\node (v)at(6.7,-2.5){$\{f_G^m,f_G^n\}$};

\draw [dashed](3,3) rectangle (7.5,-2);
\draw [dashed](2.5,-0.7)--(3,3);
\draw [dashed](2.5,-1.25)--(3,-2);

\draw [->](node cs:name=a,angle=90)|-(f);
\draw [->](node cs:name=b,angle=90)--(a);
\draw [->](node cs:name=c,angle=90)|-(a);
\draw [->](node cs:name=e,angle=90)|-(a);
\draw [->](node cs:name=f)--(g);
\draw [->](node cs:name=h)--(f);
\draw[->](node cs:name=i,angle=90)--(c);
\draw [->](-3.5,-2) -|(-2.3,-1.25);
\draw [->](-3.5,-2) -|(-0.3,-1.25);
\draw [->](-3.5,-2) -|(1.7,-1.25);
\draw [->](-2,-2.3) -|(0.3,-1.25);
\draw [->](-2,-2.3) -|(2.3,-1.25);
\draw [->](3.5,-1.25)--(3.5,2.25);
\draw [->](4.6,-1.25)--(4.6,-0.75);
\draw [->](5.6,-1.25)--(5.6,-0.75);
\draw [->](6.6,-1.25)--(6.6,-0.75);
\draw [->](q)--(l);
\draw [->](6.5,0.7)--(6.5,1.2);
\draw [->](k)|-(j);
\draw [->](j)--(t);
\draw [->](u)-|(n);
\draw [->](u)--(o);
\draw [->](u)-|(p);
\draw [->](v)--(r);
\end{tikzpicture}

\begin{tikzpicture}[node distance=10pt]
\node[draw, rounded corners]                        (start)   {Start};
\node[draw, below=of start]                         (step 1)  {Step 1};
\node[draw, below=of step 1]                        (step 2)  {Step 2};
\node[draw, diamond, aspect=2, below=of step 2]     (choice)  {Choice};
\node[draw, right=30pt of choice]                   (step x)  {Step X};
\node[draw, rounded corners, below=20pt of choice]  (end)     {End};

\draw[->] (start)  -- (step 1);
\draw[->] (step 1) -- (step 2);
\draw[->] (step 2) -- (choice);
\draw[->] (choice) -- node[left]  {Yes} (end);
\draw[->] (choice) -- node[above] {No}  (step x);
\draw[->] (step x) -- (step x|-step 1) -> (step 1);
\end{tikzpicture}

\begin{tikzpicture}[tikzfig]
\begin{pgfonlayer}{nodelayer}
\node [style=none] (5) at (-9.5, -0.5) {};
\node [style=none] (7) at (-9.5, 0) {};
\end{pgfonlayer}
\end{tikzpicture}

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



\part{图片如何插入}

\section{本地图片插入，放入对应文件夹}

[htbp] 为调整图片排版位置选项，说明如下：

[h]当前位置。将图形放置在正文文本中给出该图形环境的地方。如果本页所剩的页面不够，这一参数将不起作用。

[t]顶部。将图形放置在页面的顶部。

[b]底部。将图形放置在页面的底部。

[p]浮动页。将图形放置在一只允许有浮动对象的页面上。

\begin{figure}
\centering
    % centering是图片居中显示的意思
\includegraphics[width=0.2\textwidth]{薇尔莉特}
\caption{薇尔莉特}\emoji{innocent}
\includegraphics[width=0.2\textwidth]{我自己}
\caption{黄某人}
\end{figure}

textwidth是文本区域宽度


\section{插入emoji图片}

\emoji{grinning}

\emoji{sweat-smile}

\emoji{rofl}

\emoji{joy}

\emoji{smiling-face-with-hearts}

\emoji{face-savoring-food}

\section{插入PDF}



\begin{figure}
\centering
\includegraphics[width=0.8\textwidth,height=0.5\textwidth]{实践时间是.pdf}
\\中括号是控制PDF大小长宽；大括号是PDF的名字
\caption{标题} 
\end{figure}
%\includepdf{实践时间是.pdf} 

\section{两个图并排}

\begin{figure}[h]
\centering
\begin{minipage}{.5\textwidth}
\centering
\includegraphics[width=.8\linewidth]{截面PSM 平衡性检验.pdf}
\caption{\heiti 截面PSM 平衡性检验}
\end{minipage}%
\begin{minipage}{.5\textwidth}
\centering
\includegraphics[width=.8\linewidth]{support.pdf}
\caption{\heiti 满足共同支撑假设样本的分布情况 }
\end{minipage}
\end{figure}

\section{四个图2*2}

\begin{figure*}
\begin{minipage}[t]{0.5\textwidth}
\centering
\includegraphics[width=3.2in]{1.pdf}
\caption{fig1}
\label{fig:side:a}
\end{minipage}%
\begin{minipage}[t]{0.5\textwidth}
\centering
\includegraphics[width=3.2in]{2.pdf}
\caption{fig2}
\label{fig:side:b}
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\centering
\includegraphics[width=3.2in]{3.pdf}
\caption{fig3}
\label{fig:side:a}
\end{minipage}%
\begin{minipage}[t]{0.5\textwidth}
\centering
\includegraphics[width=3.2in]{4.pdf}
\caption{fig4}
\label{fig:side:b}
\end{minipage}
\end{figure*}


\part{引用文献}

\section{简单引用}

\section{文件的引用}




%不同数据库用，分割


\section*{参考文献}

\begin{thebibliography}{99}  

\bibitem[]



\end{thebibliography}



\end{document}


```

## 结语

恭喜你成功成为 LaTeX 大军中的一员。
接下来展开精致的排版生活吧！

最后来点 LaTeX 笑话：

有什么只有 Word 能做，LaTeX 做不到呢？那就是在图片背后写大段文字水字数！（笑~）
