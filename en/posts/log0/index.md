# Econometrics: Is the Log (y+1) Transformation Reliable?


# Is the Log (y+1) Transformation Reliable?


## Abstract

| Title: Logs with Zeros? Some Problems and Solutions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authors:**  Jiafeng Chen; Jonathan Roth                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Journal:**  The Quarterly Journal of Economics  （2024/3/30）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **DOI:**  [10.1093/qje/qjad054](https://academic.oup.com/qje/article-abstract/139/2/891/7473710?redirectedFrom=fulltext)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Abstract Translation:**   When studying an outcome variable Y that can equal 0 (e.g., earnings), most researchers typically use a transformed average treatment effect (ATE) for estimation. This transformation can be represented as log (Y) when the outcome variable Y is large, and log (1 + Y) is usually used when Y equals 0. Our research finds that such logarithmic transformations of the average treatment effect should not be interpreted as percentage effects because the outcome itself is not a percentage, and the estimated average treatment effect depends on the units of the outcome variable. In fact, our study shows that if the actual units of Y are changed before performing a logarithmic transformation, treatment effects of any size can be obtained. This result arises because, for samples where the outcome changes from zero to non-zero during estimation, the percentage effect at the sample level is not well-defined, and the units of the outcome implicitly determine the weight given to the extensive margin in the logarithmic transformation of the average treatment effect. Further research reveals an "impossible triangle": when the outcome variable can equal zero, it is impossible to simultaneously satisfy the estimation result as the sample's average treatment effect, keep the units of Y unchanged (or independent of unit changes), and achieve point identification. We discuss several alternative methods that may be reasonable and feasible in settings with both intensive and extensive margins, including (1) expressing the average treatment effect in percentage terms (e.g., using Poisson regression), (2) explicitly calibrating samples on the intensive and extensive margins, and (3) separately estimating the actual treatment effects on the extensive and intensive margins (e.g., using Lee bounds). We illustrate these methods in three empirical applications. |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
## Summary

Discussion on whether **logarithmic transformation with zero values** is reliable, such as $log(1+y)$ and $arcsinh(y)=\sqrt{1+y^2}+y$.

## Code Example

The code results show that when the data contains zeros, the regression significance can be affected by modifying the units of the logarithmically transformed $y$.

```sql
sysuse nlsw88, clear

replace wage = 0 if _n<=400 // Change the wage of the first 400 observations to 0

gen lnwage1 = ln(1 + .128683 * wage)
gen lnwage2 = ln(1 + .7744329 * wage)
gen lnwage3 = ln(1 + 84.02252 * wage)
gen lnwage4 = ln(1 + 4.68e+08 * wage)
gen lnwage5 = ln(1 + 3.77e+25 * wage)

reg lnwage1 tenure grade
eststo m1
reg lnwage2 tenure grade
eststo m2
reg lnwage3 tenure grade
eststo m3
reg lnwage4 tenure grade
eststo m4
reg lnwage5 tenure grade
eststo m5

esttab m1 m2 m3 m4 m5, keep(tenure) b(3) se compress

/*-------------------------------------------------------------------------
                 (1)          (2)          (3)          (4)          (5)   
             lnwage1      lnwage2      lnwage3      lnwage4      lnwage5   
---------------------------------------------------------------------------
tenure         0.010***     0.020***     0.030**      0.050        0.100   
             (0.001)      (0.003)      (0.010)      (0.032)      (0.090)   
---------------------------------------------------------------------------
N               2229         2229         2229         2229         2229   
---------------------------------------------------------------------------*/
```

## Explanation

#### Understanding Logarithmic Transformation

It is generally believed that the economic significance of logarithmic transformation reflects **percentage changes**.

{{< admonition tip "Meaning of Coefficients After Logarithmic Transformation" false >}}
After taking the logarithm of a variable, it is generally believed that the coefficient reflects the percentage change. For example, lnGDP in a regression represents the percentage change in GDP. If it is `reg lny lnx`, the economic meaning of the coefficient is elasticity. See [The Meaning of Taking Logarithms](https://www.zhihu.com/question/27588499/answer/588450047).

For the following regression equation
$$
\ln y_n=\alpha+\beta x_n +\varepsilon
$$
the coefficient has the following economic meaning
$$
\begin{align}
\beta & = \frac{\ln Y\_{n+1}-\ln Y\_{n}}{X\_{n+1}-X\_{n}}\\\\
&=\frac{\ln \frac{Y\_{n+1}}{Y\_{n}}}{X\_{n+1}-X\_{n}}=  \frac{\ln (1+\frac{Y\_{n+1}-Y\_{n}}{Y\_{n}})}{\Delta X}\\\\
&= \frac{\ln (1+\Delta Y \\\% )}{\Delta X} \approx\frac{\Delta Y \\\% }{\Delta X} 
\end{align}
$$
Sometimes researchers perform logarithmic transformation because the data exhibits a long-tailed distribution, and logarithmic transformation makes the data more compact.

{{< /admonition >}}

#### Limitations of Logarithmic Transformation

The core conclusion of the paper is that **when the data contains zeros and the scaling units change** (e.g., in labor economics, hourly wages, monthly wages, and weekly wages are often used, which involves unit conversion), the estimation of logarithmic transformation will change, making it unreliable.

It is generally believed that the treatment effect obtained after logarithmic transformation is a percentage and is independent of the scaling parameter $\alpha$.
$$
\small
ATE=E[\log(1+aY(1))-\log(1+aY(0))]=E\left[\log\left(\frac{1+aY(1)}{1+aY(0)}\right)\right]
$$

Further considering the data structure, changes will occur
$$
\begin{aligned}
\lim_{a\to\infty}\log\left(\frac{1+aY(1)}{1+aY(0)}\right)=\begin{cases}\log\left(\frac{Y(1)}{Y(0)}\right)&\text{if }Y(1)>0,Y(0)>0\\\\
0&\text{if }Y(1)=0,Y(0)=0\\\\ 
\infty&\text{if }Y(1)>0,Y(0)=0\\\\
-\infty&\text{if }Y(1)=0,Y(0)>0
\end{cases}
\end{aligned}
$$
The latter three cases in the above equation show that the estimated treatment effect may be affected.

The paper's discussion on the bias of logarithmic transformation is similar to the **Local Average Treatment Effect (LATE)**.

![Taking Employment Policy as the Research Object](/img/Is the Logarithmic Transformation with Zero Values Reliable-20240523094100269.webp)

Taking employment policy as the object, **the policy shock brings different responses to the treatment group**.

> 0 represents the unemployed state, and 1 represents the employed state.

Originally, the treatment group had unemployed people 0 and employed people 1, but after the policy shock, all became employed people 1.

- Originally in state 1 (employed), after the shock, still in state 1 (employed), but income still increased. At this time, the change in the explanatory variable is directly brought by the policy shock, which is the **intensive margin**.
- Originally in state 0, after the shock, became 1. The change in the explanatory variable is not only due to the policy shock but also due to the change in their own state, which is the **extensive margin**.

Thus, the measurement of the treatment effect becomes the following situation:

{{< mermaid>}}
 graph LR
 A(Exogenous Policy Shock 01 Variable Z)--Treatment Group-->C{01 Object Response}
 C{Object Response D}--extensive margin-->D(State from 0 to 1)
 C{Object Response D}--intensive margin-->E(State from 1 to 1)
 D(State from 0 to 1)-->F{Explanatory Variable}
 E(State from 1 to 1)-->F{Explanatory Variable}
{{< /mermaid>}}

Therefore, the average treatment effect is also the sum of the mathematical expectations of the two marginal effects

$$
ATT=E(ATT^{int})+E(ATT^{ext})
$$

If $lg(1+x)$ is used for transformation and the units are scaled, from thousands to units

For the **intensive margin**,
$$
\begin{aligned}
ATT_{1000}^{int}& =E\{log(1000Y^{int}(1))-log(1000Y^{int}(0))\}  \\\\
&=E\{log(1000)+logY^{int}(1))-log(1000)-logY^{int}(0))\} \\\\
&=E\{log(Y^{int}(1))-log(Y^{int}(0))\}=ATT^{int}
\end{aligned}
$$
For the **extensive margin**,

> This part is the part where the state changes from 0 to 1. After using $ln(y+1)$ for logarithmic transformation, the part that was originally 0 is still 0.

$$
\begin{aligned}
ATT_{1000}^{ext} 
& =E\{log(1000Y^{ext}(1))-log(1000Y^{ext}(0))\}  \\\\
&=E\{log(1000)+logY^{ext}(1))-0\} \\\\
&=ATT^{ext}+\color{red}{log(1000)}
\end{aligned}
$$

The overall treatment effect is the sum of the mathematical expectations of the above two parts
$$
\begin{align}
ATT&=P \times ATT^{ext}+(1-P)\times ATT^{int}\\\\
&=ATT+\color{blue}{P\times log(a)}
\end{align}
$$
where $\color{blue}{P\times log(a)}$ is the biased part that changes the regression results.

It is because of this bias that many articles will treat zero values as part of robustness testing.

There are other more complex situations discussed, but I cannot understand them.

## Conclusion and Solutions

### Conclusion

When facing **samples with explanatory variables containing 0**!

Many marketing accounts exaggerate the conclusions of the article. The article criticizes the **logarithmic transformation of explanatory variables containing 0**. In fact, there is an impossible triangle in the estimation of treatment effects.

{{< mermaid>}}
graph LR
A(Estimate Individual Average Treatment Effect)------B(Treatment Effect Remains Unchanged After Unit Transformation)
B(Treatment Effect Remains Unchanged After Unit Transformation)------ C(Point Identification Based on Marginal Distribution of Potential Outcomes)
C(Point Identification Based on Marginal Distribution of Potential Outcomes)------A(Estimate Individual Average Treatment Effect)
{{< /mermaid>}}

### Solutions

> Each of the following methods makes a trade-off in the impossible triangle.

1. Use common normalization and standardization to remove dimensions, so there is no unit effect.
2. Poisson regression maximum likelihood estimation.
3. Remove samples with zero values.
4. Clarify the sample distribution and further decompose the intensive and extensive margins.
5. Use other parameters like Lee bounds (I didn't understand how to do this).

## References

- [Blog of one of the paper's authors](https://jiafengkevinchen.github.io/publications)
- [Your teacher may have been teaching it wrong: You can no longer use log(Y+0.0000000001)](https://mp.weixin.qq.com/s/linHQsAq2tXV3LXA9gNPZQ)
- [TOP5 questioned for using log(1+x) data transformation, fixed effects, double difference event graphs, conclusions unreliable!](https://mp.weixin.qq.com/s/ki4zxiqyghx89wHBSbedKA)
- [TOP5 latest: Do not accept log(y+1) or arcsinh(y) transformation, absolutely not!](https://mp.weixin.qq.com/s/3SXhDaahX54DvTlqPN6UYw)
- [Taking logarithms: How to deal with zero and negative values](https://mp.weixin.qq.com/s/U9qwveJaFtk33CYvY1yYSQ)
- [The End of Logarithms](https://mp.weixin.qq.com/s/LoXCQhvSqIq9EEhYj4teoA)
- [Causal Effects](https://blog.huaxiangshan.com/zh-cn/posts/effect/)
- [Top Journal Overview: QJE The End of Logarithms](https://mp.weixin.qq.com/s/4dZBIELlT4NtVwwYKdFfJw)
- [How to Handle Non-Positive Values](https://mp.weixin.qq.com/s/U9qwveJaFtk33CYvY1yYSQ)
- [Code for the log with zero paper](https://github.com/jiafengkevinchen/logs-public)

