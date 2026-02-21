# R 语言笔记 2 : 数据清洗、绘图与计量




[R 语言笔记 1 界面介绍与语法结构](https://blog.huaxiangshan.com/zh-cn/posts/r1/)

[R 语言笔记 2 数据清洗、绘图与计量](https://blog.huaxiangshan.com/zh-cn/posts/r2/)

> 推荐的学习资源在 [R语言笔记1界面介绍与语法结构](https://blog.huaxiangshan.com/zh-cn/posts/r1/)
>
> 常用数据库和清洗思想已经在 [ stata 版本](https://blog.huaxiangshan.com/zh-cn/posts/data/)介绍过了，这里重点记录 R 语言数据清洗常用代码。
>
> 在整理的过程中我反复感受到开源的力量。所有的处理都有 R 语言原生的技巧，但总会冒出各种包让你更省事，所以，
>
> **即便引导已经破碎，也请你成为调包之王！**

## 数据清洗

### 工作目录

```R
# 清楚所有变量
rm(list=ls())
# 查看当前目录
getwd()
# 设置工作目录,注意使用的是斜杠
setwd("F:/桌面")
# 获取文件路径，此时会打开电脑文件手动寻找文件，然后点击后会返回文件路径
file.choose() 
```

### 数据导入

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

遇到中文乱码则加入编码

```R
read.table(…, fileEncoding = “UTF-8”)
```

参考来源 [《统计分析（以R语言为工具）：辅助材料》](https://xueningzhu.github.io/Statistical-Analysis-with-R/)

```R
### 1. read.rable() ###
#从txt中读入,分隔符为"\t"
# head表示查看前几行
tes = read.table("./data/top250.txt", header = TRUE, sep = "\t",fileEncoding = "GBK"); head(tes)


### 2. read.csv() ###
#专用函数read.csv
movie_csv = read.csv("./data/top250.csv",fileEncoding = "GBK"); head(movie_csv)

library("readxl") # 加载包
# 其中col_names参数仍然是为了设定是否把第一行当做变量名
movie_excel = data.frame(read_excel("./data/top250.xlsx", col_names = TRUE));head(movie_excel)
```

手动输入：

```R
mydatatxt<-"name gender age
张三 M 20
李四 F 23
"
```

批量合并的 excel 和 CSV 代码

```R
#批量获取csv文件
library(readr)
library(dplyr)
# 设置文件夹路径
folder_path <- "F:/桌面/文件夹/"
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

#————————————————————————————————————————————————————
#批量获取xlsx文件
library(readxl)
library(dplyr)

# 设置文件夹路径
folder_path <- "F:/桌面/文件夹/"
# 获取文件夹中的所有xlsx文件路径
xlsx_files <- list.files(folder_path, pattern = "\\.xlsx$", full.names = TRUE)
# 创建一个空的列表，用于存储读取的xlsx数据
data_list <- list()
# 循环读取每个xlsx文件，并将其存储在data_list中
for (file in xlsx_files) {
  data <- read_excel(file)
  data_list[[file]] <- data
}
# 将所有数据合并到一个数据框中
combined_data <- bind_rows(data_list)
```

### 查看数据类型

```R
names(中国城市数据库)		#查看变量名对应的列数
str(中国城市数据库) 		#查看数据类型
summary(中国城市数据库)	#最大值最小值均值，只支持数值列表
summary(中国城市数据库[, c(2, 4:6)])	#查看第二列和四到六列
summary(中国城市数据库[,2:12])			#查看第二列到十二列
```

### 修改变量名

最减简单的方法——select

> 注意！我们是想把年份改成  year ，等式为 year  = 年份！
>
> 如果文件含有特殊符号，使用\`\`符号包围

```R
library(dplyr)
names(中国城市数据库)
data<-rename(中国城市数据库,year = 年份 ,GDP = `地区生产总值(万元)` ,one = `第一产业增加值(万元)`)
```

顺便提一下复杂的改名方式（ R 语言基本语法）：

```R
# 修改第一列数据的列名，修改为bb
setwd("F:/桌面/R")
中国城市数据库 <- readxl::read_excel("中国城市数据库.xlsx")
colnames(中国城市数据库)[1] <- 'bb'   
# 同理，行名修改为rownames
```

![数据库$列名是指定列变量的方式，Rstudio的很多功能还是挺好用的](/img/R语言基础2.zh-cn-20240523131432548.webp)

如果变量太长，我们不知道要修改的数据变量在第几列，请使用 `names(中国城市数据库)`，结果会展示变量名和其对应列数。

### 创建新变量

推荐使用方法一

#### 方法一

```R
d3 <- mutate(中国城市数据库,
       year = 年份/2
)
```

#### 方法二

```R
# 主要使用transform()
# 第一个参数是要操作的数据框名称
# 接下来的参数就是操作公式
# 公式左边是新变量名
# 公式右边是具体的操作
mydata <- transform( mydata,
sum = x1 + x2,
mean = (x1 + x2)/2 
)
```

#### 方法三

```R
mydata$mean <- (mydata$x1 + mydata$x2)/2 
# 新建名称为mean的变量，它是由原来的两个变量（x1和x2）取平均值后所得
mydata$empty_variable <- NULL
# 创建空白变量
```

#### 截取与添加字符

新建变量 x ,截取变量 var 第一个位置开始，长度为 4 的字符串

```R
中国城市数据库 <- 中国城市数据库 %>%
  mutate(x = substr(var, 1, 4))
# 在后面添加  
中国城市数据库2 <- 中国城市数据库2 %>%
  mutate(x = paste0(var, "_suffix"))
# 在前面添加
中国城市数据库2 <- 中国城市数据库2 %>%
  mutate(x = paste(var, "_suffix"))
```

### 数据类型转换

包括日期的转换

```R
mydata$x <- as.factor(mydata$x)
# 其他类型
as.numeric('123')
as.character(123)
as.logical(FALSE)
```

### 时间日期相关

##### 日期转换

```R
as.Date('1/15/2020', format = '%m/%d/%Y')
###(2)将字符转换成POSIXct/POSIXlt时间格式###
as.POSIXct(1472562988, origin = "1960-01-01")#日期值转换，以"1960-01-01"为起点
```

##### 日期提取

```R
library(lubridate)
# 加载lubridate包
t = "2020-11-20 01:30:29"
year(t)#提取年份
## [1] 2020
month(t)#提取月份
## [1] 11
mday(t)#提取日期是一个月中的第几天
## [1] 20
wday(t)#提取日期是一周中的第几天
## [1] 6
hour(t)#取出日期中的小时数
## [1] 1
minute(t)#取出日期中的分钟数
## [1] 30
second(t)#取出日期中的秒
## [1] 29
```

##### 日期计算

```R
# 求任意两个日期距离的天数
begin = as.Date("2016-03-04")
end = as.Date("2016-05-08")
(during = end - begin)
## Time difference of 65 days
# 求任意两个日期距离的周数和小时数
difftime(end, begin, units = "weeks")
## Time difference of 9.285714 weeks
difftime(end, begin, units = "hours")
## Time difference of 1560 hours
```

### 排序、选择与分组

#### 筛选行

```R
# 选择数据集mydata中2020年且城市id大于等于1100的数据
filter(mydata, year == 2020, cityid >= 1100)
# 排除所有数据集mydata中2020年且城市id大于等于1100的数据
filter(mydata, !(year == 2020| cityid >= 1100))
```

#### 筛选列

```R
# 去掉年份到城市id对应的列
select(mydata, -(year:cityid))
```

#### 排序

```R
# 按照GDP排序
order(中国城市数据库$$地区生产总值.万元.)
# 当变量名含有（）时，使用..替代名称被R识别
# 按照GDP降序排列
sorted_values <- sort(中国城市数据库$地区生产总值.万元., decreasing = TRUE)
```

#### 分组处理

```R
library(dplyr)
# 使用 dplyr 包进行分组计算均值
中国城市数据库 <- 中国城市数据库 %>%
  group_by(国界) %>%
  mutate(
    乡村振兴边境 = mean(乡村振兴, na.rm = TRUE),
    产业兴旺边境 = mean(产业兴旺, na.rm = TRUE),
    生态宜居边境 = mean(生态宜居, na.rm = TRUE),
    治理有效边境 = mean(治理有效, na.rm = TRUE),
    乡风文明边境 = mean(乡风文明, na.rm = TRUE),
    生活富裕边境 = mean(生活富裕, na.rm = TRUE)
  )
```

### 匹配合并

虽然 R 语言自带 merge ,和 stata 的 merge 类似，但功能更弱且只能进行一对一匹配，这里推荐使用 `dplyr` 包。

![横向](/img/R语言基础2.zh-cn-20240523131456173.webp)

![纵向](/img/R语言基础2.zh-cn-20240523131512036.webp)

```R
library(dplyr)
# 横向
dplyr::left_join(a,b,by="x1")
dplyr::right_join(a,b,by="x1")
dplyr::inner_join(a,b,by="x1")
dplyr::outer_join(a,b,by="x1")
dplyr::semi_join(a,b,by="x1")
dplyr::anti_join(a,b,by="x1")
# 纵向
dplyr::intersect(a,b)
dplyr::union(a,b)
dplyr::setdiff(a,b)
dplyr::bind_rows(a,b)

# 举例
# 按照id和year匹配城市数据和试点政策
# 如果进行局部匹配则按照索引[m,n:l]切分
merged_data <- dplyr::left_join(中国城市数据库, 智慧城市,by = c("year", "id"))
merged_data2 <- merge(中国城市数据库[,3:5], 智慧城市, by = "year", all = TRUE)
```

### 异常值处理

#### 删除重复值

```R
unique_data <- 中国城市数据库 %>%
  distinct(id, year, .keep_all = TRUE)
```

#### 数据插补

`na.rm = TRUE` 是一个参数，通常用于在对数据进行计算时指定是否移除缺失值。当 `na.rm` 参数设置为 `TRUE` 时，函数会在计算前移除数据中的缺失值；而当设置为 `FALSE` 或省略时，函数将包含缺失值并返回结果为 `NA`。

**截面插值**

```R
# 将中国城市数据库 gdp 列中的缺失值用该列的均值替代
中国城市数据库[is.na(中国城市数据库$gdp), ]$gdp <- mean(中国城市数据库$gdp, na.rm = TRUE)

# 将中国城市数据库 score 列中小于 0 的异常值替换为缺失值
中国城市数据库[which(中国城市数据库$score < 0), ]$score <- NA

# 将中国城市数据库 score 列中的缺失值用该列的均值替代
中国城市数据库[is.na(中国城市数据库$score), ]$score <- mean(中国城市数据库$score, na.rm = TRUE)
```

**面板插值**

参考 stata 的[插值命令](https://blog.huaxiangshan.com/zh-cn/posts/data/#4%E6%8F%92%E5%80%BC%E6%B3%95)，在 R 中找到了相似的插入方法

```R
library(dplyr)
library(zoo)
# 设置数据框为面板数据，按照 id year 分类，对“地区生产总值.万元.”进行插值
中国城市数据库_new <- 中国城市数据库 %>%
  arrange(id, year) %>%
  group_by(id)
# 内插
中国城市数据库_new <- 中国城市数据库_new %>%
  mutate(地区生产总值.万元. = na.approx(地区生产总值.万元.))
# 外插
中国城市数据库_new <- 中国城市数据库_new %>%
  mutate(地区生产总值.万元. = na.approx(地区生产总值.万元., method = "constant"))
```

#### 缩尾处理

参考 [R语言与Stata等价命令-statar](https://www.lianxh.cn/details/1228.html)，使用 `statar` 包。

将超过特定范围的值，替换为特定范围边界对应的值。

```R
library(statar)
statar::winsorize(v, probs = c(0.01, 0.99))

# R也可以线算数据分布，然后根据数据分布删除
# 计算百分位数
quantiles <- quantile(中国城市数据库2$R.D内部经费支出.万元., probs = c(0.01, 0.99))

# 替换极端值
中国城市数据库2$R.D内部经费支出.万元.[中国城市数据库2$R.D内部经费支出.万元. < quantiles[1]] <- quantiles[1]
中国城市数据库2$R.D内部经费支出.万元.[中国城市数据库2$R.D内部经费支出.万元. > quantiles[2]] <- quantiles[2]
```

#### 数据删除

删除空白值，问卷不适用值。

由于 stata 一次性只能操作一张表，所以都是在一张表上增减，但是 R 语言支持多张表操控，所以实际上是通过**截取合适数据形成一张新的表**来达成筛选目的。

```R
# 删除为2020年年份的对应行，删去第5列，第10列
中国城市数据库_new <- 中国城市数据库[中国城市数据库$year != "2020", -c(5, 10)]

#使用循环函数
# 创建一个包含需要插值的变量名的字符向量
var <- c("var0", "var1", "var2", "var3", "genshin")
# 循环遍历每个变量名
for (i in var) {
  # 删除变量中的特定值
  data <- subset(data, !(data[, i] == -88 | data[, i] == -99 | is.na(data[, i]) | data[, i] <= 0))
}
```

## 绘图

这里参考《[统计软件](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/index.html) R》 [李东风老师](https://www.stat-center.pku.edu.cn/zxry/zxjy/ldf/1227393.htm)写的电子讲义。

[个人数据来源](https://github.com/Mounment/R-Project/blob/master/%E7%BA%A2%E9%85%92%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/wineQualityReds.csv)

Ggplot 2 就是分治画图，所以语法组成就是
$$
步骤1(指定数据库，指定坐标轴)+步骤2(指定图像类型)+图像3(装饰)+组合4(......)
$$
Ggplot 2 的作图一般步骤为：

- 准备数据，一般为数据框，且一般为长表，即每个观测时间占一行，每个观测变量占一列。
- 将数据输入到 `ggplot()` 函数中，并指定参与作图的每个变量分别映射到哪些图形特性，比如映射为 x 坐标、y 坐标、颜色、形状等。这些映射称为 aesthetic mappings 或 aesthetics。
- 选择一个合适的图形类型，函数名以 `geom_` 开头，如 `geom_point()` 表示散点图。图形类型简称为 geom。将 `ggplot()` 部分与 `geom_xxx()` 部分用加号连接。到此已经可以作图，下面的步骤是进一步的细化设定。
- 设定适当的坐标系统，如 `coord_cartesian()`, `scale_x_log10()` 等。仍用加号连接。
- 设定标题和图例位置等，如 `labs()`。仍用加号连接。

这个流程的一个大致的模板为：

```R
library(ggplot2)
p <- ggplot(data=<输入数据框>,
  mapping=aes(<维度>=<变量名>,
    <维度>=<变量名>, <...>))
p + geom_<图形类型>(<...>) + 
  scale_<映射>_<类型>(<...>) +
  coord_<类型>(<...>) +
  labs(<...>)
```

### 散点图与折线图

感觉语法上确实不如 stata 简洁好用（

- `geom_point()`: 散点，同理，加折线图就是 `geom_line()`
- `geom_smooth()`: 拟合线
- `scale_x_log10`：横坐标以 10 为低对数化
- `color = quality` 按照 `quality` 变量分组填充颜色
- ` facet_wrap(~ quality)` 按照 `quality` 变量进行切片分组，也可以变成 `（a~b）`，就是二维分组。也可以使用 `facet_grid(行变量 ~ 列变量)`。

```R
setwd("F:/桌面/R")
testdata <- readr::read_csv("wineQualityReds.csv")
names(testdata)
library(ggplot2)
# qplot快速画图
qplot(x=chlorides , y=chlorides , data=testdata, geom = "point")

# ggplot画图
p <- ggplot(data = testdata,
            mapping = aes(
              x = residual.sugar,
              y = chlorides,
              color = quality,
              fill = quality))
p1 <- p + geom_point() + geom_smooth(method = "loess") + 
  scale_x_log10(labels = scales::dollar) +
  labs(
    x = "横坐标",
    y = "纵坐标",
    title = "test标题",
    subtitle = "随便找的数据",
    caption = "数据来源: github"
  )+  facet_wrap(~ quality)
print(p1)
ggsave(filename="文件名.png")
```

![散点图加拟合线](/img/R语言基础2.zh-cn-20240523131531461.webp)

![切片以后](/img/R语言基础2.zh-cn-20240523131547470.webp)

### 条形图

```R
# 使用数据集计数
数据集 <- 原始数据集 |>
  select(分类变量) |>
  count(分类变量) |>
  mutate(比例值 = n / sum(n))


p<-ggplot(数据集, aes(
    x = 分类变量
	y = n, #也可以改成比例值
    fill =religion #不同分类不同颜色 ))
    
p+geom_col()
 +labs(y = "纵坐标名字")
 +guides(fill = "none") #是否取消图例
 + coord_flip() #x轴和y轴互换
 + geom_col(position = "stack") #堆叠
 +facet_grid(A ~ B) #切片分组
   

```

内部再分组的条形图

```R
df3 <- gss_sm |>
  select(bigregion, religion) |>
  group_by(bigregion, religion) |>
  summarise(n = n(), .groups="drop_last") |>
  mutate(ratio = n / sum(n)) 

p <- ggplot(df3, aes(
    x = bigregion, 
    y = n,
    fill = religion)) 
p + geom_col()
```

![内部再分组的直方图](/img/R语言基础2.zh-cn-20240523131606940.webp)
### 直方图

```R
# midwest是ggplot自带数据库
# 直方图
p <- ggplot(midwest, aes(x = area))
p + geom_histogram()
# 核密度图
ggplot(midwest, aes(
  x = area, 
  color = state,
  fill = state)) +
  geom_density(alpha = 0.3) #alpha = 0.3设置透明度
#直方图加核密度
ggplot(midwest, aes(x = area)) +
  geom_histogram(
    mapping = aes(y = ..density..), 
    alpha = 0.6) +
  geom_density(size = 1.1)
```

![加上核密度线后的直方图](/img/R语言基础2.zh-cn-20240523131624349.webp)
### 箱型图

```R
# 只用更换 ggplot(数据库,aes(分类x,目标y))
p <- ggplot(midwest,aes(state,area))+
  stat_boxplot(geom = 'errorbar',width=0.3,cex=1)+ #errorbar
  geom_boxplot(cex=1)+
  labs(x=NULL)+
  theme_classic(base_size = 18)+
  theme(panel.border = element_rect(size = 1,fill = 'transparent'),
        legend.position = 'none',
        axis.text = element_text(color = 'black')) #主题调整
p
```

![midwest是自带数据库](/img/R语言基础2.zh-cn-20240523131646647.webp)

### 词云

```R
library(wordcloud2)
wordcloud2(demoFreq)
```

![wordcloud2包自带的数据库](/img/R语言基础2.zh-cn-20240523131701808.webp)
### 相关系数热力图

参考 [R语言绘制相关性热图](https://zhuanlan.zhihu.com/p/458889477)

```R
# 加载包      
library(ggcorrplot)    
cormtcars <- round(cor(mtcars), 3) #round()函数自定义小数点后位数
ggcorrplot(cor(cormtcars)) 

# 默认是方形，修改为圆形显示，并标上相关系数
ggcorrplot(cormtcars,method = "circle",lab=T)

# 使用ggcorrplot包的cor_pmat()函数计算p值：
pmtcars <- cor_pmat(mtcars)
ggcorrplot(cormtcars,hc.order = T,  #分等级聚类重排矩阵
           ggtheme = ggplot2::theme_void(base_size = 15), #主题修改
           colors = c("CornflowerBlue","white","Salmon"), #自定义颜色，看自己喜欢，或是参考好看的文献Figure用法。
           lab = T,lab_size = 5,    #相关系数文本字体大小
           tl.cex = 15,             #坐标轴字体大小
           p.mat = pmtcars,         #添加显著性信息
           sig.level = 0.01,        #显著性水平
           pch = 4,                 #不够显著的色块进行标记，pch表示选择不同的标记方法，可以尝试其他数字表示什么标记方法
           pch.cex = 10)            #不显著标记的大小，使用insig = "blank"将不显著的空白处理

```

![相关系数热力图](/img/R语言基础2.zh-cn-20240523131720601.webp)

### 气泡图

```R
# 设置工作环境
setwd("F:/桌面/R")
中国城市数据库 <- readxl::read_excel("中国城市数据库.xlsx")
# 加载包
library(ggplot2)
library(dplyr)
# 修改数据库名字
names(中国城市数据库)
str(中国城市数据库)
data<-rename(中国城市数据库,year = 年份 ,GDP = `地区生产总值(万元)` ,one = `第一产业增加值(万元)` ,id=`行政区划代码`)
data <- mutate(data,
             pro = substr(id, 1, 2), #拆卸字符，cityid前两位代表省份
             lgone=log(one,base=10)  #对数化
)
# 画图
p<-ggplot(data[1:400,],
          mapping =aes(
              x=year, 
              y=GDP, 
              size=lgone, #气泡大小权重
              color = pro,#线条颜色分组，根据省份分组
              fill = pro))#填充颜色分组，根据省份分组
p+ geom_point(shape=21,colour="black",alpha = .5)+geom_smooth(method = "loess", aes(group = pro))
```

![气泡图](/img/R语言基础2.zh-cn-20240523131735035.webp)

### 图片合并

推荐阅读[目前最全的R语言-图片的组合与拼接](https://cloud.tencent.com/developer/article/1515198)

#### 加载包和绘图

```R
#加载绘图包
library(ggplot2)
library(ggprism)
library(reshape)
library(ggpubr)
#数据
df <- data.frame(A = c(1, 2, 3, 4, 5, 6, 8, 12, 13),
                 B = c(1, 2, 4, 5, 7, 10,5,6,8),
                 C = c(1, 5, 6, 7, 8, 9, 10, 11, 13),
                 D = c(1, 2, 5, 8, 10, 13,5,8,6))

df1=melt(df)
colnames(df1)=c("group","value")


# fig.1
p1<-ggplot(df1,aes(x=group,y=value))+
  stat_boxplot(geom = "errorbar", width=0.1)+
  geom_boxplot(aes(fill=group), 
               outlier.colour="white")+
  geom_jitter(width = 0.2)+
  theme_prism(palette = "candy_bright",
              base_fontface = "plain",
              base_family = "serif",
              base_size = 16,
              base_line_size = 0.8, 
              axis_text_angle = 45)+
  scale_fill_prism(palette = "candy_bright")+
  theme(legend.position="none")
p1


# fig.2
p2<-ggplot( df1, aes(x = group, y=value,color=group,fill=group) ) +
  geom_bar(stat="summary",fun=mean,position="dodge")+
  stat_summary(fun.data = 'mean_sd', geom = "errorbar", width = 0.3)+
  labs(x="Samples",y=NULL)+
  theme_prism(palette = "candy_bright",
              base_fontface = "plain",
              base_family = "serif",
              base_size = 16,
              base_line_size = 0.8, 
              axis_text_angle = 45)+
  scale_fill_prism(palette = "candy_bright")+
  theme(legend.position="none")
p2


# fig.3
p3<-ggplot(df1, aes(x = group, y=value,fill=group))+
  geom_violin(trim = T,position = position_dodge(width = 0.1))+
  geom_boxplot(alpha=1,outlier.size=0, size=0.3, width=0.2,fill="white")+
  stat_summary(fun="mean",geom="point",shape=21, size=2,fill="blue")+
  labs(x="Samples",y=NULL)+
  theme_prism(palette = "flames",
              base_fontface = "plain",
              base_family = "serif",
              base_size = 16, 
              base_line_size = 0.8,
              axis_text_angle = 45)+
  scale_fill_prism(palette = "candy_bright")+
  theme(legend.position = 'none')
p3


# fig.4
p4<-ggplot(df) +
  geom_segment(aes(x=A, xend=A, y=0, yend=B), color="grey",size=1) +
  geom_point( aes(x=A, y=B,color=A), size=4 ) +
  theme_prism(palette = "pearl",
              base_fontface = "plain", 
              base_family = "serif",
              base_size = 14,
              base_line_size = 0.8, 
              axis_text_angle = 45) +
  theme(legend.position = "none") +
  ggtitle("Lollipop Chart")
p4
```

#### 组合图片

```R
# cowplot包
cowplot::plot_grid(p1,p2,p3,p4,ncol = 4)

# gridExtra包

gridExtra::grid.arrange(p1,p2,p3,p4,                        layout_matrix=rbind(c(1,2),c(3,4)))#将图形分割为4个区域，上面两个放置图1与图2，下面两个区域则放置图3与图4

gridExtra::grid.arrange(p1,p2,p3,p4,                      layout_matrix=rbind(c(1,2,3,4)))#横向排列

gridExtra::grid.arrange(p1,p2,p3,p4,                    layout_matrix=rbind(c(1),c(2),c(3),c(4)))#纵向排列
```

![2*2的分割](/img/R语言基础2.zh-cn-20240523131750366.webp)

## 计量

推荐包，知乎大佬@ [包寒吴霜](https://zhuanlan.zhihu.com/p/281150493)开发的 `bruceR` 包，开发目的还是为了取代 spss !我经常看大佬关于回归的文章分享，在大佬看来，经济学的回归只是一般/广义/多层线性模型的特殊变形。

> 由于 R 语言主要是生物医学统计在用，主流的 R 包三线表和经济学的三线表要求并不相同。

### 描述性统计和输出

#### 描述统计

```R
library(bruceR) 
head(mtcars) #R自带数据
mtcarsdemo <- mtcars[c("mpg", "disp", "hp", "drat", "wt", "qsec")] 
Describe(mtcarsdemo, digits = 2, file = "describe") 
# digits表示小数点保留位数
# 将结果输出到word
```

![输出效果](/img/R语言基础2.zh-cn-20240523131811114.webp)

#### 相关性分析

大佬开发的包真是恐怖如斯！简短优雅还高效！

还是继续用 `Describe` 命令

```R
library(bruceR) 

Describe(mtcarsdemo, #数据集
	digits = 2, 	 #小数点
	plot = T, 		 #画图功能
	upper.triangle = T, #右上角的散点图
	upper.smooth = "loess") #拟合线，如果是lm为一次，loesss是二次
```

![bruceR的相关性分析，第一次使用时我惊呆了！](/img/R语言基础2.zh-cn-20240523131825614.webp)
### 回归和 word 输出

#### 回归

- `robust="HC1"`: 稳健性模式设置，HC 1 就是 stata 中的 `reg y x,r`
- `cluster="stratum"`: 和 stata 相同， cluster 是层次聚类解决自相关
- `family=binomial`: 是否二项回归

```R
regress(Temp ~ Month + Day + Wind + Solar.R, data=airquality, robust=TRUE)
regress(case ~ age + parity + education + spontaneous + induced,
        data=infert, family=binomial, robust="HC1", cluster="stratum")
```

#### 回归输出

`bruceR` 包是将 reg 的三线表输出并入到了广义多层次回归中， 

下面两个回归代码是等价的：

```R
# 代码一：
lm2 = lm(Temp ~ Month + Day + Wind + Solar.R, data=airquality)
model_summary(lm2, robust="HC1")
# 代码二：
regress(Temp ~ Month + Day + Wind + Solar.R, data=airquality, robust=TRUE)
```

所以通过 `lm` 模型来输出回归结果：

```R
library(bruceR) 
head(airquality) #自带数据库
names(airquality)
lm1 = lm(Temp ~ Month + Day, data=airquality)
lm2 = lm(Temp ~ Month + Day + Wind + Solar.R, data=airquality)
model_summary(lm1)
model_summary(lm2, robust="HC1")
model_summary(list(lm1, lm2), file="OLS Models.doc")
```

![回归结果](/img/R语言基础2.zh-cn-20240523131847113.webp)
