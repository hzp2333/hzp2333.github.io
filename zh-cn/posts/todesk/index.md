# Todesk 平板远程控制电脑的声音问题


{{< music netease song 2155423467>}}

>个人目前**最新串流方案**是 moonlight，试过的各种串流方案评价放在结尾。

最近终于换上了游戏本。考虑到我一般会背着电脑到处跑，我选了性价比游戏本中续航最强重量最轻的天选 3[^1]。

但终究失算了，适应了一段时间后还是觉得太笨重，于是决定采用平板远程控制的方法。

远程控制有很多方案：

Todesk、向日葵、Teamviewer、RustDesk、Parsec......

> 速度、便利、画质，Todesk 都是第一（Parsec 更好，但链接需要外网支持），虽然免费版没有防窥屏，但放寝室里压根没人关注我的电脑屏幕 (

个人控制：华为 matepad 柔光版+ Todek +天选 3 酷睿版

这里主要介绍如何开启声音远程传递。

## 电脑端

需要有声卡驱动协议把电脑声音传递到控制端。

如果没有声卡驱动，创建如下 `.text` 文档，输入代码后修改为 `.bat` 结尾然后运行。

```react
@echo off

pushd "%~dp0"

dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt

dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt

for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"

pause
```

然后启动声音调用：

 打开运行窗口，在运行窗口中输入 gpedit.msc 命令，点击确定按钮

![输入gpedit.msc命令](/img/Todek远程控制.zh-cn-20240523134253440.webp)

打开编辑界面

![打开本地组策略编辑器界面](/img/Todek远程控制.zh-cn-20240523134313370.webp)

在菜单栏中，依次选择【计算机配置】-【管理模板】-【所有设置】选项。
![选择配置](/img/Todek远程控制.zh-cn-20240523134330911.webp)
滑动右侧的页面，找到允许音频和视频播放重定向选项，单击右键，选择编辑选项

![找到允许音频和视频播放重定向选项](/img/Todek远程控制.zh-cn-20240523134530406.webp)
启动允许音频和视频播放重定向。

![选择启用](/img/Todek远程控制.zh-cn-20240523134555054.webp)
## 平板端

点击控制页面右下角的**展开箭头**

![键盘符号左侧的展开键](/img/Todek远程控制.zh-cn-20240523134617698.webp)

点击打开声音，打开成功后，对应键变成关闭声音

**如果切换平板页面后回来没声音了，就关闭声音再开启。**

![开启和关闭声音](/img/Todek远程控制.zh-cn-20240523134632726.webp)
## 注意事项

- 开启声音传递后，**即便电脑静音，控制处依旧有声音**，且声音大小调整由控制设备操控。
- 由于平板一般都没有听筒，声音都默认外放。
- 我使用的蓝牙耳机链接平板，有时外放有时能通过耳机播放。据我观察，应该是要**先连接耳机和平板，然后远程控制**，声音才会通过耳机传导而不是外放。

## 串流方案简评

- 华为：在天选上刷了个华为管家，进去里面的设置可以开启远程控制，在华为手机、平板的 `智慧连接` 里可以找到远程控制。**包含隐私屏，速度不错，不支持游戏鼠标，画质比较低，相当于 todesk 多了个隐私屏**。

- 华硕：需要微软账号个人版，个人是家庭账号，用不了。

- [Parsec](https://parsec.app/downloads): **画质高、延迟低、支持游戏，没有隐私屏幕、搭建简便（只需要设备登录软件时挂梯子）**。应该是一般情况下的最优解——然而华为平板不兼容，鼠标滚轮和声音播放会失效。

- [Moonlight](https://github.com/moonlight-stream) + [sunshine](https://github.com/LizardByte/Sunshine): parsec 的平替方案，而且针对 steam 做了优化，旮旯串流终极方案。美中不足是校园网每次随机分配 ip 还得重新设置一下。个人目前在用的就是这个方案。还有个缺点就是——偶尔声音还在卡顿一下，**鼠标优化也比较差**，在 `moonlight` 中修改成适合远程的鼠标有用，但是此时不再适配游戏[^2]。

[^1]: 4060 配置，基本锁定暗影精灵 9，联想 y 7000，天选 3 中选一个。
[^2]: 例如原神、星穹铁道这类隐藏鼠标的游戏，启用这个功能玩游戏时将失去鼠标转向功能。
