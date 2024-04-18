# 原神概率论：材料合成天赋选10%双倍还是25%返还？


{{< music netease song 1910966474>}}

网上计算数学期望的已经有很多，但是似乎没人计算方差，这里把方差计算补上。

## 一、设定介绍

在原神中，**三个低级材料能够合成一个高级材料**。我们表示为$a \xrightarrow{\text{转化}}\dfrac{b}{3}$

为保持单位一致，我们统一**使用b表示投入与产出**，假设两边同时有初始材料 a，也就等价于 $\dfrac{b}{3}$。

此时有两种天赋，**如下图**

![两种天赋](/img/v2-3f86d201b293d175cffb96a41b722293_720w.png)

-   一种是有10%的概率双倍产出。

> 每使用a个材料，也就是$\dfrac{b}{3}$材料时，10%概率直接产出 $\dfrac{2}{3}b$ 材料。

-   一种是有25%的概率返还部分低级材料。

> 每使用 a个材料，也就是$\dfrac{b}{3}$材料时，25%概率返回$\dfrac{1}{3} \times \dfrac{1}{3}b$材料。

## **二、计算期望与方差**

> **网上计算数学期望的已经有很多，但是似乎没有人计算方差，这里顺便把方差的计算补上。**

### **（一）10%双倍产出的期望与方差**

**1、期望**

此时就是**二项分布离散分布列** 。10% 概率双倍产出，90% 概率普通产出。

如下表1：

![二项分布离散分布列](/img/v2-10385f6dab2afad3230b67ee1fcecea0_720w.png)

$$
E_{\text{双倍}}(\dfrac{b}{3})=0.1\times \dfrac{2b}{3} + 0.9 \times \dfrac{b}{3} = \dfrac{11b}{30}
$$
所以投入a 材料，等价于投入 $\dfrac{b}{3}$材料，10%双倍天赋的数学期望 $E_{\text{双倍}}(\dfrac{b}{3})=\dfrac{11b}{30} $ 。

**2、方差**
$$
 Var_{\text{双倍}}(\dfrac{b}{3})=E(X^2)-(E(X))^2 =(\dfrac{2b}{3})^2\times 0.1+ (\dfrac{b}{3})^2\times 0.9 -(\dfrac{11b}{30})^2=\dfrac{1}{100}b^2 
$$
所以投入a材料，等价于投入 $\dfrac{b}{3}$材料，10%双倍天赋的方差 $ Var_{\text{双倍}}(\dfrac{b}{3})=\dfrac{1}{100}b^2 $。

### （二）25%返回材料的期望与方差

**1、期望的两种算法**

**方法一：等比数列**

$$
\begin{align*}	
 E_{\text{返回}}\left(\frac{b}{3}\right)  
 &= \frac{b}{3} + \frac{b}{3} \times 25\\% \times \frac{1}{3} + \ldots + \frac{b}{3} \times \left(\frac{1}{12}\right)^n \newline	 
 &= \frac{b}{3} \times (1+{\frac{1}{12}}+{\frac{1}{12}}^2+...+{\frac{1}{12}}^n)  \newline	 	 
 &= \frac{b}{3} \times \frac{1 \times (1-{\frac{1}{12}}^n)}{1-\frac{1}{12}}  \newline	 
 \end{align*}
$$

$$
\lim_{n\rightarrow + \infty}E_{\text{返回}}\left(\frac{b}{3}\right)=\frac{b}{3} \times \frac{1 \times (1-{\frac{1}{12}}^n)}{1-\frac{1}{12}}=\frac{4b}{11}
$$

**方法二：递归**

**由于返还后的材料继续炼丹，会形成一个递归，因此我们得到：**
$$
E_{\text{返回}}\left(\frac{b}{3}\right)=\frac{b}{3} +E_{\text{返回}}\left(\frac{b}{3}\right)\times 25\% \times \frac{1}{3}
$$
 答案与上面相同：

所以投入 a 材料，等价于投入 $\dfrac{b}{3}$材料，25%返回天赋的数学期望$E_{\text{返回}}(\frac{b}{3} )=\frac{4b}{11}$。

**2、方差**

**错误方法：**

如果这样处理:

$$
\lim_{n\rightarrow + \infty}E_{\text{返回}}(\dfrac{1}{9}b^2)=({\frac{1}{3}}b)^2 \times \frac{1 \times (1-{\frac{1}{12}}^n)}{1-\frac{1}{12}}=\frac{4b}{11}\times \frac{b}{3} =\frac{4}{33}b^2
$$
会得到一个错误的负数(方差$Var(x)=E(x-E(x))^2$不可能为负）：
$$
Var_{\text{返回}}({\frac{b}{3}})=E(X^2)-(E(X))^2=\frac{4}{33}b^2-(\frac{4b}{11})^2=-\frac{4}{363}b^2
$$
这种做法的前提是：
$$
\lim_{n\rightarrow + \infty}E_{\text{返回}}(\dfrac{1}{9}b^2)=\lim_{n\rightarrow + \infty}E_{\text{返回}}(\dfrac{1}{3}b)\times \dfrac{1}{3}b
$$
**但实际上 b是未知数，不是常数，所以不能这样粗暴地乘进括号内。**

**正确方法：**

正确做法如图4,通过树状图分析。

![树状图](/img/v2-6af53d428375deb84d328e0d150965a4_720w.png)

由于所有可能性不断分裂成“**剩下的25%还有机会继续维持好运继续触发天赋吗？**”不断分裂，最后会趋近于0，所以我们只用加总红色部分即可。

我们可以验证下这种分类是否讨论完了所有情况，将所有概率加总：

$$
\lim_{n\rightarrow +\infty}75\\%+...+{(25\\%)}^{n-1}75\\%=1
$$
所有对应概率加总为1，一定程度上验证了这种分类的正确性。

此时数学期望如下：

$$
E_{\text{返回}}(\frac{1}{9}b^2) =\sum_{i=1}^{i=n}{(25\\%)}^{i-1}75 \\%\times \{\frac{b}{3}[1+...(\frac{1}{3})^{i-1}]\}^2
$$
等比数列求和，取极限（这部分计算比较麻烦......）

$$
\begin{align}
&=\lim_{n\rightarrow +\infty}E_{\text{返回}}\left(\frac{b^2}{9}\right) \newline
&= \sum_{i=1}^{n-1}\frac{3}{4^{i}} \times \frac{1}{9}b^2\left(\frac{1-\left(\frac{1}{3}\right)^i}{1-\frac{1}{3}}\right)^2\newline 	 
&= \frac{3}{16}b^2\sum_{i=1}^{n-1}\frac{1}{4^{i-1}}\left[1-\left(\frac{1}{3}\right)^i\right]^2\newline 	
& = \frac{3}{16}b^2\sum_{i=1}^{n-1}\frac{1}{4^{i-1}}(1-\frac{2}{3^i}+\frac{1}{9^i})\newline 	 
&=\frac{3}{16}b^2(\dfrac{4}{3}-\dfrac{8}{11}+\dfrac{4}{35})\newline 	&=\dfrac{52}{385}b^2 
\end{align}
$$
对应方差如下：

$$
Var_{\text{返回}}({\frac{b}{3}})=E(X^2)-(E(X))^2=\dfrac{52}{385}b^2-(\frac{4b}{11})^2=\dfrac{236}{2541}b^2
$$
 所以投入a材料，等价于投入$\dfrac{b}{3}$材料，10%双倍天赋的方差 返回$ Var_{\text{返回}}(\dfrac{b}{3})=\dfrac{236}{2541}b^2$。

## 三、初步结论



![初步结论](/img/v2-eb0d595a54b314ff57d3dcbcdc43959d_720w.png)

更多讨论详见：[原神概率论](https://zhuanlan.zhihu.com/p/648950822?)
