# [anaconda 报错解决]anaconda bytes object has no attribute get


今天运行 anaconda 突然无法打开启动界面，但可以直接打开并运行 jupyter 和 notebook。报错情况如下图所示。

![看这个的话，我也看不太明白](/img/anaconda.en-20240523120650966.webp)

网上常用解决方法都没起效，但这里还是列举一下

-   升级安装包，

```python
conda update navigator
conda update anaconda-navigator

conda update conda
conda update --all
```

-   删除文件

> 删除 `.condarc` 文件（一般在 C 盘、用户、当前用户中）。

网络上没有和我相同的情况，最后我是打开**anaconda powershell prompt** 看到了具体问题，是路径识别出现问题。

![看这个的话，我也看不太明白](/img/anaconda.zh-cn-20240802122011236.webp)

原因是 Windows 环境变量冲突：我的用户变量 path 和环境变量 path 设置冲突，不一致。导致在用户变量的 anaconda 被识别到了系统变量的 Java 环境。

![解决方法：统一用户变量和系统变量、或者删除java路径](/img/anaconda.zh-cn-20240802115752502.webp)

解决方法：统一用户变量和系统变量、或者删除 java 路径。这里个人是因为**无效的 path 路径挡路了**。个人删除了 Java 的错误路径：`%Java\_Home%\bin;%Java\_Home%\jre\bin`。之后检验 Java 环境没受到影响，anaconda 环境也恢复了。


