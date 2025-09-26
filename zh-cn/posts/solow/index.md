#  Solow 模型 matlab 模拟代码


> “一旦你开始思考（经济如何增长）这个问题，就无法再思考其他问题了。"
> 
> ——罗伯特•卢卡斯（Robert E. Lucas）
## Solow 模型的思想

1987 年诺贝尔经济学奖获得者罗伯特·默顿·索洛（Robert Merton Solow）于 2023 年 12 月 21 日去世，享年 99 岁。本博客的写作契机是为表达纪念[^1]。

![图源：wiki 百科](/img/solow.zh-cn-20250309205914362.webp)

虽然索洛模型的假设比较严格[^2]，如今已经让位给后面的模型，但他开创了新古典“经济增长”的分析范式，其结论产生的“**全要素生产力**”（索洛余值）成为了当代经济体最重要的评价指标（之一）。

其思想框架是，

1. 将经济增长（产出）的贡献分解为几个基本要素：劳动、资本、技术进步、人口增长......
2. 经济增长的过程就是要素变化的过程，我们可以尝试刻画要素增长的动态过程。
3. 要素的动态变化存在收敛，从没有收敛走向收敛的要素时间变化图，就是一个经济体的平衡增长路径。

$$\dot{k}=f(k)$$

例如上面这个式子，简单来说，就是刻画人均资本**增长率**（$\dot{k}$）和**人均**资本**存量**（${k}$）的关系。

**收敛**意味着人均资本增长到一定水平后，增长率很难继续增加，反而趋近于 0。表现在式子中就是： $△k=0=\dot{k}=f(k)$。

> 就像马尔萨斯人口陷阱，人均收入变高，人们富裕了，更容易生育，人口增多，人均收入就下降；人均收入下降，人们变穷了，会减少生育，人口变少，人均收入又上升。这个拉拉扯扯，让人均收入**趋于稳定**的过程，就是人均收入和人均收入变化率互相牵制的过程。
> 
> Solow 模型在这之上进行了更多的分解。
> 
> - 起点低，进步速度可能更快；起点高，进步速度可能更慢。
> - Solow 模型想解释的是“低收入国家的发展速度早期大于高收入国家”这个现象。例如二战以后，战后的亚洲国家迎来了发展的黄金时期。战后大家偏好储蓄，这也启发 solow 假设储蓄率外生。
> - Solow 模型的收敛性后面也启发了学者讨论高收入国家和发展中国家的经济水平是否会趋于一致。可参考另外一篇博文《 [收敛：从“算式的极限”到“增长的极限”](https://blog.huaxiangshan.com/zh-cn/posts/shounian/)》

这里主要是介绍其 matlab 绘图代码，就不具体展开数理证明了。
更具体的索洛模型解释可以参考：

- [ 索洛模型 (Solow Model)](https://blog.econfinny.com/2024/11/17/solow-model/)
- [中级宏观经济学 | 第 3 讲：索洛增长模型](https://mp.weixin.qq.com/s/fhhiaZrmlYW70oibSTagWA)
- [高级宏观经济学笔记（ Romer 版）](https://zhuanlan.zhihu.com/p/613416303)

{{< admonition type=note  title="做题家的速通" open=false >}}
Solow 模型两个核心稳态：

稳态求解：
$$
\dot{k}=sf(k)-(n+\delta)k=0
$$


黄金率求解：

$$
f^{\prime}(k_{\mathrm{gold}})=n+\delta
$$

{{< /admonition >}}
## Matlab 收敛图

![如图，经济体的人均资本 k 会收敛与图中的交叉点|585](/img/solow.zh-cn-20250302213518789.webp)

代码绘图分为四个部分：

1、设置参数：原始人均资本、折旧率、储蓄率、技术进步率、全要素增长率、人口增长率、时间期数、资本投入弹性。

```matlab
t=100; % 期数
kmax=200; % 每个工人的资本最大值
alpha=0.3; % 资本投入对产出弹性
s=0.5; % 储蓄边际倾向
n=0.02; % 人口增长率
d=0.01; % 资本折旧率
A0=2; % 全要素生产率
K=1:kmax; % 每个工人的资本水平（横轴）
```

{{< admonition type=note  title="参数争议" open=false >}}
很多时候，宏观模型中最富有争议的地方是参数。数学模型的改进、微观数据的实证证据、统计方法、对要素作用的认识都会影响参数值的范围。
{{< /admonition >}}

2、设置函数：
 $$f(k)=Ak^\alpha$$
  $$\dot{k_t}=sf(k_t)-(n+g+d)k_t$$
```matlab
for k1=1:kmax % 沿着横轴循环计算对应的函数值
y(k1,1)=A0*(k1^alpha); % 总生产函数
sy(k1,1)=s*y(k1,1); % 实际投资
nd(k1,1)=(n+d)*k1; % 所需投资
end
```




3、收敛条件：
自然就是 $\dot{k_t}=sf(k_t)-(n+g+d)k_t=0$。所以下面代码的逻辑是比较 `sy(k1,1)` 和 `nd(k1,1)`。不相等时，则根据大于小于符号增加或减少人均资本 $k$。

{{< admonition type=bug  title="包含人口增长、技术进步且离散的情况" open=false >}}
在此处，我们将资本运动方程设置为 $\dot{k_t}=sf(k_t)-(n+g+d)k_t$ ，根据其正负性设置 k 加一或者减一。

实际上在考虑离散情况时，最精确的表达式子为：

  $$\dot{k_t}=\frac{sf(k_t)-dk_t}{1+g+n}$$
  也就是：
    $${k_{t+1}}=\frac{sf(k_t)+(1-d)k_t}{1+n+g}$$
均衡条件意味着 ${k_{t+1}}={k_{t}}$，代入化简，在均衡收敛时才可以简写成 $0=\dot{k_t}=sf(k_t)-(n+g+d)k_t$，但在非均衡（$\dot{k_t} \neq 0$）时，将运动方程写成 $\dot{k_t}=sf(k_t)-(n+g+d)k_t$ 是不严谨的。
{{< /admonition >}}

{{< admonition type=note  title="宏观：python 还是 matlab " open=false >}}
对于经济学来说，R 语言和 matlab 都快被 python 打败了。R 语言还有的优势是顶刊的统计学家会优先开发 R 语言包。

Matlab 和 stata 一样，目前尚占据主流是因为大部分论文代码给的文件是 `.m` 和 `.do`。随着模型越来越复杂，python 在**优化代码**，**调整算法**进行计算方面具有更大优势。我在网上看到不少做宏观模型的新研究者开始从 matlab 转向 python 来优化计算过程。
{{< /admonition >}}

```matlab
if sy(k1,1) > nd(k1,1) % 根据微分方程的结果判断
k1=k1+1;
elseif sy(k1,1) < nd(k1,1)
k1=k1-1;
end
```

4、绘图代码

举例子：

```matlab
scatter(K,y, '.'); %绘制人均资本（横轴）和函数值
```

完整代码如下

```matlab
%% solow 新古典增长模型
% 一个 MATLAB 动态仿真
%% 收敛模拟
%% 原代码地址：https://github.com/DiegoCiccia/SolowGrowthModel/blob/main/solow.m
% 取消注释下列被注释的部分以比较从两个不同初始位置开始的两个经济体的收敛结果。

%%————————————参数设置部分——————————————%%

t=100; % 期数
kmax=200; % 每个工人的资本最大值
alpha=0.3; % 资本投入对产出弹性
s=0.5; % 储蓄边际倾向
n=0.02; % 人口增长率
d=0.01; % 资本折旧率
A0=2; % 全要素生产率
K=1:kmax; % 每个工人的资本水平（横轴）
y=zeros(length(K),1); % 产出数组
sy=zeros(length(K),1); % 实际投资数组
nd=zeros(length(K),1); % 所需投资数组

%%————————————式子定义部分——————————————%%

for k1=1:kmax
	y(k1,1)=A0*(k1^alpha); % 总生产函数
	sy(k1,1)=s*y(k1,1); % 实际投资
	nd(k1,1)=(n+d)*k1; % 所需投资
end

%%————————————画图部分——————————————%%

scatter(K,y, '.');
text(max(K)-20, max(y)-0.5, 'f(k)')
title('solow 新古典增长模型')
xlabel('k')
ylabel('y')
hold on
grid on
scatter(K,sy,'.')
text(max(K)-20, sy(kmax,1)+0.2, 'sf(k)')
scatter(K,nd,'.')
text(max(K)-20, nd(kmax,1)+0.2, '(n + d)k')

k1=50; % 初始资本（第一个经济体）
% k2=200; % 初始资本（第二个经济体）

for i=1:t
u=plot([k1,k1],[0,y(k1,1)], 'k--'); % 绘制当前资本对应的垂直线
drawnow
l=plot([k1,0],[y(k1,1), y(k1,1)], 'k--'); % 绘制当前产出对应的水平线
drawnow
m=plot([k1,0],[sy(k1,1), sy(k1,1)], 'k--'); % 绘制实际投资对应的水平线

drawnow
n=plot([k1,0],[nd(k1,1), nd(k1,1)], 'k--'); % 绘制所需投资对应的水平线
drawnow
delete(u); % 删除垂直线
delete(l); % 删除水平线
delete(m); % 删除实际投资水平线
delete(n); % 删除所需投资水平线
o=text(mean(K),mean(y),['t = ', num2str(i)]); % 显示当前周期

drawnow

delete(o); % 删除显示的周期文本
% u=plot([k2,k2],[0,y(k2,1)], 'b--'); % 绘制第二个经济体当前资本的垂直线
% drawnow
% l=plot([k2,0],[y(k2,1), y(k2,1)], 'b--'); % 绘制第二个经济体当前产出对应的水平线
% drawnow
% m=plot([k2,0],[sy(k2,1), sy(k2,1)], 'b--'); % 绘制第二个经济体实际投资对应的水平线
% drawnow
% n=plot([k2,0],[nd(k2,1), nd(k2,1)], 'b--'); % 绘制第二个经济体所需投资对应的水平线
% drawnow
% delete(u); % 删除垂直线
% delete(l); % 删除水平线
% delete(m); % 删除实际投资水平线
% delete(n); % 删除所需投资水平线

if sy(k1,1) > nd(k1,1) % 根据微分方程的结果判断
	k1=k1+1;
elseif sy(k1,1) < nd(k1,1)
	k1=k1-1;
end

% if sy(k2,1) > nd(k2,1) % 第二个经济体的微分方程结果判断
% k2=k2+1;
% elseif sy(k2,1) < nd(k2,1)
% k2=k2-1;
% end

if i==t
plot([k1,k1],[0, y(k1,1)], 'k--') % 最后一次绘制第一个经济体的资本垂直线

drawnow
plot([k1,0],[y(k1,1), y(k1,1)], 'k--') % 最后一次绘制第一个经济体的产出水平线

drawnow
plot([k1,0],[sy(k1,1), sy(k1,1)], 'k--') % 最后一次绘制第一个经济体的实际投资水平线

drawnow
plot([k1,0],[nd(k1,1), nd(k1,1)], 'k--') % 最后一次绘制第一个经济体的所需投资水平线

drawnow
% plot([k2,k2],[0, y(k2,1)], 'b--') % 最后一次绘制第二个经济体的资本垂直线

% drawnow
% plot([k2,0],[y(k2,1), y(k2,1)], 'b--') % 最后一次绘制第二个经济体的产出水平线
% drawnow
% plot([k2,0],[sy(k2,1), sy(k2,1)], 'b--') % 最后一次绘制第二个经济体的实际投资水平线
% drawnow
% plot([k2,0],[nd(k2,1), nd(k2,1)], 'b--') % 最后一次绘制第二个经济体的所需投资水平线
% drawnow

	end

end

text(mean(K),mean(y),['t = ', num2str(t)]) % 显示最终周期
```

## Matlab 相图：不同初始资本

比较两个经济体，其他参数都相同，只有**初始人均资本** $k_1$ 不同（收敛方向不同）。

在给定的参数中， solow 模型的人均资本会收敛于 149.8 的水平。因此一个国家的处初始人均资本高于这个值，就会下降；低于这个值，就会上升。

![如图](/img/solow.zh-cn-20250303112806996.webp)

```matlab
%% Solow 新古典增长模型示例
% 1. 两个初始值的资本收敛曲线
% 2. 相图：\dot{k} 与 k 的关系 (含箭头标识方向)
% 此处我沿用上一个章节代码设定的参数

clear; clc; close all;

%% =============== 参数设置 ===============

t = 400; % 模拟总期数
alpha = 0.3; % 资本产出弹性
s = 0.5; % 储蓄率
n = 0.02; % 人口增长率
d = 0.01; % 折旧率
A0 = 2; % 全要素生产率
kmax = 250; % 资本显示范围（根据模拟结果动态调整）

%% =============== 不同初始值的收敛模拟 ===============

k1_init = 100; % 经济体1初始资本
k2_init = 200; % 经济体2初始资本

% 预分配

k1 = zeros(t+1,1);
k2 = zeros(t+1,1);
k1(1) = k1_init;
k2(1) = k2_init;

% 迭代更新资本水平

for i = 1:t
	k1(i+1) = k1(i) + s*A0*(k1(i)^alpha) - (n+d)*k1(i);
	k2(i+1) = k2(i) + s*A0*(k2(i)^alpha) - (n+d)*k2(i);
end

% 动态调整显示范围
kmax = max([k1; k2]) * 1.1;

%% =============== 1) 绘制收敛图 ===============

figure(1);
plot(0:t, k1, 'r-', 'LineWidth', 2); hold on;
plot(0:t, k2, 'b-', 'LineWidth', 2);
xlabel('时间', 'FontSize', 12);
ylabel('人均资本 k', 'FontSize', 12);
title('资本收敛过程', 'FontSize', 14);
legend(sprintf('初始k=%.0f', k1_init), sprintf('初始k=%.0f', k2_init), ...
'Location','best');
grid on;
set(gca, 'FontSize', 10)

%% =============== 2) 绘制相图 ( \dot{k} vs k ) ===============

% 准备相图数据
k_cont = linspace(0, kmax); % 连续资本值
f_k = A0 * k_cont.^alpha; % 生产函数
sy = s * f_k; % 实际投资
nd = (n + d) * k_cont; % 所需投资
dotk = sy - nd; % 资本变化率

% 计算轨迹数据
dotk1 = s*A0*k1.^alpha - (n+d)*k1;
dotk2 = s*A0*k2.^alpha - (n+d)*k2;

% 计算稳态值
k_star = (s*A0/(n+d))^(1/(1-alpha));
figure(2);

% 1) 绘制相图主曲线
plot(k_cont, dotk, 'k-', 'LineWidth', 2); hold on;

% 2) 绘制稳态线
plot([0 kmax], [0 0], 'k--', 'LineWidth', 1);

% 3) 绘制稳态标记
plot(k_star, 0, 'mo', 'MarkerSize', 10, 'MarkerFaceColor', 'm')

% 4) 绘制轨迹点
plot(k1, dotk1, 'r.-', 'MarkerSize', 12, 'LineWidth', 2);

plot(k2, dotk2, 'b.-', 'MarkerSize', 12, 'LineWidth', 2);

% 5) 添加轨迹箭头
arrow_step = 20; % 箭头间隔步长

% 经济体1箭头
for i = 1:arrow_step:length(k1)-1
	quiver(k1(i), dotk1(i),...
	k1(i+1)-k1(i), dotk1(i+1)-dotk1(i),...
	0, 'Color', 'r', 'MaxHeadSize', 1.5, 'LineWidth', 2)
end

% 经济体2箭头
for i = 1:arrow_step:length(k2)-1
	quiver(k2(i), dotk2(i),...
	k2(i+1)-k2(i), dotk2(i+1)-dotk2(i),...
	0, 'Color', 'b', 'MaxHeadSize', 1.5, 'LineWidth', 2)
end

% 6) 图形标注
title('相图: 资本动态变化', 'FontSize', 14);
xlabel('人均资本 k', 'FontSize', 12);
ylabel('资本变化率 $\dot{k}$', 'Interpreter', 'latex', 'FontSize', 12);
legend('$\dot{k} = s f(k) - (n + \delta)k$',...
'稳态线 ($\dot{k}=0$)',...
sprintf('稳态 k* = %.1f', k_star),...
'经济体1：k初始值100',...
'经济体2：k初始值200',...
'Location','best', 'Interpreter', 'latex');
grid on;
set(gca, 'FontSize', 10)
xlim([0 kmax])
```

## Matlab 冲击图：不同储蓄率

当代宏观的 DSGE 核心图是展示要素受到冲击后的变化图。

Solow 模型假设储蓄率是外生的，下面这个代码是假设初始储蓄率是 0.4。在初始人均资本为 6 的情况下，后面储蓄率被调整为了 0.5。

最后计算的分别是人均资本、人均产出、人均产出增长率（产出取对数然后一阶差分 $\log y_t-\log y_{t-1}\approx\frac{y_t-y_{t-1}}{y_{t-1}}$）、人均消费。

![第10期时储蓄率进行了调整](/img/solow.zh-cn-20250302234730892.webp)


```matlab
clear all
clc
%%————————————参数设置部分——————————————%%

alpha=0.5; % 资本产出弹性
delta=0.1; % 折旧率
g=0.05; % 技术进步率
n=0.02; % 人口增长率
s=0.5; % 储蓄率（外生）

k_ss=(s/(delta+g+n))^(1/(1-alpha)); % 稳态求解

T=1000;

kt(1)=6; % k人均资本初始值
yt(1)=kt(1)^alpha; % y人均产出初始值
ct(1)=(1-0.4)*yt(1); % c消费初始值,solow 模型假设储蓄外生，这里是一开始的储蓄率0.4

%%————————————函数设置部分——————————————%%

for j = 2:T
kt(j) = (s * kt(j-1)^alpha + (1 - delta) * kt(j-1)) / (1 + g + n);
yt(j)=kt(j-1)^alpha;
ct(j)=(1-s)*yt(j);
end

%%————————————画图部分——————————————%%

tt=120;
t=1:tt+10;

subplot(4,1,1) % 划分四行一列，在第一行画图
plot(t,[kt(1)*ones(1,10) kt(1:tt)],'-','LineWidth',2);
% kt(1)*ones(1,10) 是认人为使用初始数据填充了前10个点
hold on % 保存当前图像并继续绘图添加绘图
plot(t,k_ss*ones(1,tt+10),'--','LineWidth',2)
grid on % 打开网格
xlabel('k_{t}')
axis([1 130 5 9]) % 分别对应x和y轴的最小值和最大值范围

subplot(4,1,2)
plot(t,[yt(1)*ones(1,10) yt(1:tt)],'-','LineWidth',2);
hold on ; grid on
plot(t,k_ss^alpha*ones(1,tt+10),'--','LineWidth',2)
xlabel('y_{t}')
axis([1 130 2 3])

subplot(4,1,3)
gy=diff(log(yt(1:tt+1))); % 取对数的然后一阶差分
plot(t,[zeros(1)*ones(1,10) gy],'-','LineWidth',2);
hold on ; grid on
plot(t,zeros(1,tt+10),'--','LineWidth',2)
xlabel('gy_{t}')
axis([1 130 -0.01 0.025])

subplot(4,1,4)
plot(t,[ct(1)*ones(1,10) ct(1:tt)],'-','LineWidth',2);
hold on ; grid on
plot(t,(1-s)*k_ss^alpha*ones(1,tt+10),'--','LineWidth',2)
xlabel('c_{t}')
axis([1 130 1 1.6])
```

[^1]: 博客标签已经有 stata、python、R 了，这里添加一个 matlab。
[^2]: solow 模型假设储蓄外生，且是单部门模型，这些成为后来模型的优化点。

