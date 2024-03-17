# [anaconda报错解决]anaconda bytes object has no attribute get


今天运行anaconda突然无法打开启动界面，但可以直接打开并运行jupyter和notebook。报错情况如下图所示。

![看这个的话，我也看不太明白](/img/v2-c0461ce9ac788c3fe409b1cf1c7dff3d_720w.png)

网上常用解决方法都没起效，但这里还是列举一下

-   升级安装包，

```python
conda update navigator
conda update anaconda-navigator

conda update conda
conda update --all
```

-   删除文件

> 删除`.condarc`文件（一般在C盘、用户、当前用户中）。

网络上没有和我相同的情况，最后我是打开**anaconda powershell prompt**看到了具体问题，是路径识别出现问题。

![虽然只露出个J，我还是察觉到了是java(](/img/v2-476787b0744665f6ef8864da337300e5_720w.png)

原因是Windows环境变量冲突：我的用户变量path和环境变量path设置冲突，不一致。导致在用户变量的anaconda被识别到了系统变量的Java环境。

![解决方法：统一用户变量和系统变量、或者删除java路径](/img/v2-a640242f7bfc731fbbf8dea3f717372f_720w-17106790388694.jpeg)

解决方法：统一用户变量和系统变量、或者删除java路径。这里个人是因为**无效的path路径挡路了**。个人删除了Java的错误路径：`%Java\_Home%\bin;%Java\_Home%\jre\bin`。之后检验Java环境没受到影响，anaconda环境也恢复了。


