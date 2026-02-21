# 变分法学习笔记


只因变分法的优美在此记录学习笔记，参考书为《动态最优化基础》（蒋中一），对经济学学习者是非常友好的动态优化入门教材。

本笔记是快速学习后的个人理解，若有不严谨之处，还请多多包涵。

## 泛函

先来谈谈函数学习，

- 小学时开始接触未知数 $x$，
- 中学时开始了解具体函数 $f(x)=ax+bx^2+c$，
- 高中时开始了解抽象函数 $f(x)=f(-x)、f^\prime(x)=f(x)$
- 大学开始了解隐函数 $y\prime=y+y\prime \prime$，解出的是一类函数。

随着函数学习从具体走向抽象，我们开始掌握**根据函数性质推断函数形式**的能力。

> 泛函中的**非线性泛函**，就是函数之函数，告诉特定函数特征，我们就能框定函数形式范围，最后根据约束选出最优的函数。
>
> 例如厂商选择最优的生产过程、建筑师选择最好的建筑弧线......
>
> 以前，给定具体函数类型，我们寻找极值点；
>
> 现在，给定函数特征，我们寻找最好的具体函数。

一般而言，一个函数的特征约束可以用 $f(t,y(t),y\prime(t))$, 可以理解为 $f(时间，状态，方向)$。

如下图，满足函数特征的从 a 到 b 的函数有三条，那条是最优的呢？于是引入了微积分算函数路径的极值。

![满足约束的函数](/img/变分法速通.zh-cn-20240523094828444.webp)
$$
V(t)=\int_0^T{f(t,y,y^\prime)dt}
$$
随着函数形式 $y$ 发生变化，$V(t)$ 也会产生变化，这就是泛函的分析起点，我们想要的是通过寻找 $V(t)$ 的极值和其他约束，进而从一堆函数形式 $y$ 中找到最优路径 $y^\*$

## 变分法

在接触导数时，求极限使用了逼近的形式：
$$
\lim_{\Delta x \rightarrow 0}{\frac{f(x+\Delta x )-f(x)}{\Delta x}}
$$
这里也采用类似的引入，假设最优函数为 $y^\*$, 在其附近的一类函数使用 $y^\*+\varepsilon P(t)$ 表示。

> 注意 $P(0)=P(T)=0$

![函数表示](/img/变分法速通.zh-cn-20240523094806341.webp)

于是得到如下关于 $\varepsilon$ 的式子
$$
V(\varepsilon)=\int\_{0}^{T}F[t,\underbrace{y^{\*}\left(t\right)+\varepsilon p\left(t\right)}\_{y(t)},\underbrace{y^{\*}\left(t\right)+\varepsilon p^{\prime}\left(t\right)}\_{y^{'}\left(t\right)}]dt
$$
极值点一阶条件为 $\frac{dV}{d\varepsilon}=0$

{{< admonition tip "微积分求导公式" false >}}
$$
\frac{\mathrm{d}}{\mathrm{d}t}\int_{g(t)}^{h(t)}F(x,t)\mathrm{d}x=F(h,t)\frac{\mathrm{d}h}{\mathrm{d}t}-F(g,t)\frac{\mathrm{d}g}{\mathrm{d}t}+\int_{g(t)}^{h(t)}\frac{\partial F}{\partial t}\mathrm{d}x
$$
{{< /admonition >}}
$$
\begin{aligned}
\frac{dV}{d\varepsilon}& =\int_{0}^{T}\frac{\partial F}{\partial\varepsilon}dt=\int_{0}^{T}\Big(\frac{\partial F}{\partial y}\frac{dy}{d\varepsilon}+\frac{\partial F}{\partial y^{\prime}}\frac{dy^{\prime}}{d\varepsilon}\Big)dt  \\\\
&=\int_{0}^{T}\Bigl[F_{y}p\left(t\right)+F_{y}p^{\prime}\left(t\right)\Bigr]dt \\\\
&=\int_0^TF_yp\left(t\right)dt+\color{red}{\int_0^TF_{y^{\prime}}p^{\prime}(t)dt}=0
\end{aligned}
$$
{{< admonition tip "局部转化" false >}}
$$
\frac{dy}{d\varepsilon}=\frac{d y^{\*}\left(t\right)+\varepsilon p}{d\varepsilon}=P(t)
$$
同理 $\frac{dy^\prime}{d\varepsilon}=P^\prime(t)$

{{< /admonition >}}

接下来对 $\color{red}{红色部分}$ 变形，使用分部积分 $\int_{t=a}^{t=b}vdu=vu\mid_{t=a}^{t=b}-\int_{t=a}^{t=b}udv\quad(u=u(t),v=v(t))$
$$
\begin{align}
& \color{red}{\int\_0^TF\_{y^{\prime}}p^{\prime}(t)dt} \\\\
&=\begin{bmatrix}F_{y^{\prime}}p(t)\end{bmatrix}\_0^T-\int_0^Tp(t)\frac d{dt}F_{y^{\prime}}dt\\\\
&=-\int_{0}^{T}p(t)\frac{d}{dt}F_{y^{\prime}}dt \\\\
&(因为P(0)=P(T)=0,详见P(t)干扰函数的设置图像)
\end{align}
$$
将 $\color{red}{红色部分}$ 代入后可得：
$$
\int_0^Tp(t)[F_y-\frac d{dt}F_{y^{\prime}}]dt=0
$$
考虑到扰动函数 $P(t)$ 可以是任意函数，因此如果要满足上式为 0，只能是 $F_y-\frac d{dt}F_{y^{\prime}}$ 为0。

于是我们得到了**欧拉方程**——
$$
F_y-\frac d{dt}F_{y^{\prime}}=0,t\in[0,T]
$$
当方程约束只包含三个变量，也就是 $F(t,y,y^\prime)$ 时，可以具体展开得到，
$$
\begin{aligned}
\frac{dF_{y^{\prime}}}{dt}=&\frac{\partial F_{y^{\prime}}}{\partial t}+\frac{\partial F_{y^{\prime}}}{\partial y}\frac{dy}{dt}+\frac{\partial F_{y^{\prime}}}{\partial y^{\prime}}\frac{dy^{\prime}}{dt}\\\\
=&F_{ty^{\prime}}+F_{yy^{\prime}}y^{\prime}(t)+F_{y^{\prime}y^{\prime}}y^{\prime\prime}(t)
\end{aligned}
$$
展开得到 $F_{y^{\prime}y^{\prime}}y^{\prime\prime}(t)+F_{yy^{\prime}}y^{\prime}(t)+F_{ty^{\prime}}-F_{y}=0,t\in[0,T]$

{{< admonition tip "一道题" false >}}
给定泛函 $V(y)=\int_0^2(12ty+y^{\prime2})dt$

欧拉方程通解为 $y^\*(t)=t^3+c_1t+c_2$

{{< /admonition >}}

{{< admonition tip "欧拉方程的推广" false >}}

这里只说有哪些推广，不进一步展开。

当 $F$ 泛函只含有部分变量，例如 $F(t,y\prime)、F(y,y\prime)、F(t,y)$ 时，各有快捷处理方式。

欧拉方程的核心是 $F_y-\frac d{dt}F_{y^{\prime}}=0,t\in[0,T]$

当 $F$ 泛函含多元变量，高次变量时，核心也是从这个起点进一步展开。

{{< /admonition >}}

## 悬链问题

想象两个柱子间挂一根红线用于晾衣服。

建立坐标轴，将这根线绕着 x 轴绕一圈，这条线以怎样的曲度才能使绕一圈后的立体图形表面积最小呢？

![默默无闻的晾衣线也有大道理](/img/变分法速通.zh-cn-20240523094744425.webp)

考虑微元的勾股定理
$$
(ds)^2=(dx)^2+(dy)^2
$$
可以得到线段的微分
$$
\frac{ds}{dt}=\sqrt{1+\left(\frac{dy}{dt}\right)^2}=(1+y^{\prime2})^{1/2}
$$
按照线段进行微分，将每个微分的圆周长（$2\pi r$）积分就是旋转后的表面积。

于是得到如下泛函：
$$
V(t)=\int_0^T 2\pi y ds=2\pi\int_0^Ty(1+y^{\prime2})^{1/2}dt
$$
将式子简化成以下式子：
$$
V(t)=\int_0^Ty(1+y^{\prime2})^{1/2}dt
$$
使用欧拉方程可以得到
$$
y(1+y^{\prime2})^{1/2}-yy^{\prime2}(1+y^{\prime2})^{-1/2}=c
$$
简单化简（尝试分母有理化、平方等手段消灭分母的平方根），就可以得到化简后的式子
$$
y^{\prime}\left(\equiv\frac{dy}{dt}\right)=\frac{1}{c}\sqrt{y^{2}-c^{2}}\\\\
$$
也就是
$$
\frac{cdy}{\sqrt{y^{2}-c^{2}}}=dt
$$
积分可得
$$
\int\frac{cdy}{\sqrt{y^2-c^2}}=c\ln\biggl(\frac{y+\sqrt{y^2-c^2}}c\biggr)+c_1=\int dt=t+c_2
$$
整理下上面式子的形式，并把$ c_1 、c_2 $两个任意常数整合为$ k $，即可得到通解
$$
y^{*}\left(t\right)=\frac{c}{2}\left[e^{\left(t+k\right)/c}+e^{-\left(t+k\right)/c}\right]
$$
而 [悬链曲线](https://zh.wikipedia.org/wiki/%E6%82%AC%E9%93%BE%E7%BA%BF) 就是以下形式
$$
y=\frac{1}{2}(e^{t}+e^{-t})
$$

![悬链曲线，图片来自维基百科](/img/变分法速通.zh-cn-20240523094705813.webp)


> 一个均匀质地的线带（例如晾衣绳）均匀受到引力作用下垂，弧度也能如此推出来。
>
> 悬索桥、双曲拱桥、架空电缆都用到悬链线的原理。
>
> 建筑设计中一般使用的是以下形式：
> $$
> y=c+a\cosh\frac{x}{a}
> $$
> 自然社会，总是最优化控制！

## 最速降线问题

试想一下，弹珠比赛中有三种滑滑梯，一个参赛选手只有一次选择机会，那么选哪种滑滑梯赛道，小球能最快到达终点呢？

![没错，滑滑梯也藏着大道理](/img/变分法速通.zh-cn-20240804223058150.webp)

![来源，北京科技馆。想象古代建筑，哪种建筑弧线更容易排水，逻辑也是一样的](/img/变分法速通.zh-cn-20240523094621296.webp)

通过能量守恒关系可以得到
$$
\begin{align}
\frac{1}{2}mv^2&=mgy\\\\
v&=\sqrt{2gy}
\end{align}
$$
在悬链问题中，已经介绍过线的微元为 $ds=(1+y^{\prime2})^{1/2}dt$

所以考虑速度就是路程对时间求导
$$
v=\frac{ds}{dt}=\sqrt{1+y^{\prime2}}\frac{dx}{dt}
$$
联立以上方程
$$
\begin{cases}
v=\sqrt{2gy}\\\\
v=\sqrt{1+y^{\prime2}}\frac{dx}{\mathrm{d}t}
\end{cases}
$$
得到
$$
dt=\frac{\sqrt{1+y^{\prime2}}}{\sqrt{2gy}}dx
$$
而目标泛函所求的是总体用时最短
$$
T=\int dt=\int\frac{\sqrt{1+y^{\prime2}}}{\sqrt{2gy}}dx
$$
根据欧拉方程可以得到
$$
2y^{\prime \prime}y+y^{\prime 2}+1=0
$$
完整解法推荐[参考浅谈变分法](https://zhuanlan.zhihu.com/p/139018146)，而且里面还提到了关于这个问题其他数学家的解法。

总之其中一种解的展示方法为 ($a、c$ 为任意实数)：
$$
\begin{cases}
x=a(\theta-\sin\theta)+c\\\\
y=a(1-\cos\theta)
\end{cases}
$$

> 这个形式和摆线相关
>
> ![来源维基百科](/img/Cycloid_f.gif)
## 垄断经济学问题

考虑垄断企业，利润函数写为 $F(P,P^\prime)$

> 经济含义是垄断企业拥有自主定价权

泛函则为
$$
V=\int F(P,P^\prime)dt
$$
代入欧拉方程可以得到
$$
F_{p^{\prime}p^{\prime}}p^{\prime \prime}+F_{pp^{\prime}}p^{\prime }-F_{p}=0
$$
解这种隐函数就得玩骚操作，两边同时乘以 $p^{\prime}$，然后整体变形
$$
\begin{aligned}
& \frac{d}{dt}(P^{\prime}F_{P^{\prime}}-F) \\\\
& = \frac{d}{dt}(P^{\prime}F_{P^{\prime}}) - \frac{d}{dt}F(P,P^{\prime}) \\\\
& = F_{P^{\prime}}P^{\prime\prime} + P^{\prime}\left(F_{PP^{\prime}}P^{\prime} + F_{P^{\prime}P^{\prime}}P^{\prime\prime}\right) - \left(F_{P}P^{\prime} + F_{P^{\prime}}P^{\prime\prime}\right) \\\\
& = P^{\prime}\color{red}{\left(F_{P^{\prime}P^{\prime}}P^{\prime\prime} + F_{PP^{\prime}}P^{\prime} - F_{P}\right)}
\end{aligned}
$$
红色部分就是原式子

此时得到
$$
F-P^{\prime}F_{P^{\prime}}=c
$$
$c$ 是常数，将 $F$ 写为常用利润函数 $\pi$，也就是以下关系
$$
\pi-P^{\prime}\frac{\pi}{\partial P^{\prime}}=c
$$
考虑[静态垄断](https://etcnew.sdut.edu.cn/meol/analytics/resPdfShow.do;jsessionid=D8B075E94531C56DA0F681D5260DFCF9?resId=1084894&lid=52541)，垄断企业只做一次定价决策（更细分的静态博弈还要考虑产品差异，信息差异，博弈顺序，厂商进出状态）。

此时利润函数只和 $P$ 有关，和 $P^{\prime}$ 无关（毕竟都只有一次定价，压根就没产生过价格变化），显然 $P^{\prime}\frac{\pi}{\partial P^{\prime}}=0$, 此时 $\pi_s=c$。

再在静态博弈的基础上考虑动态博弈，在进行第一次定价后，垄断厂商们开始进行多次定价，此时利润函数如下，
$$
\pi-P^{\prime}\frac{\pi}{\partial P^{\prime}}=\pi_s
$$
此时利润函数 $\pi$ 必然同时和和 $P$ 和 $P^{\prime}$ 有关，于是考虑 $\pi$ 和 $P^{\prime}$ 弹性，记为：
$$
\frac{\partial\pi}{\partial P^{\prime}}\frac{p^{\prime}}{\pi}=\varepsilon_{\pi P^{\prime}}
$$
再代入动态垄断博弈的公式中，得到如下关系式：
$$
\varepsilon_{\pi P^{\prime}}=1-\frac{\pi_\varepsilon}\pi 
$$
也就是说，动态垄断中，厂商应根据这个关系式不断调整自己的利润函数。
