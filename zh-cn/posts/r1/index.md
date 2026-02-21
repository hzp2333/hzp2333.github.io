# R 语言基础 1：界面介绍与语法结构




[R 语言笔记 1 界面介绍与语法结构](https://blog.huaxiangshan.com/zh-cn/posts/r1/)

[R 语言笔记 2 数据清洗、绘图与计量](https://blog.huaxiangshan.com/zh-cn/posts/r2/)

记录下 R 语言学习过程。个人感觉作为**只跑回归**的经济学学习者， Stata  完全够用了[^2]，不足的部分一般都用 Python 的轮子，即便是算 DSGE 用的也是 Matlab 的 Dynare 插件。对于计量经济学来说 R 语言回归表格样式和导出都不太友好，比较劝退。

虽然目前对我没啥用，但学习原因有三：

- 支持开源[^1]，所以想浅浅学习下 R 语言；
- 个人目前在用 Rstudio 写博客文件；
- 看了下快手、字节、腾讯、百度等大厂的分析师类型实习招聘，一般都是要求用 R 语言处理 SQL 数据库。

## 教程推荐

### 个人推荐

- 论坛：[统计之都](https://cosx.org/)

- 在线即可运行 R 语言代码：[菜鸟编程](https://www.runoob.com/r/r-tutorial.html)

- 国外版本的菜鸟编程：[w3schools](https://www.w3schools.com/r/r_lists.asp)

- 推荐[博客网站](https://tecdat.cn/)

- 强烈推荐：《[统计软件](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/index.html) R》 [李东风老师](https://www.stat-center.pku.edu.cn/zxry/zxjy/ldf/1227393.htm)写的电子讲义

- 强烈推荐：《[数据科学中的 R 语言](https://bookdown.org/wangminjie/R4DS/index.html)》王敏杰老师写的电子讲义

- 强烈推荐：《[Introduction to Econometrics with R](https://www.econometrics-with-r.org/index.html)》教材互动感极强！

- 由于 R 语言可以生成网站，国内外很多老师都把自己的课写成了在线电子讲义。
  >
  > 写博客是积累，写讲义是用心，这样的老师越来越多，中国以后也会越来越好吧。
  >
  > 可以参见 R 语言电子图书大集合 [bookdown](https://bookdown.org/)
  >
  > 大部分老师的电子讲义都会推荐的[一本](https://r4ds.had.co.nz/)
  
- R 语言项目： mounment 的 [github仓库](https://github.com/Mounment/R-Project?tab=readme-ov-file)

- 国内教程[^3]推荐：

个人喜欢快速入门且关键处足够细致的教程，本文笔记也主要来源于该视频：

> 看完视频语法介绍之后建议直接开看电子讲义了。
>
> 后面视频讲复杂了，没必要。

{{< bilibili BV1fh411H7vi>}}

### 电子讲义教材

  表格出处：[【精心整理】2022年各专业领域全网最新最顶级的R语言新书](https://zhuanlan.zhihu.com/p/530525295)

| 专业领域   | TOP-R 书籍或资源                                                                                     | 作者                                                                     | 书籍地址                                                                                                                                                                                |
| :----- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R 编程   | R 语言编程：基于 tidyverse                                                                             | 张敬信                                                                    | [https://zhuanlan.zhihu.com/p/467134727](https://zhuanlan.zhihu.com/p/467134727)                                                                                                    |
| R 编程   | R 语言教程                                                                                          | 李东风                                                                    | [https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/\_Rbook/index.html](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/index.html)                         |
| R 编程   | Advanced R                                                                                      | Hadley                                                                 | [https://adv-r.hadley.nz/](https://adv-r.hadley.nz/)                                                                                                                                |
| R 编程   | Efficient R programming                                                                         | Colin Gillespie, Robin Lovelace                                        | [https://csgillespie.github.io/efficientR/](https://csgillespie.github.io/efficientR/)                                                                                              |
| R 可视化  | ggplot 2: Elegant Graphics for Data Analysis                                                    | Hadley                                                                 | [https://ggplot2-book.org/](https://ggplot2-book.org/)                                                                                                                              |
| R 可视化  | Interactive web-based data visualization with R, plotly, and shiny                              | Carson Sievert                                                         | [https://plotly-r.com/](https://plotly-r.com/)                                                                                                                                      |
| R 可视化  | 现代统计图形                                                                                          | 赵鹏，谢益辉，黄湘云                                                             | [https://bookdown.org/xiangyun/msg/](https://bookdown.org/xiangyun/msg/)                                                                                                            |
| R 可视化  | rstudio:: conf 2020 data visualization workshop                                                 | Kieran Healy                                                           | [https://github.com/rstudio-conf\-2020/dataviz](https://github.com/rstudio-conf-2020/dataviz)                                                                                       |
| R 可视化  | R Graphics Cookbook, 2 nd edition                                                               | Winston Chang                                                          | [https://r-graphics.org/](https://r-graphics.org/)                                                                                                                                  |
| R 可视化  | R 语言数据可视化之美                                                                                     | 张杰                                                                     | [https://gitee.com/easyshu/Beautiful-Visualization-with-R](https://gitee.com/easyshu/Beautiful-Visualization-with-R)                                                                |
| 文档沟通   | R Markdown Cookbook                                                                             | 谢益辉                                                                    | [https://bookdown.org/yihui/rmarkdown-cookbook/](https://bookdown.org/yihui/rmarkdown-cookbook/)                                                                                    |
| 文档沟通   | R Markdown: The Definitive Guide                                                                | 谢益辉                                                                    | [https://bookdown.org/yihui/rmarkdown/](https://bookdown.org/yihui/rmarkdown/)                                                                                                      |
| 文档沟通   | bookdown: Authoring Books and Technical Documents with R Markdown                               | 谢益辉                                                                    | [https://bookdown.org/yihui/bookdown/](https://bookdown.org/yihui/bookdown/)                                                                                                        |
| 开发 R 包 | R Packages                                                                                      | Hadley                                                                 | [https://r-pkgs.org/](https://r-pkgs.org/)                                                                                                                                          |
| Shiny  | Mastering Shiny                                                                                 | Hadley                                                                 | [https://mastering-shiny.org/](https://mastering-shiny.org/)                                                                                                                        |
| Shiny  | Engineering Production-Grade Shiny Apps                                                         | Colin Fay, Sébastien Rochette, Vincent Guyader and Cervan Girard       | [https://engineering-shiny.org/](https://engineering-shiny.org/)                                                                                                                    |
| Shiny  | JavaScript for R                                                                                | John Coene                                                             | [https://javascript-for-r.com/](https://javascript-for-r.com/)                                                                                                                      |
| 应用统计   | Statistical Inference via Data Science                                                          | Chester Ismay and Albert Y. Kim                                        | [https://moderndive.com/](https://moderndive.com/)                                                                                                                                  |
| 应用统计   | Introduction to Modern Statistics                                                               | Mine Çetinkaya-Rundel                                                  | [https://openintro-ims.netlify.app/](https://openintro-ims.netlify.app/)                                                                                                            |
| 应用统计   | 现代应用统计与 R 语言                                                                                    | 黄湘云                                                                    | [https://bookdown.org/xiangyun/masr/](https://bookdown.org/xiangyun/masr/)                                                                                                          |
| 应用统计   | 统计学与 R 语言 (课件)                                                                                  | 张敬信                                                                    | tidy-R 语言 2 群（222427909）群文件                                                                                                                                                         |
| 实验设计   | The Grammar of Experimental Designs                                                             | Emi Tanaka                                                             | [https://emitanaka.org/edibble-book/](https://emitanaka.org/edibble-book/)                                                                                                          |
| 贝叶斯    | Doing Bayesian Data Analysis in brms and the tidyverse                                          | A Solomon Kurz                                                         | [https://bookdown.org/content/3686/](https://bookdown.org/content/3686/)                                                                                                            |
| 贝叶斯    | Introduction to Bayesian Econometrics: A GUIded tour using R                                    | Andrés Ramírez-Hassan                                                  | [https://bookdown.org/aramir21/IntroductionBayesianEconometricsGuidedTour/](https://bookdown.org/aramir21/IntroductionBayesianEconometricsGuidedTour/)                              |
| 贝叶斯    | An Introduction to Bayesian Reasoning and Methods                                               | Kevin Ross                                                             | [https://bookdown.org/kevin\_davisross/bayesian-reasoning-and-methods/](https://bookdown.org/kevin_davisross/bayesian-reasoning-and-methods/)                                       |
| 贝叶斯    | Statistical rethinking with brms, ggplot 2, and the tidyverse: Second edition                   | A Solomon Kurz                                                         | [https://bookdown.org/content/70a06054-8138-4d90-aaa0-895f57aab1b4/](https://bookdown.org/content/70a06054-8138-4d90-aaa0-895f57aab1b4/)                                            |
| 数据科学   | R for Data Science                                                                              | Hadley                                                                 | [https://r4ds.had.co.nz/](https://r4ds.had.co.nz/)                                                                                                                                  |
| 数据科学   | Tidyverse Skills for Data Science in R                                                          | Carrie Wright, Shannon Ellis, Stephanie Hicks, and Roger D. Peng       | [https://leanpub.com/tidyverseskillsdatascience](https://leanpub.com/tidyverseskillsdatascience)                                                                                    |
| 数据科学   | 数据科学中的 R 语言                                                                                     | 王敏杰                                                                    | [https://bookdown.org/wangminjie/R4DS/](https://bookdown.org/wangminjie/R4DS/)                                                                                                      |
| 数据科学   | Data Science Live Book                                                                          | Pablo Casas                                                            | [https://livebook.datascienceheroes.com/](https://livebook.datascienceheroes.com/)                                                                                                  |
| 数据科学   | R 语言实战（第三版）                                                                                     | Rob Kabacoff                                                           | [https://livebook.manning.com/book/r-in-action-third-edition/](https://livebook.manning.com/book/r-in-action-third-edition/)                                                        |
| 数据科学   | Modern Data Science with R (2 nd)                                                               | Benjamin S. Baumer, Daniel T. Kaplan, and Nicholas J. Horton           | [https://mdsr-book.github.io/mdsr2e/](https://mdsr-book.github.io/mdsr2e/)                                                                                                          |
| 机器学习   | mlr 3 book                                                                                      | 官方出品                                                                   | [https://mlr3book.mlr-org.com/](https://mlr3book.mlr-org.com/)                                                                                                                      |
| 机器学习   | Tidy Modeling with R                                                                            | MAX KUHN AND JULIASILGE                                                | [https://www.tmwr.org/index.html](https://www.tmwr.org/index.html)                                                                                                                  |
| 机器学习   | Hands-On Machine Learning with R                                                                | Bradley Boehmke & Brandon Greenwell                                    | [https://bradleyboehmke.github.io/HOML/](https://bradleyboehmke.github.io/HOML/)                                                                                                    |
| 机器学习   | Feature Engineering and Selection: A Practical Approach for Predictive Models                   | Max Kuhn and Kjell Johnson                                             | [http://www.feat.engineering/](http://www.feat.engineering/)                                                                                                                        |
| 机器学习   | An Introduction to Statistical Learning with R                                                  | Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani         | [https://trevorhastie.github.io/ISLR/](https://trevorhastie.github.io/ISLR/)                                                                                                        |
|        |                                                                                                 |                                                                        |                                                                                                                                                                                     |
| 机器学习   | R 机器学习：基于 mlr 3 verse (课件)                                                                      | 张敬信                                                                    | tidy-R 语言 2 群（222427909）群文件                                                                                                                                                         |
| 深度学习   | Deep Learning with R, Second Edition                                                            | François Chollet with Tomasz Kalinowski and J. J. Allaire              | [https://www.manning.com/books/deep-learning-with-r-second-edition](https://www.manning.com/books/deep-learning-with-r-second-edition)                                              |
| 文本挖掘   | Supervised Machine Learning for Text Analysis in R                                              | EMIL HVITFELDT AND JULIA SILGE                                         | [https://smltar.com/](https://smltar.com/)                                                                                                                                          |
| 文本挖掘   | QUANTEDA TUTORIALS                                                                              | Kohei Watanabe and Stefan Müller                                       | [https://tutorials.quanteda.io/](https://tutorials.quanteda.io/)                                                                                                                    |
| 文本挖掘   | Text Analysis Tutorials                                                                         | LADAL                                                                  | [https://slcladal.github.io/index.html](https://slcladal.github.io/index.html)                                                                                                      |
| 计量     | Introduction to Econometrics with R                                                             | Christoph Hanck, Martin Arnold, Alexander Gerber, and Martin Schmelzer | [https://www.econometrics-with-r.org/](https://www.econometrics-with-r.org/)                                                                                                        |
| 计量     | Beyond Multiple Linear Regression: Applied Generalized Linear Models and Multilevel Models in R | Paul Roback and Julie Legler                                           | [https://bookdown.org/roback/bookdown-BeyondMLR/](https://bookdown.org/roback/bookdown-BeyondMLR/)                                                                                  |
| 计量     | Mixed Models with R Getting started with random effects                                         | Michael Clark                                                          | [https://m-clark.github.io/mixed\-models-with-R/](https://m-clark.github.io/mixed-models-with-R/)                                                                                   |
| 时间序列   | Forecasting: Principles and Practice (3 rd ed)                                                  | RobJHyndman                                                            | [https://otexts.com/fpp3/](https://otexts.com/fpp3/)                                                                                                                                |
| 时间序列   | 金融时间序列分析讲义                                                                                      | 李东风                                                                    | [https://www.math.pku.edu.cn/teachers/lidf/course/fts/ftsnotes/html/\_ftsnotes/index.html](https://www.math.pku.edu.cn/teachers/lidf/course/fts/ftsnotes/html/_ftsnotes/index.html) |
| 金融     | Tidy Finance with R                                                                             | Christoph Scheuch, Stefan Voigt, and Patrick Weiss                     | [https://tidy-finance.org/](https://tidy-finance.org/)                                                                                                                              |
| 空间数据分析 | Geocomputation with R                                                                           | Robin Lovelace, Jakub Nowosad, Jannes Muenchow                         | [https://geocompr.robinlovelace.net](https://geocompr.robinlovelace.net)                                                                                                            |
| 空间数据分析 | Spatial Data Science with applications in R                                                     | Edzer Pebesma, Roger Bivand                                            | [https://keen-swartz-3146c4.netlify.app/](https://keen-swartz-3146c4.netlify.app/)                                                                                                  |
| 空间数据分析 | NHH ECS 530 2021 course: Spatial data analysis (with R)                                         | Roger Bivand                                                           | [https://rsbivand.github.io/ECS530\_h21/](https://rsbivand.github.io/ECS530_h21/)                                                                                                   |
| 因果推断   | The Effect: An Introduction to Research Design and Causality                                    | Nick Huntington-Klein                                                  | [https://theeffectbook.net/](https://theeffectbook.net/)                                                                                                                            |
| 因果推断   | Causal Inference: The Mixtape                                                                   | Scott Cunningham                                                       | [https://mixtape.scunning.com/index.html](https://mixtape.scunning.com/index.html)                                                                                                  |
| 社会科学   | Data Analytics for the Social Sciences Applications in R                                        | G. David Garson                                                        |                                                                                                                                                                                     |
| 社会科学   | A Business Analyst’s Introduction to Business Analytics                                         | Adam Fleischhacker                                                     | [https://www.causact.com/](https://www.causact.com/)                                                                                                                                |
| 社会科学   | Computing for the Social Sciences                                                               | Benjamin Soltoff                                                       | [https://cfss.uchicago.edu/notes/intro-to-course/](https://cfss.uchicago.edu/notes/intro-to-course/)                                                                                |
| 网络分析   | Methods for Network Analysis                                                                    | Mark Hoffman                                                           | [https://bookdown.org/markhoff/social\_network\_analysis/](https://bookdown.org/markhoff/social_network_analysis/)                                                                  |
| 网络分析   | Handbook of Graphs and Networks in People Analytics: With Examples in R and Python              | Keith McNulty                                                          | [https://ona-book.org/](https://ona-book.org/)                                                                                                                                      |
| 网络建模   | workshop 2020\_Network Modeling for Epidemics                                                   | [http://statnet.org](http://statnet.org)                               | [https://statnet.org/nme/d1.html](https://statnet.org/nme/d1.html)                                                                                                                  |
| 模型计算   | Model Estimation by Example Demonstrations with R                                               | Michael Clark                                                          | [https://m-clark.github.io/models-by-example/](https://m-clark.github.io/models-by-example/)                                                                                        |
| 模型计算   | Computer-age Calculus with R                                                                    | Daniel Kaplan                                                          | [https://dtkaplan.github.io/RforCalculus/](https://dtkaplan.github.io/RforCalculus/)                                                                                                |
| 大数据    | Mastering Spark with R                                                                          | Javier Luraschi, Kevin Kuo, Edgar Ruiz                                 | [https://therinspark.com/](https://therinspark.com/)                                                                                                                                |
| 元分析    | Doing Meta-Analysis in R: A Hands-on Guide                                                      | Harrer, M., Cuijpers, P., Furukawa, T.A., & Ebert, D.D                 | [https://bookdown.org/mathiasHarrer/Doing\_Meta\_Analysis\_in\_R/](https://bookdown.org/mathiasHarrer/Doing_Meta_Analysis_in_R/)                                                    |
| 生存分析   | Applied Survival Analysis Using R                                                               | Dirk F. Moore                                                          |                                                                                                                                                                                     |

## R 语言下载

个人环境：

R 语言（本体）+ Rstuido（IDE）+ Rtools（插件包管理，win 系统限定）

下载很简单，都是点点点一路 yes 即可。

R 语言本体：[https://cran.r-project.org/](https://cran.r-project.org/)

Rstudio 桌面软件：[https://posit.co/download/rstudio-desktop/](https://posit.co/download/rstudio-desktop/)

R 语言本体自带中文支持，但是 Rstudio 没有中文支持，有[汉化github项目](https://github.com/s0521/rstudio_cn)，但是不好用，也不推荐去用，产生闪退、不兼容 bug 就麻烦了。

## R studio 界面与准备

### 界面介绍

菜单目录进入页面设置：`tools` - `global option` - ` Pane Layout` 

![页面](/img/R语言基础.zh-cn-20240523130353761.webp)

此时，

左上角的 `source`（新建 R script 项目后）页面代表代码编写部分。

左下角的 `console` 代表结果展示部分。

右侧上下部分就是自定义栏目，例如 `history` 代表代码运行历史；`environment` 代表变量环境，可以在里面通过 `import Dataset` 导入 stata、excel 等数据；`file` 代表运行环境的电脑目录。

![随便加载了一个手头的数据集](/img/R语言基础.zh-cn-20240523130634460.webp)
### 包的管理与下载

#### 手动安装

持续使用 R 语言很考验电脑内存，因为要不断地下载包。

 win 系统上使用 R 语言，一般使用 Rtools 管理。最新版的 R 语言应该自带这个工具包，没有的话去[官网](https://cran.r-project.org/bin/windows/Rtools/history.html)安装即可，安装 .exe 的软件即可。

在包含 `file` 的部分，其中包含 `Packages` 部分，点击其中的 `install` 即可安装。

![包的安装](/img/R语言基础.zh-cn-20240523130717577.webp)
#### 命令安装、加载

> R 语言作为统计学家的语言，个人感觉本体程序语法不太优雅，但开源加载适合的包后就无比痛快了。

例如我们要安装 car 这个包，可以使用以下命令

```R
# 包的安装
install.packages("car") #这里是注释
# 包的加载
library(caret) 
# 单独加载其中某个字函数
# car::vif()
# 更新包
update.packages()
# 移除包
remove.packages()
# 获取帮助
?help
help("library")
# 某个关键词的帮助
help.search("library")
# 某个packages的帮助
help(packages = "ggplot2")
```

> 由于包与包之前可能存在同样的函数名，在调用两个包产生冲突时，后面的包的同名函数将覆盖前一个包

#### 设置工作目录

```R
# 查看当前目录
getwd()
# 设置工作目录,注意使用的是斜杠
setwd("F:/桌面")
# 获取文件路径，此时会打开电脑文件手动寻找文件，然后点击后会返回文件路径
file.choose() 

# 保存R文件.RData
save()
save.image()
#加载R文件
load("F:/文档1")
load(file.choose() )

# 记载某个包的数据集
data()
```

#### 载入数据

Stata 一个页面只能加载一个数据库，但是 R 语言可以加载多个。

![环境部分可以手动载入](/img/R语言基础.zh-cn-20240523130739387.webp)

```R
# 展示当前环境栏中的所有数据对象，以数据库名称为单位
ls()
# 移除某个对象
rm(list = ls())
```

## 语法知识

### 数据类型

| 类型   | 示例或描述                         | 类型      |
| ------ | ---------------------------------- | --------- |
| 数值   | 2333    233.3                      | numeric   |
| 字符   | '下一个就是你了'  "JOJO"  "2333"   | character |
| 逻辑   | TRUE T FALSE F                     | logical   |
| 缺失值 | 例如强行把文字转化为数字会转换失败 | NA        |
| 空白值 |                                    | NULL      |
| 非数   | Not a Number 非数值                 | NaN       |
| 无穷大 | “Infinite”的缩写                   | Inf       |

```R
# 判断数据类型
is.numeric(123)
is.character('123')
is.logical(FALSE)
is.na(NA)
is.null(NULL)
is.nan(NaN)
# 转换数据类型
as.numeric('123')
as.character(123)
as.logical(FALSE)
```

### 数据结构

#### 赋值与向量

常规介绍顺序：赋值、索引、切片

```R
# 赋值赋值
# 对象名 <- 对象值
# 快捷键 alt -

v1 <- 1:5 #生成1到5对应的向量组v1
v2 <- c(v1,3,2,44,6) #链接connect嵌套
v3 <- rep(v2,times = 2)# repeat:按整体次序重复两次
v4 <- rep(v2,each = 2)# repeat:按每个元素重复两次
v5 <- rep(v2,times=2 , each = 2)# 优先执行each，后执行times
v6 <- seq(from = 2, to = 9, by = 3) #以2为取值起点，每次加3取值，直到大于9为止
v7 <- seq(from = 2, to = 12, length.out = 3) #限制向量长度，因此多出来的数字会被取均值
v8 <- c('JOJO' ,'下一个就是你了')
v9 <- c('JOJO' ,T , 123) #会存在强制转换，字符>逻辑>数值

# 向量名称
names(v2)<- v9 #变量v2的名称改为v9
# 此时v2情况如下
JOJO TRUE  123 <NA> <NA> <NA> <NA> <NA> <NA> 
   1    2    3    4    5    3    2    3    6 
# 向量长度
length(v9)
length(v9)<- 9

# 向量索引
# 不同于python重默认索引从0开始,R语言索引默认从1开始
# 不同于python加上负号代表反方向,R语言负索引代表去掉该索引值
v7[3] 
v7[c(1,3,5)]
v2[c(1,4)]
v2[-c(1,4)]  #去掉1和4对应索引值
v2[c('JOJO' ,'TRUE')]
v1[v1%%2==1] #条件索引，模2余1的奇数

# 常量
pi #圆周率
letters #小写字母
LETTERS #大写字母
month.abb #月份缩写 "Jan"
month.name #月份全写 "January" 
```

#### 矩阵

矩阵相关就是向量命令的叠加

```R
# 矩阵
m1 <- matrix(
	1:6,
	nrow = 2, # 两行
	# ncol = 3, # 列
	byrow = F, #按列进行填充，所以无需规定ncol
	dimnames = list(c('r1','r2'),
					c('c1','c2','c3'))
    )
# 和向量相同，矩阵只接受一种数据格式
# 生成一个3*3的空矩阵
m0 <- matrix(NA,nclo = 3,nrow=3) 

m2 <- matrix(
    c(1:6, letters[1:6]),
    nrow = 3,
    byrow = TRUE,
    dimnames = list(c('r1', 'r2', 'r3'),
                    c('c1', 'c2', 'c3', 'c4'))
  )

# 行列名册
colnames(m1) #列
rownames(m1) #行
dimnames(m2)<-list(c) #行列名称

# 维度信息,也就是python中的shape命令
dim(m1) 
ncol(m1)
nrow(m1)

# 矩阵索引
m2[1,2] #返回一行二列的值
m2[1,] #返回第一行的向量
m2[c(1,3),c(2,4)]
# 换成按照索引名称切片等同
m2['r1',]

# 转化成向量
as.vector(m1)  #按列顺序抽取控制
#array
```

#### 列表

不同于向量和矩阵，列表可以是不同数据类型和结构的组合

```R
v1 <- 1:5
m1 <- matrix(
  1:6,
  nrow = 2, 
  byrow = F, 
  dimnames = list(c('r1','r2'),
                  c('c1','c2','c3'))
)
# 不同于向量和矩阵，列表可以是不同数据类型和结构
l1<- list(com1 = v1,
          com2 = m1)
# 列表名称
names(l1)
# 列表索引,虽然有视频说这几个命令不相同，也就是区别返回到到底是列表、矩阵还是向量，个人试了下似乎没有区别。
l1$com1 		
l1[['com2']] 	
l1['com2']    
l1[20]

# 新建成分
l1$com3<- 3:6
l1

# 释放列表
unlist(l1) # 把列表降维成向量，索引生成为第几个列表第几个值
```

#### 数据框

特殊的列表，也就是我们常常处理的面板数据、时间序列，使用 Data frame 构建。

```R
# 数据框生成
df1 <- data.frame(
	C1 = 2:5,
	C2 = letters[2:5]
	)
df1

# 维度信息
dim(df1)
ncol(df1)
nrow(df1)

# 行列名称
dimnames(df1) # 列和行名称
names(df1) # 行名称
colnames(df1)
rownames(df1)

# 数据框索引
df1[1:2 ,2]
df1[,2]
df1[,"c1"]
df1['1',]
df1[[2]]
df1$c1
df1[2]
df1['c1']

# 新间列
df1$c3 <- 1:4

# 生成网格搜索的数据框
expand.grid(mtry = 2:5,
			  ntree=c(200,500))
```

### 基本运算和函数

#### 基本运算

```R
1+2 #加法
3-2 #减法
3*4 #乘法
8/5 #除法

c(1:4)/c(2:5)       #长度不同则会循环扩展
2^3 				#幂运算
exp(1)
log(x=25，base=5)   #5为底的25的对数
sqrt(4) 			#开平方
abs(-5.6) 			#绝对值
slign(-5.6)			#符号
round(3.1415926,2)	#保留指定小数
signif(3.1415926,2) #保留有效数字
ceiling(3.2)		#大于此数的最小整数
floor(3.2)			#小于此数的最大整数

# 数值对比
== != > >= < <=
2 %in% 2:5 #是否包含于
& 	#与
| 	#或
!	#非
```

#### 向量函数运算

```R
v2 <- c(3,2,7,4,6,8,11,21)
max(v2)				#最大值
cummax(v2)			#对应长度范围内的最大值，返回值也是向量
min(v2)
cummin(v2)
sum(v2)				#求和
cumsum(v2)			#累计求和
prod(v2)			#乘积
cumprod(v2)			#累计乘积

mean(v2)			#均值
median(v2)			#中位数
sd(v2)				#标准差，计算使用的样本的公式
var(v2)				#方差，计算使用的样本的公式

rev(v2)				#向量逆转，倒过来reverse排序
sort(v2)			#排序

v2 <- rep(v2,times=2)
table(v5)			#频数统计
unique(v5)			#取值水平，按照数字第一次出现的先后顺序排列数字

# 索引函数
which(v5==7)		#返回满足条件的索引值
which.max(v5)		#最大值有重复时返回第一次出现的索引
which.min(v5)

# 交集
intersect(1:5,4:7)
# 差集
setdiff(1:5,4:7)
# 并集,只保留元素的位置值，有重复也保留一个
union(1:5,4:7)
```

#### 数据框和矩阵运算

##### 数据框

```R
dfs <- data.frame(
  a = 1:5,
  b = 3:7,
  d = letters[1:5]
)

# 行列合并
df1 <- dfs[1:3, ]
df1
df2 <- dfs[3:5, ]
df2

# 行合并
rbind(df1, df2) # 行增加，列不变
cbind(df1, df2) # 列增加，行不变

# 行列运算
colMeans(dfs[,1:2])		#列均值
colSums(dfs[,1:2])		#列求和
rowMeans(dfs[,1:2])		#列均值
rowSums(dfs[,1:2])		#列求和

# apply(数据框,行1还是列2，运算函数)
apply(dfs[,1:2],2,sd) 	#按列计算方差
apply(
	dfs[,1:2],
	2,
	function(x){sum(is.na(x))}
	)

# 数据结构信息
str(dfs)			#数据类型
summary(dfs)		#最小值和最大值
View(dfs)			#展示数据框
head(dfs,n=2)		#展示前两行(n=2)
tail(dfs,n=2)		#展示末尾两行(n=2)


```

##### 矩阵

```R
m3 <- matrix(
	c(5,7,3,4),
	ncol = 2,
	byrow = T,
    )
m3
m4 <- matrix(
	c(5,7,3,4,8,9),
	ncol = 3,
	byrow = T,
    )
m4

t(m3)			#转置
det(m3)			#行列式
m3 %*% m4		#矩阵乘法
solve(m3)		#m3 %*% x =E ，求出x
solve(m3,m4)	#m3 %*% x =m4 ，求出x
```

#### 字符函数

```R
# 连接字符
paste(1:5,collapse = "+")
paste(letters[1:5],collapse = "-")
paste(1:5,letters[1:8],collapse = "~")
paste(1:5,letters[1:8])

# 字符长度
nchar(month.name)
# 字母转大写
toupper(month.name)
# 字母转小写
tolower(month.name)
# 含有某个字符的元素的索引
grep("JU",month.name)
# 替换字符
gsub("e","000",month.name)	#将month.name含有e的地方替换成000
```

#### 分布函数

```R
set.seed(24) 					#随机种子
sample(1:2,12,replace = T)		#从1和2中进行12次有放回（T）的抽样。stata安慰剂检验随机抽样大家应该见过
rnorm(10,mean=1,sd=2) 	#r随机数+分布（norm）
pnorm(1,mean=1,sd=2)		#p累计概率
qnorm(0.5,mean=1,sd=2)		#q分位数
dnorm(1,mean=1,sd=2)		#d概率密度

plot(x = seq(-5, 7, length = 1000),
     y = dnorm(seq(-5, 7, length = 1000),
               mean = 1,
               sd = 2),
     type = "l",
     ylim = c(0, 0.25))
abline(h = 0, v = 1)

# 从-5到7间取1000个数，1000个数服从均值为1，标准差为2的正态分布
# 增加值为0的横线和值为1的竖线
```

![对应的分布函数图](/img/R语言基础.zh-cn-20240523130808012.webp)

### 基本语法

#### 循环

stata 简化为了 `local`、`global` 结合 `foreach` 进行变量循环，缺点是不便于行间的加减。

```R
# for循环
for (x in c(-2,3,0,4)){
	print(x)
	y= abs(x)
	z=y^3
	print(z)
	print("____")
	}

# 使用宏变量定义
for (variable in vector){
	} 

# while循环
v1 <- 1:5
i<-1
while(i<=length(v1)){
    print(i)
    print(sum(v1[1:i]))
    i=i+1
    print(i)
    print("####")
}

  df <- data.frame(c1 = 2:5,
                   c2 = 4:7,
                   c3 = -19:-16)
  
  # 循环遍历数据框的每一行
  for (i in 1:nrow(df)) {
    # 计算每行的总和并打印
    print(sum(df[i, ]))
  }

#next:跳过
#break:结束
  for (i in 1:nrow(df)) {
    # 计算每行的总和并打印
    if(i==3){break}
    print(sum(df[i, ]))
  }
```

#### 条件

If else 老生常谈了，这里不再过多举例

```R
a <- 7
if (a > 6) {
  print("a > 6")
} else {
  print("a <= 6")
}


s = 45
if (s %% 2 ==0) {
  print("偶数")
} else {
  print("奇数")
}

ifelse(55 %% 2 ==0,"偶数" "奇数")
```

#### 函数构建

![定义函数后，变量栏也会有展示](/img/R语言基础.zh-cn-20240523130826725.webp)

```R
名称<- function(参数){
	具体操作
	}
# 定义函数：阶乘
f1 <- function(aug1){
	res1<-1:aug1
	res2<-prod(res1)
	return(res2)
}
# 使用函数
f1(10)

# 定义函数：加法
f2<-function(aug1,aug2=4){
    res <- aug1+aug2
    return(res)
}
f2(2333)
f2(2333,6666) #此时覆盖默认值aug2=4
```

## 数据整理

tidyverse 包的官网：[https://www.tidyverse.org/](https://www.tidyverse.org/)

测试数据集可以在这里下载：[https://moxingjiqi.shinyapps.io/dataset/](https://moxingjiqi.shinyapps.io/dataset/)

tidyverse 包的 `haven` 支持读取 spss、stata、SAS

> 文件路径最好别包括中文名，不然容易导入乱码失败

### 导入和导出

表格出处：《[数据科学中的 R 语言](https://bookdown.org/wangminjie/R4DS/index.html)》

| 格式                 | 命令                                               |
| -------------------- | -------------------------------------------------- |
| .txt                 | `read.table()`                                     |
| .csv                 | `read.csv()` and `readr::read_csv()`               |
| .xls and .xlsx       | `readxl::read_excel()` and `openxlsx::read.xlsx()` |
| .sav (SPSS files)     | `haven::read_sav()` and `foreign::read.spss()`     |
| .Rdata or rda        | `load()`                                           |
| .rds                 | `readRDS()` and `readr::read_rds()`                |
| .dta                 | `haven::read_dta()` and `haven::read_stata()`      |
| .sas 7 bdat (SAS files) | `haven::read_sas()`                                |
| Internet             | `download.file()`                                  |
|                      |                                                    |

```R

# CSV数据导入
#自定义数据列表
d.small <- read_csv("John, 33, 95
Kim, 21, 64
Sandy, 49, 100
", col_names=c("name", "x", "y") )

#文件读取1
data <- read_csv("testcsv.csv")
#文件读取2
rawdata<- read.table(file.choose(),head=T,sep=",")
# head:第一行变变量名 sep：csv分割符
head(rawdata,n=4)	#输出了数据的前 4 行
tail(rawdata,n=10)	#输出了数据的后 10 行
rawdata[95:105]		#输出95-105行
str(rawdata)		#查看数据类型

# read.csv(file.choose())
# data.table::fread(file.choose())

# CSV数据导出
write.table(rawdata,	#导出对象
           "test.csv",	#导出路径
           sep=",",		#导出分割符号
           row.names=F)	#行名称

# 读取excel表
library(readxl)
data1<- read_excel(file.choose())

#批量获取csv文件
library(readr)
library(dplyr)
# 设置文件夹路径
folder_path <- "F:/桌面/房地产PB/"
# 获取文件夹中的所有csv文件路径
csv_files <- list.files(folder_path, pattern = "\\.csv$", full.names = TRUE)
# 创建一个空的列表，用于存储读取的csv数据
data_list <- list()
# 循环读取每个csv文件，并将其存储在data_list中
for (file in csv_files) {
  data <- read_csv(file)
  data_list[[file]] <- data
}
# 将所有数据合并到一个数据框中
combined_data <- bind_rows(data_list)
# 查看合并后的数据
print(combined_data)

```

[^1]: 使用 Zotero 进行文献管理是我爱上开源理念的开始
[^2]: 至少绝大部分期刊主体文件都是 do 文件。如果再论画图，stata 的`schemepack`包已经足够强大，可以调整成 R 语言的默认风格

[^3]: 国内卖课确实天下第一


