# Batch Convert TIF to Excel in arcGIS


>This article records detailed operational steps for easy reference in the future.
>
>However, after quickly going through it, I realized that the era seems to have shifted from ArcMap to Pro...
>
>The great winds of life blow out the spirit of the world, only the old can see the destruction within...

In my article on [Creating GIS Color Maps in Stata](https://blog.huaxiangshan.com/zh-cn/posts/statagis/), I introduced the commonly used SHP file type in GIS. In simple terms, the basic structure of GIS data needs to include three elements: coordinates, unique identifiers, and measurement values. Here, I will explain how to extract sectional Excel data files for administrative regions from administrative boundary map files and TIF map files.

{{< mermaid >}}
graph TD; 
0(Get Map Files)==>1(Main Map File .Shp); 
0(Get Map Files)==>11(Main Line File .Shp);
0(Get Map Files)==>3(Table File .dbf); 
1(Main Map File .Shp)==Translate==>2(Map Outline Data);
11(Main Line File .Shp)==Translate==>9(Map Line Data);
3(Table File .dbf)==Translate==>4(Label File); 
5(Data Analysis File)==>6(Matching File); 
4(Label Data)==>6(Matching File); 6(Matching File)==ID Identifier==>7(Drawing); 
2(Map Outline Data)==ID Identifier==>7(Drawing); 
9(Map Line Data)==ID Identifier==>7(Drawing)
{{< /mermaid >}} 

# Simple Guide to GIS

Official Tutorial: [arcGIS Help](https://pro.arcgis.com/zh-cn/pro-app/latest/help/main/welcome-to-the-arcgis-pro-app-help.htm)

As commercial software, ArcGIS is actually very user-friendly. Similar to Excel, once you understand the layout, you can grasp the basic usage.

![Software Illustration](/img/arcGIS.zh-cn-20240923153250443.webp)

- As shown, the far left is the file area for viewing working files.
- Moving right is the tool list, which contains various tool functions to help us process data files, so just follow the prompts to operate.
- Further right is the layer management.
- The far right is the drawing preview area, where you can see the image by placing GIS files.

# GIS Batch Processing

## Point Data to Polygon Data

Economic data analysis generally involves panel data for provinces, cities, and counties. GIS files are image files and can be viewed as point set data, while administrative panels are block-like and represent polygon data. Therefore, our processing approach is to calculate the average value of point data in the administrative area and then export it.

Partitioning through administrative boundary SHP files.
Using the `Spatial Analyst` - `Zonal Analysis` - `Zonal Statistics as Table` function to connect the data map and administrative boundary map, calculating the mean within the administrative area.

![img](/img/arcGIS.zh-cn-202409231543)
