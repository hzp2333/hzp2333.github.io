# Stata绘制Gis着色图


{{< music url="/music/spacewalk.mp3" name=SpaceWalk artist=hoyo-mix cover="/images/xingqiong.jpg" >}}

估计每个经济学学习者都向往过掌握全套统计语言的自己——Python机器学习与爬虫，Stata计量回归，R绘图和文本分析，Gis遥感与着色，Matlab解均衡模型和仿真实验。不过人的精力终究还是有限的，个人决定先尝试用Stata实现其他语言的优势项目，例如stata:[爬虫学习](https://blog.huaxiangshan.com/zh-cn/posts/pachong/)。

今天这里记录的是用Stata画Gis着色图的过程。

## 获取地图文件

`ESRI Shapefile`文件是由[美国环境系统研究所](https://www.esri.com/en-us/home)开发的空间地理数据。里面同时储存空间位置和特征数据。其基本文件主要为：

- **主文件 (.shp)：** 存储几何要素的的空间信息，也就是 XY 坐标。
- **索引文件 (.shx)：** 存储有关 .shp 存储的索引信息。它记录了在 .shp 中，空间数据是如何存储的，XY 坐标的输入点在哪里，有多少 XY 坐标对等信息。
- **表文件 (.dbf)：** 存储地理数据的属性信息的 dBase 表。

这里介绍写我找到的一些数据源：

- [大饼的博客](http://gaohr.win/site/blogs/2017/2017-04-18-GIS-basic-data-of-China.html)
- [全国地理信息资源目录服务系统](https://www.webmap.cn/main.do?method=index)
- [GADM data](https://gadm.org/data.html)
- [github随手找到的中国地图数据](https://github.com/GaryBikini/ChinaAdminDivisonSHP)
- [中科院地资所](https://www.resdc.cn/Default.aspx)

如果还找不到自己想要的，可以使用阿里云地图来生成地图文件。

进入[阿里云地图](http://datav.aliyun.com/portal/school/atlas/area_selector)，点击文件下载（推荐其他下载，下载后得到`.json`文件）。

下载好后进入[转化器](https://mapshaper.org/)转化。点击`Select`，上传`.json`文件，然后点击`export`导出转化后的文件。

>似乎是因为数据编码或者加密，有时候转阿里云地图化的文件无法被stata读取。

## stata读取

包含`主文件 (.shp)`和`表文件 (.dbf)`即可。

```sql
ssc install shp2dta, replace   //文件转化命令
ssc install mif2dta, replace  //文件转化命令
ssc install spmap, replace  //GIS画图命令
```

可以从[城市统计年鉴局部数据](https://github.com/hzp2333/ChinaAdminDivisonSHP/blob/master/citydata.dta)下载我给出的例子数据。

没下载成功随便找个全国城市统计年鉴数据也是一样的。

找一个地方下载中国城市地图数据，我找到是[这里](https://github.com/GaryBikini/ChinaAdminDivisonSHP/tree/master)。

```sql
cd F:\桌面\statagis 
*设置工作环境文件夹，因为gis一些命令参数使用相对路径更好用些

 shp2dta using city, database(city_标签) ///
        coordinates(city_坐标) genid(_ID)
        
*database和coordinates分别对应文件转化后的新文件名称
*genid是定义数据文件袋索引值名称——每一个地点的代表编
*要保证city_坐标和city_标签的索引编码名称相同

*有时候由于地图标签数据解码后有中文，需要重新编码一下，使用以下代码
unicode encoding set gb18030
unicode analyze city_标签.dta   
unicode translate city_标签.dta 

*编码完成后将我们要可视化的数据和city_标签匹配到一起
use "F:\桌面\statagis\citydata.dta"
rename city ct_name
merge m:n ct_name using "F:\桌面\statagis\city_标签.dta"
drop _merge 
save "F:\桌面\statagis\citydata2019.dta", replace
*这里因为有些城市名不一样没匹配上，例如地图数据是北京市，但年鉴数据是北京城区
```

## 绘图命令

开始绘图，基本绘图命令如下

```sql
replace year =2019 if year ==.
*这里只是保证没有残缺值
spmap pop_hu using city_坐标 if year == 2019 , ///
id(_ID) fcolor(Blues)
```

![2019年城市统计年鉴户籍人口(部分数据)默认风格](/img/image-20240322212843739.png)

```sql
clear
use "F:\桌面\statagis\citydata.dta"
rename city ct_name
merge m:n ct_name using "F:\桌面\statagis\city_标签.dta"
drop _merge 
replace year =2019 if year ==.
keep if year == 2019
save "F:\桌面\statagis\citydata2019.dta", replace

#d ;
spmap pop_hu using "city_坐标.dta" ,id(_ID)  
  ndfcolor(red)         
  clmethod(eqint) clnumber(5) eirange(4 3000)                      
  title("中国城市户籍人口2019", size(*0.8))         
  subtitle("城市统计年鉴" "局部数据 ", size(*0.8))                       
  legstyle(2) legend(region(lcolor(black)));                       
#d cr

```

![数值残缺为红色](/img/image-20240322220602075.png)

更多建议参考[Stata绘图：绘制二维地图](https://www.lianxh.cn/details/984.html)

不过文章中的气泡图我并没有看太明白怎么画出来的。

## 地图使用规范

[自然资源部关于印发《公开地图内容表示规范》的通知](https://www.gov.cn/gongbao/content/2023/content_5752310.htm)

[规范使用地图 一点都不能错](http://politics.people.com.cn/n1/2022/0830/c1001-32514471.html)

省流：

- 使用省份地图，街道乡镇地图还行，使用我国整体的地图是比较麻烦的。
- 在使用我国整体地图时，比例画幅要求严格，领土问题是关键，香港、澳门、台湾、海南，九段线也不能缺！
- 不能出现军工等机密数据的标注。

