# Pytorch 配置报错：[WinError 126] The specified module could not be found.


现在一般都使用 pytorch 搭建神经网络。搭建需要 CUDA、python、pytorch 三合一。这里说一些安装的细节。

![图源维基百科](/img/Pytorch.zh-cn-20240813151919593.webp)

**推荐安装教程**：

本文补充的是 2024 年后视频没有强调的部分。

视频中给出的中文 pdf 比官网下载说明还要详细，因此推荐。

{{< bilibili BV1cD4y1H7Tk>}}
## CUDA 安装

### 版本匹配

注意： <font color="#ff0000">CUDA 和 pytorch 版本是一一对应的</font>，不是下载最新就行。

例如到 2024 年 7 月 26 日为止——最新版 CUDA 版本为 12.7。但 pytorch 并没有与之匹配的版本。

版本匹配可以在[ pytorch 官网](https://pytorch.org/get-started/previous-versions/)看。

### CUDA 下载

CUDA 官网下载后进行第一次下载地址选择。

此时下载地址是**安装包临时储存**——下载完后会删除这个文件夹。

![第一次地址选择](/img/Pytorch.zh-cn-20240813150143605.webp)

第二次自定义安装地址才是 CUDA 真正的安装地址。如果第二次地址选择和第一次相同，文件就会被删去。

![第二次地址选择](/img/Pytorch.zh-cn-20240813150252949.webp)

## Pytorch 安装

按照教程安装好后，在 python 中运行，得到如下报错：

```
 [WinError 126]找不到指定的模块。
```

![明明严格按照教程却还是报错？](/img/Pytorch.zh-cn-20240813150731276.webp)

真正原因是 WIN11 环境和 Pytorch 产生冲突。
很多 python 相关的组件报错都是同样的问题。

解决方法是下载 [visual studio](https://visualstudio.microsoft.com/zh-hans/downloads/?cid=learn-navbar-download-cta)

在里面下载 `MSVC v143-VS 2022 C++x64/x86 生成工具(最新)`。

> 英文版名字为 `MSVC v143 -VS 2022 C++ x64/x86 build tools (Latest)`

![下载组间](/img/Pytorch.zh-cn-20240813151629739.webp)


## 参考资料

- [OSError: [WinError 126] The specified module could not be found]( https://github.com/pytorch/pytorch/issues/131662 )
- [LeNet 学习笔记](https://blog.bdim.moe/zh/posts/2024-7-13/)
