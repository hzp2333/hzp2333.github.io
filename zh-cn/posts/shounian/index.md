# 收敛：从“算式的极限”到“增长的极限”


{{< music url="/music/Can You Hear The Music-Ludwig Göransson.mp3" name="Can You Hear The Music" artist="Ludwig Göransson" cover="/images/aoben.png" >}}

在经济学课程中，大部分概念往往会经历“**数学含义-经济含义-统计含义**”三次重新理解。我们总是在不同的地方见到同一个东西，但是却很少一口气把它通拉理解一遍，例如[三个计算式](https://blog.huaxiangshan.com/zh-cn/posts/flapxq/)。

> 本文将概括下“收敛”这个概念在三个环节的贯穿（虽然关联性似乎不强，但我还是想梳理一遍）

## 一、高数: 极限和收敛

> 极限和收敛，一开始就是一回事儿。

主要参考**同济版《高等数学》**[^1]，收敛是作为极限的一种描述状态引入：

**数列的极限**中（上册 21 页），数列 $x_n$ 收敛于 $a$ ，记为 $\lim_{n \rightarrow \infty}{x_n=a}$。

**函数的极限**中（上册 33 页），函数收敛，记为 $\small \lim_{n \rightarrow \infty}{f(x_n)}=\lim_{n \rightarrow x_0}{f(x)}$ 。

**级数的极限**中（下册 252 页），$\small s=u_1+u_2+u_3+...u_i+...$ 无穷级数收 $u_i$ 敛，意味着 $\small \lim_{n \rightarrow \infty}{s_n=s}$ 反之则为发散。
$$
收敛分类
\begin{cases} 
内容
\begin{cases} 
绝对收敛\newline 
条件收敛 
\end{cases}\newline 
形式\begin{cases} 
逐点收敛\newline 
一致收敛 
\end{cases} 
\end{cases}
$$
其中，级数收敛又分为绝对收敛和条件收敛; 逐点收敛和一致收敛

**绝对收敛：** $\small \sum_{n=1}^{\infty}{|u_n|}$ 收敛，则称 $\small \sum_{n=1}^{\infty}{u_n}$ 绝对收敛。

**条件收敛：**$\small \sum_{n=1}^{\infty}{|u_n|}$ 不收敛，$\sum_{n=1}^{\infty}{u_n}$ 收敛，则称 $\small \sum_{n=1}^{\infty}{u_n}$ 条件收敛。

**点点收敛：** $\small  \exists{0<x<\delta},\forall\varepsilon>0, |f(x)-A|<\varepsilon$，$\small  \exists{0<x<\delta},\forall\varepsilon>0, |f(x)-A|<\varepsilon$

**一致收敛：** $\small  \exists{0<|x_1-x_2|<\delta},\forall\varepsilon>0,|f(x_1)-f(x_2)|<\varepsilon$，$\small  \exists{0<|x_1-x_2|<\delta},\forall\varepsilon>0,|f(x_1)-f(x_2)|<\varepsilon$

顺便提一手收敛半径，也就是能让级数 $\small u_n（x）$ 收敛的 $x$ 的范围值。

**收敛发散判定答题**有没有捷径呢? 我的高数老师就说了一个“幽默”的方法，我在知乎上还刷到过：

你看这两个字，是不是既收敛又发散（

![既收敛又发散](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110525604.webp)

## 二、概率论：大数定理与中心极限

> 你以为的“偶然”往往蕴含在“必然”之中。有人**必然**中彩票，只是那个人**偶然**是你。

参考**茆诗松版《[概率论与数理统计](https://zhuanlan.zhihu.com/p/647384107)》**[^2]，随机变量序列有两种收敛方式，依概率收敛和依条件收敛。

**依概率收敛：**$\bbox[#def,5px,border: 1px solid]{ x\stackrel{P}{\longrightarrow}c }$

例如丢硬币，可能一开始正面朝上的几率偏离 $\frac{1}{2}$ 的幅度极大，当投掷的次数越来越多后，频率就会趋近于概率。频率统计成了确定概率[^3]的方法之一。

各种版本的大数定理大数定理 $\boxed{ 大数定理 }$ 基本说的都是一件事：随着实验次数 n 的增加，概率与频率的偏差值 $\small \frac{S_n}{n}-P$ 大于预先给定的一个值 $\varepsilon$ 的可能性会越来越小。

> 无论是伯努利（**Bernolli**）大数定理、切比雪夫大数（**chebyshev**）定理、马尔科夫（**Markov**）大数定理、辛钦（**Khinchin**）大数定理，本质上说的都是这一件事[^4]。

**依分布收敛：**$\bbox[#def,5px,border: 1px solid]{ x\stackrel{F}{\longrightarrow}c }$

强分布收敛是点点分布收敛，弱分布收敛是去掉间断点只考虑 $F(x)$ 的连续分布。

表示为$ \mathbb{P}(X_n\leqslant a)\to\mathbb{P}(X\leqslant a) $也就是$ \lim_{n\to\infty}F_n (x)=F (x)$ 。

$\boxed{ 中心极限定理 }$ 说的是这样一件事：**一定条件**[^5]下，独立随机变量和的 $Y_n=\sum_{n}^{i=1}{X_i}$ 分布函数会趋于正态分布。

**有趣的函数分布知识**[^6]

-   假设存在一个随机变量，满足二项分布。
-   当它趋于极限，期望等于方差，就成了泊松分布。
-   随机变量间的间隔则满足指数分布。
-   第 n 次变量对应的横坐标服从伽马分布。

## 三、经济学意义：收敛效应

> 货币≠数字，运营≠算题，经济≠数学

### 1、收敛假说（趋同）

来自“区域经济学”课老师用过的资料 **[《高级经济地理学》](http://qrcode.cp.cn/qr_code.php?id=r4e72n1bcu2o3o81fzg7uooy289qegqu)** （贺灿飞著）。

随着索罗（**_solow_**）模型的提出, 发展经济学研究者们发出了疑问：

**既然，每个经济体有自己的稳态点与平衡增长路径。**

**同时，落后的经济体发展地很快，先进的经济体发展的速度不断减缓。**

**那么问题来了，最后大家的经济增长会不会趋同呢？**
$$
\begin{cases} 
\beta收敛
\begin{cases} 
绝对收敛\newline
条件收敛\newline
俱乐部收敛 
\end{cases}\newline
\sigma收敛 
\end{cases}
$$
$\beta$ 收敛：

-   $\boxed{\beta 绝对收敛}$ 认为：无论经济体初始情况如何，由于弱者发展快，强者发展慢，最后经济发展总是收敛到一致的水平。我们需要的只是“一点点”耐心。
-   $\boxed{\beta 条件收敛}$ 认为：经济体的增长速度受某些环境结构（例如人口结构，要素禀赋，要素增长率）影响，因此不同的经济体收敛于不同的稳态，最后发展的结果也不同。
-   $\boxed{俱乐部收敛}$ 认为：初期经济发展水平接近的经济集团和较富的国家集团各自内部存在条件收敛，而两个集团之间却没有收敛的迹象。

$\sigma$ 收敛：

-   $\boxed{\sigma收敛}$ 认为：不同经济体间的标准差 $\sigma$ 总是在不断缩小。

### **2、收敛速度**

> 似乎是实分析中的数学概念，但我第一次学是在**_Romer_**的《高级宏观经济学》中学到的，所以归纳到经济部分。

查了下维基百科（**[Rate of convergence](https://en.wikipedia.org/wiki/Rate_of_convergence)），**主要应用在算法优化和深度学习领域**。**

若序列 $x_k$ 收敛于 $L$，下式 $\mu$ 就是收敛率的**表达式**。

$$
\lim_{k\to\infty}\frac{|x_{k+1}-L|}{|x_k-L|^q}=\mu 
$$
当式子中的 $q=1$ 时，就是**线性收敛**收敛速度就是 $t$ 和 $t+1$ 时刻，数值到收敛点的数值差距之比。

> 想象下跑步比赛。我们衡量快慢，比较的是从起点开始的距离。  
> 收敛则像我们在焦急的等待下课铃。我们在意的是距离多久才能到终点。

![收敛到一起](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110613986.webp)

![solow model其实就算在基础上加了个要素横轴](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110632365.webp)

如何表示 $T$ 时刻和 $T+1$ 时刻呢？经济分析中通常使用泰勒展开近似。

以 **_solow_** 模型为例，$\dot{k}=sf(k)-(n+g+\delta)k$，所以动态分析上， $\dot{k}$  为 $k$ 的函数，我们写作 $\dot{k}（k）$ 。

稳态点时，$k=k^*$，$\dot{k}=0$

在 $k=k^*$ 时，对 $\dot{k}（k）$ 作一阶**泰勒展开近似**

$$
\dot{k}\simeq\[\frac{\partial\dot{k}(k)}{\partial k}|\_{k=k^{\*}}\](k-k^{\*})=-\lambda[k(t)-k^{\*}]
$$

$$
\begin{aligned} 
&\lambda\equiv-\frac{\partial\dot{k}(k)}{\partial k}\Bigg|\_{k=k^{\*}}\newline
& =-\left\[sf^{\prime}(k^{\*})-(n+g+\delta)\right\]  \newline 
&=(n+g+\delta)-sf^{\prime}(k^{\*}) \newline 
&=(n+g+\delta)-\frac{(n+g+\delta)k^{\*}f^{\prime}(k^{\*})}{f(k^{\*})} \newline 
&=\[1-\alpha_{k}(k^{\*})\](n+g+\delta)\newline 
\end{aligned}
$$

$\lambda\$就是我们要找的收敛速度

## 四、计量统计[^7]

### 1、计量方程

**（1）绝对趋同**

Barro 和 Martin（1991）[^8]在 Baumol（1986）[^9]的基础上提出了绝对 $\beta$ 趋同的检验方程。

$$
\small \frac1T\left[\log(y_{i,t+T})-\log(y_{i,t})\right]=\alpha-\frac{(1-\mathrm{e}^{-\beta T})}T\log(y_{i,t})+\varepsilon_i
$$
其中 $i$ 表示 $i$ 个地区， t 表示期初，$ t+T $表示期末，$ T $表示观测时期长度，$ y_i $，$ t $表示地区$ i$在 $t$ 期的人均 GDP，$\beta$ 表示趋同速度。如果 $\beta>0$ ，则说明不同地区经济发展的差异会逐渐消除，最终达到同样的稳态。

![最小二乘法回归统计图，数据是欧盟地区（图源：Barro和Martin（1991））](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110658031.webp)

上面的公式是根据新古典经济增长模型推导而来（也就是 solow model）。

个人觉得国内关于收敛回归方差的描述清晰简洁不少。这里参考彭国华（2005）[^10]的回归式子：
$$
g=c+\beta{\ln y_0}+\varepsilon
$$
$g$ 就是增长率， $c$ 是常数项，$y_0$ 是真实产出，$\varepsilon$ 是误差项。当 $\beta<0$，也就说明了增长率 $g$ 和经济水平 $y_0$ 负相关。符合我们“高水平经济体增速较慢，低水平经济体增速较高”的假设。

**(2) 条件趋同**

Barro 和 Martin (1992)[^11]在绝对 $\beta$ 趋同检验方程的基础上又提出了条件 $\beta$ 趋同的检验方程:

$$
\small \frac{1}{T}\left[\log(y_{i,t+T})-\log(y_{i,t})\right]=\alpha-\frac{(1-\mathrm{e}^{-\beta T})}{T}\log(y_{i,t})+\lambda X_{i,t}+\varepsilon_{i,t}
$$
结论和参数含义和绝对趋同一样，因为条件趋同的含义是经济增长与经济体环境结构相关，所以多了 $X_{i,t}$ 作为控制变量。

> 引入控制变量 $X_{i,t}$ 麻烦的点在于又得去研究外生性了，，，，，，

**(3) 俱乐部趋同**

具有相同的经济特征、具有类似增长路径的集团内部存在趋同，在不同的经济集团之间则不存在趋同，这种现象称为俱乐部趋同（Durlauf，1995; Galor，1996）。
$$
 \frac1T\left[\log(y_{i,t+T})-\log(y_{i,t})\right]=\alpha+\beta\mathrm{log}(y_{i,t})+\lambda D+\varepsilon_{i,t}
$$
变量含义与上面相同，不同的是当 $\beta<0$ 才说明趋同， $D_{i,t}$ 是虚拟变量，也就是分组，例如整个东亚可能是同样的发展路径，或者某几个城市都是作为港口城市进行发展。

> 发现的比较有趣的研究是以什么标准聚类分类俱乐部，比如以“中等收入陷阱”为聚类分类标准建模[^12]。  
> Du (2017) （这位居然是山东大学的）引入了 Stata 包来执行 [Phillips 和 Sul (2007)](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-0262.2007.00811.x) 的计量经济学收敛分析和俱乐部聚类算法。  
> 分组依据思想大概如下  
> $$
> \lim_{ x\rightarrow +\infty}{\frac{X_j}{X_i}}\rightarrow1
> $$
> 想详细看数学推导[^13][^14]的可以点击他们的名字的超链接看。

关于俱乐部聚类的 stata 操作，youtube、[GitHub](https://github.com/quarcs-lab/mendez2020-convergence-clubs-code-data) 有很好的教程。

{{< youtube FO8Ngl57HRQ>}}

我把他的 do 文件进行了**部分翻译和细节补充**：

> 注意使用 cd 调整 stata 的工作读取环境（已写进 do 文件的注释）

[百度网盘do文件](https://pan.baidu.com/link/zhihu/7BhHzOuchfi0TsR2dGV5htYUVVeoN1YQUXRW==)

[dta文件](https://pan.baidu.com/link/zhihu/7BhHzOuchfi0TsR2dGV5htYUVVeoN1YQUXRW==)

```SAS
*****************本do文件和附带数据源来源于以下：
*  https://github.com/quarcs-lab/mendez2020-convergence-clubs-code-data
*  本文件主要是进行了局部翻译和增加了细节操作的翻译和提示

*-------------------------------------------------------
***************** 加载绘图的安装包*********************
*-------------------------------------------------------
* Install the convergence clubs package
findit st0503_1
net install st0503_1, from(http://www.stata-journal.com/software/sj19-1)
* Install package dependencies
ssc install moremata

* 提醒：运行这些包需要stata12及其以上，结果导出到excel需要14.2以上
*-------------------------------------------------------

*-------------------------------------------------------
clear all
macro drop _all
set more off
capture log close
*-------------------------------------------------------
***************** 定义全局宏方便引用*********
*-------------------------------------------------------
* (1) Indicate name of the dataset (Example: hiYes_log_lp.dta)
global dataSet hiYes_log_lp
* (2) Indicate name of the variable to be studied (Example: log_lp)
global xVar log_lp
* (3) Write label of the variable (Example: Labor Productivity)
global xVarLabel Labor Productivity
* (4) Indicate cross-sectional unit ID (Example: country)
global csUnitName country
* (5) Indicate temporal unit ID (Example: year)
global timeUnit year
*-------------------------------------------------------

//方便宏调用的逻辑是命名文件在stata工作目录中
//使用cd即可查看和转移当前工作目录

cd F:\桌面\俱乐部收敛

*-------------------------------------------------------
***************** 加载并设置数据集  ***********
*-------------------------------------------------------
** Load data
use "${dataSet}.dta"

* Keep necessary variables
keep id ${csUnitName} ${timeUnit} ${xVar}

* Set panel data
xtset id ${timeUnit}
*-------------------------------------------------------


*-------------------------------------------------------
****运行 log-t 收敛测试、聚类和合并算法，并在表中列出最终结果*****
*-------------------------------------------------------
* 如果我们使用日志文件，所有代码和结果都会记录在dataSet_clubs.txt文件中。另外，通过使用putexcel我们可以将结果以表格形式导出到excel。

* (1) Run log-t regression

putexcel set "${dataSet}_test.xlsx", sheet(logtTest) replace
//设置excel作为输文件,会默认输出到当前你设置的工作日志中(cd)

logtreg ${xVar},  kq(0.333)	
//kq()是要被舍弃的数据权重，默认是0.3
//这个命令的数学推导可见：

* https://www.stata-journal.com/article.html?article=st0503
* https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-0262.2007.00811.x
//加上后面的命令，数学意义就是每个聚类里，趋于极限时，各个聚类内部变量相除为1，则他们相对收敛

ereturn list
matrix result0 = e(res)
putexcel A1 = matrix(result0), names nformat("#.##") overwritefmt
//命令导入矩阵

* (2) Run clustering algorithm
* 进行聚类，判断有几个俱乐部
putexcel set "${dataSet}_test.xlsx", sheet(initialClusters) modify
    psecta ${xVar}, name(${csUnitName}) kq(0.333) gen(club_${xVar})
matrix b=e(bm)
matrix t=e(tm)
matrix result1=(b \ t)
matlist result1, border(rows) rowtitle("log(t)") format(%9.3f) left(4)
putexcel A1 = matrix(result1), names nformat("#.##") overwritefmt

* (3) Run merge algorithm
* 俱乐部进行合并，判断综合俱乐部，再次组合聚类
putexcel set "${dataSet}_test.xlsx", sheet(mergingClusters) modify
    scheckmerge ${xVar},  kq(0.333) club(club_${xVar})
matrix b=e(bm)
matrix t=e(tm)
matrix result2=(b \ t)
matlist result2, border(rows) rowtitle("log(t)") format(%9.3f) left(4)
putexcel A1 = matrix(result2), names nformat("#.##") overwritefmt

* (4) List final clusters
putexcel set "${dataSet}_test.xlsx", sheet(finalClusters) modify
    imergeclub ${xVar}, name(${csUnitName}) kq(0.333) club(club_${xVar}) gen(finalclub_${xVar})
matrix b=e(bm)
matrix t=e(tm)
matrix result3=(b \ t)
matlist result3, border(rows) rowtitle("log(t)") format(%9.3f) left(4)
putexcel A1 = matrix(result3), names nformat("#.##") overwritefmt

* 综上，各个地区经过了两次聚类分组

*-------------------------------------------------------
*-------------------------------------------------------
*****************生成相对变量**********
*-------------------------------------------------------
* 生成相对变量(用于绘图)
* 分组，取每组的平均，便于后面画每个俱乐部的图
save "temporary1.dta",replace
use  "temporary1.dta"

collapse ${xVar}, by(${timeUnit})
gen  id=999999
append using "temporary1.dta"
sort id ${timeUnit}

gen ${xVar}_av = ${xVar} if id==999999
bysort ${timeUnit} (${xVar}_av): replace ${xVar}_av = ${xVar}_av[1]
gen re_${xVar} = 1*(${xVar}/${xVar}_av)
label var re_${xVar}  "Relative ${xVar}  (Average=1)"
drop ${xVar}_av
sort id ${timeUnit}

drop if id == 999999
rm "temporary1.dta"

* order variables
order ${csUnitName}, before(${timeUnit})
order id, before(${csUnitName})

* Export data to csv
export delimited using "${dataSet}_clubs.csv", replace
save "${dataSet}_clubs.dta", replace
*-------------------------------------------------------

*-------------------------------------------------------
***************** 绘图  *********************
*-------------------------------------------------------
** All lines

xtline re_${xVar}, overlay legend(off) scale(1.6)  ytitle("${xVarLabel}", size(small)) yscale(lstyle(none)) ylabel(, noticks labcolor(gs10)) xscale(lstyle(none)) xlabel(, noticks labcolor(gs10))  xtitle("") name(allLines, replace)

graph save   "${dataSet}_allLines.gph", replace
graph export "${dataSet}_allLines.pdf", replace

** Indentified Clubs

summarize finalclub_${xVar}
return list
scalar nunberOfClubs = r(max)

forval i=1/`=nunberOfClubs' {
    xtline re_${xVar} if finalclub_${xVar} == `i', overlay title("Club `i'", size(small)) legend(off) scale(1.5) yscale(lstyle(none))  ytitle("${xVarLabel}", size(small)) ylabel(, noticks labcolor(gs10)) xtitle("") xscale(lstyle(none)) xlabel(, noticks labcolor(gs10))  name(club`i', replace)
    local graphs `graphs' club`i'
}
graph combine `graphs', ycommon
graph save   "${dataSet}_clubsLines.gph", replace
graph export "${dataSet}_clubsLines.pdf", replace

** Within-club averages

collapse (mean) re_${xVar}, by(finalclub_${xVar} ${timeUnit})
xtset finalclub_${xVar} ${timeUnit}
rename finalclub_${xVar} Club
xtline re_${xVar}, overlay scale(1.6) ytitle("${xVarLabel}", size(small)) yscale(lstyle(none)) ylabel(, noticks labcolor(gs10)) xscale(lstyle(none)) xlabel(, noticks labcolor(gs10))  xtitle("") name(clubsAverages, replace)

graph save   "${dataSet}_clubsAverages.gph", replace
graph export "${dataSet}_clubsAverages.pdf", replace

clear
use "${dataSet}_clubs.dta"

*-------------------------------------------------------

*-------------------------------------------------------
***************** Export list of clubs  ****************
*-------------------------------------------------------
* 下面的代码将国家列表及其俱乐部成员资格导出到文件中.csv。该列表可以在出版物的附录部分用作方便的参考。

summarize ${timeUnit}
scalar finalYear = r(max)
keep if ${timeUnit} == `=finalYear'

keep id ${csUnitName} finalclub_${xVar}
sort finalclub_${xVar} ${csUnitName}
export delimited using "${dataSet}_clubsList.csv", replace
*-------------------------------------------------------
```

### **2、实证结果（例子）**

中国目前的实证结果基本就是满足 $\sigma$ 收敛[^15]和俱乐部收敛（分类一般是中东西部这种区域分类）[^16]。GDP、全要素、工业产出作为标准基本是一样的结论[^17]。


![](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110723022.webp)

![img](/img/收敛：从“算式的极限”到“增长的极限”.zh-cn-20240523110745653.webp)

[^1]: 个人觉得同济版教材的微积分部分还是很不错的，但是绝对别用其线代部分。定义方面，同济版定义的方向导数和有些数学分析教材并不相同。
[^2]: 个人觉得国内最好的统计学教材，尤其是在概率论部分，引人入胜。数理统计那部分相对学起来无趣一些
[^3]: 其他还有几何法、主观法、代数法
[^4]: 真要各自解释这几个大数定理，我自己反正是记不清
[^5]: 具体是啥条件我已经忘记，机器学习应用时，感觉满足挺难的
[^6]: 所以我说，经管版概率论教材就是不行，如果不看统计学教材，就错过了这么连贯的知识点理解。所以这些分布本身就是一步一步发展过来的。如果不知道这种发展，还以为是隔空投送呢
[^7]: 这部分主要参考了《区域与城市经济学》（踪家峰著）
[^8]: Barro R J, Sala-i-Martin X, Blanchard O J, et al. Convergence across states and regions[J]. Brookings papers on economic activity, 1991: 107-182.
[^9]: Baumol, W. J. (1986). Productivity Growth, Convergence, and Welfare: What the Long-Run Data Show. The American Economic Review, 76 (5), 1072–1085. http://www.jstor.org/stable/1816469
[^10]: 彭国华. 中国地区收入差距、全要素生产率及其收敛分析[J]. 经济研究, 2005 (9): 11. DOI:CNKI:SUN: JJYJ. 0.2005-09-003.
[^11]: Barro R J, Mankiw N G, Sala-i-Martin X. Capital mobility in neoclassical models of growth[R]. National Bureau of Economic Research, 1992.
[^12]: 徐永慧, 李月, 邓宏图. 俱乐部收敛与中等收入陷阱[J]. 现代财经 (天津财经大学学报), 2022,42 (11): 48-62. DOI: 10.19559/j.cnki. 12-1387.2022.11.004.
[^13]: Du, K. (2017). Econometric convergence test and club clustering using Stata. The Stata Journal, 17 (4), 882-900.
[^14]: Phillips, P. C., & Sul, D. (2007). Transition modeling and econometric convergence tests. Econometrica, 75 (6), 1771-1855.
[^15]: 林毅夫, 刘明兴. 中国的经济增长收敛与收入分配[J]. 世界经济,2003 (08): 3-14+80.
[^16]: 沈坤荣, 马俊. 中国经济增长的“俱乐部收敛”特征及其成因研究[J]. 经济研究,2002 (01): 33-39+94-95.
[^17]: 汤学兵, 陈秀山. 我国八大区域的经济收敛性及其影响因素分析[J]. 中国人民大学学报,2007 (01): 106-113.
