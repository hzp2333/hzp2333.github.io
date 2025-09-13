# anaconda 的卸载与安装


在第二次 anaconda 崩溃后，我又知道了为什么大家如此推崇 vscode 和 pycharm 作为 python 的实践 ide。但是个人还是比较欣赏将浏览器作为 ide 的想法，比起 notebook，个人更偏好使用 jupyter，因此决定在此把整个安装流程重新做一遍。

## 卸载 anaconda

打开 ` anaconda prompt` , 下载并运行卸载命令。

> 作用是清理 Anaconda 的配置文件和环境设置。

```
conda install anaconda-clean
anaconda-clean --yes
```

接下来打开以前安装 anaconda 的文件夹，运行卸载软件 `Uninstall-Anaconda3.exe`。例如我的位置是在 `D:\anaconda\anaconda`。

![如图](/img/Pytorch2.zh-cn-1757765821937.webp)

## 安装

在[官网](https://www.anaconda.com/download/success)下载一个，一路安装下载。

安装好后在电脑高级环境设置加入 `path`：前面的就是自己的安装路径。

```
D:\anaconda\anaconda
D:\anaconda\anaconda\Scripts
D:\anaconda\anaconda\Library\bin
```

![如图](/img/Pytorch2.zh-cn-1757766371428.webp)

## Jupyter 快捷键和工作路径

为了便于启动，先创建快捷方式指向 `jupyter`。

在` anaconda prompt` 输入 `where jupyter-lab` 即可知道位置。然后网络寻找对应的图标 `.ico`。推荐[网站]( https://icon-icons.com/search/icons/jupyter?utm_source=chatgpt.com "111") 下载。

![如图](/img/Pytorch2.zh-cn-1757767740739.webp)
接下来设置工作路径，也就是 `jupyter` 默认打开的文件夹。

在 ` anaconda prompt` 输入指令创建设置：

```
jupyter notebook --generate-config
```

接下来找到生成的设置文件 `C:\Users\<你的用户名>\.jupyter\jupyter_notebook_config.py`。

在里面搜索 `notebook_dir`。修改成自己想要的目录：
`c.ServerApp.notebook_dir = 'D:\PyTorch_practice'`。

## Pytorch 环境配置

为了进行深度学习，需要先下载 cuda，然后配置好 pytorch 可以运行的环境。

参见 [CUDA 下载](https://blog.huaxiangshan.com/zh-cn/posts/pytorch/#cuda-%E4%B8%8B%E8%BD%BD)。重点在于，记得在下载时配对好对应的 cuda 版本和 pytorch 版本。例如我下载的是 12.4 版本的 cuda，但是由于 pytorch 最新版还没有适配 cuda12.4，我选择下载适合 12.1 版本 cuda 的 pytorch 环境进行使用。

接下来打开 `anaconda prompt` 进行环境配置。

虽然最新的 python 是 3.13，但是最兼容的版本是 3.11。接下来开始创建 jupyter 环境：

### 指定 python 版本，d 盘统一管理环境。

```
conda config --remove pinned_packages python
```

```
conda create -p D:\anaconda_envs\MLGPU python=3.11 -y
```

### 转移到对应的环境，安装 pytorch 相关包：

```
conda activate MLGPU
```

```
conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia -y
```

### 一些个人常用的 python 包：

> - 分批安装，不然容易冲突卡顿。（表现是任务管理器 python 长时间磁盘占用为 0 但是下载没有结束。）
> - 
> - 以后下载也要注意减少 pip 和 conda 的混用。混用本身并不影响，但是当包多了可能引起环境崩溃。
> - 下载 python 可以适当关闭火绒等防护软件，这些软件会减少磁盘写入速度。



```
conda install -y scikit-learn statsmodels networkx igraph -c conda-forge --verbose

conda install -y matplotlib seaborn plotly -c conda-forge --verbose

conda install -y openpyxl xlrd xlwt python-dateutil  -c conda-forge --verbose

conda install -y tqdm -c conda-forge --verbose

pip install aquarel

pip install jieba
```

### 注册 jupyterlab 内核

```
conda install -y jupyterlab -c conda-forge

jupyter lab

pip install ipykernel

python -m ipykernel install --user --name=MLGPU --display-name "Python (MLGPU)"
```

## Jupyter 插件和外观

中文插件下载（需要在 base 环境中运行下载）

```
pip install jupyterlab-language-pack-zh-CN
```

个人推荐的插件：

- [variableInspector](https://github.com/jupyterlab-contrib/jupyterlab-variableInspector): 可以点开看当前代码对应的数据属性。
- [execute-time](https://github.com/deshaw/jupyterlab-execute-time)：查看当前代码运行时间记录。
- [upyterlab-lsp](https://pypi.org/project/jupyterlab-lsp/)：自动补全代码。

个人比较喜欢的主题插件：

> 当然需要暗黑模式。

[jupyterlab_stellars_sublime_theme](https://github.com/stellarshenson/jupyterlab_stellars_sublime_theme)

![如图](/img/Pytorch2.zh-cn-1757780750775.webp)

[jupyterlab_stellars_sublime_theme](https://github.com/stellarshenson/jupyterlab_stellars_sublime_theme)


![如图](/img/Pytorch2.zh-cn-1757780923229.webp)

[jupyterlab_ariakedark_theme](https://github.com/eduardotlc/jupyterlab_ariakedark_theme)

![如图](/img/Pytorch2.zh-cn-1757780848834.webp)








