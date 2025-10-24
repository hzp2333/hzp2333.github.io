# Stata 输出 Word 表格





写经济实证论文时，经常输出大量的表格（主要是描述性统计和回归结果）。掌握了表格输出瞬发技巧，就像使用魔法不需要吟唱！
![当你和别人讨论便变量选择时，直接秒回，就是这种感觉！](/img/stata输出Word表格.zh-cn-20240523133530444.webp)

目前 stata 相应的命令五花八门—— `asdoc`、`outreg2`、`logout`、`estout`。这里简单概括下各个命令常用在哪，又有何特点。

### Estout: 全能，latex 输出

`estout` 由瑞士**伯尔尼大学**社会学研究所（University of Bern, Institute of Sociology）的 Ben Jann 教授编写。（[`coefplot`命令](https://repec.sowi.unibe.ch/stata/)也是大佬开发的）。

自定义效果好，是输出结果的主流命令。最强大之处是支持 [latex导出](https://www.lianxh.cn/details/948.html)。

### Asdoc：描述统计

在自己的操作中加入 `asdoc` 即可保存相应文件。

坏处是回归表格自定义效果差，且不符合一般期刊要求。**大家默认只用来展现描述性统计。**

> `tabout` 支持强大的描述性统计自定义表格，新版安装详见：https://tabout.net.au/docs/home.php[^1]

```sql
 ssc install asdoc, replace //下载命令
 sysuse "auto.dta", clear //使用stata自带的样本数据
 asdoc sum price mpg rep78 trunk weight , dec(4) save(表1描述性统计1.doc) title("表1描述性统计1")
 asdoc reg price mpg rep78 trunk weight, robust ,  save(表2基本回归.doc) title("表2基本回归")
```

![asdoc描述性统计](/img/stata输出Word表格.zh-cn-20240523133544872.webp)
![asdoc回归统计](/img/stata输出Word表格.zh-cn-20240523133602158.webp)
###   Sum2doc：描述统计

```
local varlist "wage age race married grade collgrad south union occupation" sum2docx `varlist' using Myfile.docx,replace /// stats(N mean(%9.2f) sd(%9.3f) min(%9.2f) median(%9.2f) max(%9.2f)) /// title(sum2docx_Table: Descriptive statistics)
```
### Logout：均值差异、相关系数检验

`logout` 好处是在描述统计、回归结果之外，还能输出均值差异检验、相关系数检验[^2]。

```sql
ssc install logout //下载命令
************描述性统计*****************
 sysuse "auto.dta", clear //使用stata自带的样本数据
 *输出至word(rtf格式)
logout ,save(文件名) word replace:  ///
		tabstat  price wei len mpg rep78, ///
		stats(mean sd min p50 max) c(s) f(%6.2f)
*输出至excel(xml格式)
logout ,save(文件名) excel replace:  ///
           tabstat  price wei len mpg rep78, ///
************均值差异检验*****************
ssc install ttable2
//均值t检验由中南财经政法大学的李春涛教授和张璇老师完成
logout, save(文件名) word excel replace: ///
		ttable2 price mpg trunk trunk weight length turn headroom, ///
        by( foreign ) f(%12.3f)
************相关系数检验*****************
logout,save(相关系数文件名) word excel replace: ///
		pwcorr_a rep78 headroom trunk weight length  , ///
		star1(0.01) star5(0.05) star10(0.1) //加入*标注
```

![logout相关系数输出](/img/stata输出Word表格.zh-cn-20240523133647133.webp)
### Outreg 2: 回归输出

表格输出，我选 `outreg2`! 表格美观，支持 word，导出便利。

`ssc hot, n(10)` 命令会展现 stata 热度前 10 的命令。`outreg` 排名第一！

![stata外部命令排行榜](/img/stata输出Word表格.zh-cn-20240523133727402.webp)

```sql
ssc install outreg2 //下载命令
webuse grunfeld,clear //使用默认数据
xtset company year //定义面板数据
************描述性统计*****************
outreg2 using 文件名.doc, replace sum(log) keep(company year invest mvalue kstock time) eqkeep(N min mix) title(Decriptive statistics)
************回归结果输出*****************
//分别使用随机效应、固定效应、混合效应回归然后合并
//开始新表格还是合并上去对应的是replace和append
xtreg invest mvalue kstock ,re
outreg2 using 文件名.doc,replace tstat bdec(4) tdec(4) rdec(4) ctitle(RE) keep( mvalue kstock )   e(r2_a,F) addstat(F test,e(p)) addtext(Company FE, NO,Year FE, NO)
xtreg invest mvalue kstock i.year ,fe 
outreg2 using 文件名.doc,append tstat bdec(4) tdec(4) rdec(4) ctitle(FE) keep(  mvalue kstock)  e(r2_a,F) addstat(F test,e(p)) addtext(Company FE, YES,Year FE, YES)
reg invest mvalue
outreg2 using 文件名.doc,append tstat bdec(4) tdec(4) rdec(4) ctitle(OLS) keep( mvalue )  e(r2_a,F) addstat(F test,e(p)) addtext(Company FE, YES,Year NO, NO)

//bdec(4) tdec(4) rdec(4)分别代表着系数、t检验、r^2的小数位
//addstat和addtext对应的添加统计量和表格内容
//keep(var1 var2 var3)选择自己要保留的输出系数
```

![outreg2回归输出](/img/stata输出Word表格.zh-cn-20240523133746623.webp)
### Putdocx 系列：万法归一

`docx` 系列命令来自[爬虫俱乐部](https://stata-club.github.io/)开发。以上大部分命令（asdoc 不是）都意味着一个输出表格要单独占用一个 word 文件。`docx` 改进后就可以重复使用一个文件。

```sql
ssc install sum2docx, replace
ssc install corr2docx, replace
ssc install t2docx, replace
ssc install reg2docx, replace
```

以下示例代码来自“[君生我未生！Stata结果输出：论文四表一键出-reg2docx-corr2docx](https://www.lianxh.cn/details/264.html)”。

```sql
clear all
set more off

putdocx begin                     //新建 Word 文档
putdocx paragraph, halign(center) //段落居中

*-定义字体、大小等基本设置
putdocx text ("附：文中待插入表格"), ///
        font("华为楷体",16,black) bold linebreak

*-保存名为 My_Table.docx 的 Word 文档
putdocx save "My_Table.docx", replace

*-调入数据
sysuse "auto.dta", clear


*-----Table 1-----
sum2docx price-length using "My_Table.docx", append ///
         obs mean(%9.2f) sd min(%9.0g) median(%9.0g) max(%9.0g) ///
         title("表 1: 描述性统计")
*-Note: 选项 append 的作用是将这张新表追加到 "My_Table.docx" 尾部, 下同.


*-----Table 2-----
putdocx begin
putdocx pagebreak
putdocx save "My_Table.docx", append

corr2docx price-length using "My_Table.docx", append ///
          star(* 0.05) fmt(%4.2f) ///
          title("表 2：相关系数矩阵")


*-----Table 3-----
putdocx begin
putdocx pagebreak
putdocx save "My_Table.docx", append

t2docx price-length using "My_Table.docx", append ///
       by(foreign) title("表 3：组间均值差异 t 检验")


*-----Table 4-----
putdocx begin
putdocx pagebreak
putdocx save "My_Table.docx", append

reg price mpg weight length
est store m1
reg price mpg weight length foreign
est store m2
probit foreign price weight length
est store m3
reg2docx m1 m2 m3 using "My_Table.docx", append ///
         r2(%9.3f) ar2(%9.2f) b(%9.3f) t(%7.2f) ///
         title("表4: 回归结果")

shellout "My_Table.docx"  //大功告成！打开生成的 Word 文档
```

### Etable: 支持中文

Stata 17 自带的输出命令, 虽然用起来不怎么便利，但它似乎是唯一一个[^3]支持中文编码的命令。

```sql
clear
input str6 性别 收入 消费 其他
"男" 8 1 90
"女" 9 2 21
"女" 10 3 22
"男" 11 4 31
"男" 1 6 49
"女" 2 7 95
"女" 3 8 86
"男" 4 9 17
end
	
reg 消费  收入 其他 if 性别 == "男", robust
est store 男性回归

reg 消费  收入 其他 if 性别 == "女", robust
est store 女性回归

reg 消费  收入 其他 ,robust
est store 全部回归

etable, estimates(男性回归 女性回归  全部回归) column(estimates)  keep( 收入 其他 )  ///
    cstat(_r_b, nformat(%9.3f) ) ///
    cstat(_r_se, nformat(%9.3f) ) ///
	mstat(N, nformat(%9.0f))  ///
    mstat(r2,nformat(%9.3g))  ///
    stars(0.10 "*" .05 "**" .01 "***", attach(_r_b))   ///
    showstars showstarsnote   ///
    title("表1 etable回归结果") ///
    note("数据来源：自设") ///
    export("文件名称.docx")
```

![etable回归命令](/img/stata输出Word表格.zh-cn-20240523133808475.webp)
### 本文插图的代码

来自[爬虫俱乐部公众号](https://stata-club.github.io/stata_article/2017-09-29.html)

```sql
clear
set obs 12

gen x = _n

gen y = x + uniform()
gen emoji = ustrunescape("\U0001f400") if x == 1

replace emoji = ustrunescape("\U0001f430") if x == 2

replace emoji = ustrunescape("\U0001f439") if x == 3

replace emoji = ustrunescape("\U0001f411") if x == 4

replace emoji = ustrunescape("\U0001f410") if x == 5

replace emoji = ustrunescape("\U0001f404") if x == 6

replace emoji = ustrunescape("\U0001f408") if x == 7

replace emoji = ustrunescape("\U0001f412") if x == 8

replace emoji = ustrunescape("\U0001f434") if x == 9

replace emoji = ustrunescape("\U0001f437") if x == 10

replace emoji = ustrunescape("\U0001f418") if x == 11

replace emoji = ustrunescape("\U0001f43a") if x == 12

scatter y x,msymbol(none) mlabel(emoji) mlabposition(0) mlabsize(huge)
graph export animals.svg, replace

shellout animals.svg
```



[^1]: 久闻大名，但没用过，我也不了解相关命令
[^2]: 相关系数似乎只有 logout 能做到输出
[^3]: 之前的所有命令在加载中文变量名称时都会出现乱码

