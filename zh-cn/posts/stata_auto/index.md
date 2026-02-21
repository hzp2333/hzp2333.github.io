# 双剑合璧：VScode 与 Stata 


当 ai 打败柯洁时，人们依旧认为 ai 离自己的事业很遥远，正如柯洁看到 ai 打败李世石时的年少轻狂。直到 2026 年，实证学习者们才开始围绕 ai 建立一种"自动化"的恐惧。

最近 David Yanagizawa-Drott 教授启动了智能体实证分析项目（[APEP 项目](https://ape.socialcatalystlab.org/)）；陶哲轩建立了智能体对 Erdős 数学问题集贡献的项目（[AI contributions to Erdős problems](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)）。计算机领域热词也层出不穷——agent、skill、vibecoding、mcp、ABM model......[^1]

就具体研究而言，再比如两个具体例子[^2]：
- 《[A dataset on the spatiotemporal distributions of street and neighborhood crime in China](https://www.nature.com/articles/s41597-025-04757-8)》：使用 LLM 提取裁判文书刑事案件的变量。
- 《[Decoding China's Industrial Policies](https://www.nber.org/papers/w33814)》: 使用 LLM 对海量政策进行编码解析。

不严谨的概括:让 ai 成为一个（具备某些特点的）操控主体（agent），能操控自己电脑上的软件（mcp 能力），也就完成了一种自动化编程流程（vibecoding）。结合 ai 的 api 和 vscode 插件。这里我们可以建立一个粗糙的环境简单体验一二。

## 让 ai 操控软件

最简单的集成版本—— [cusor](https://cursor.com/)、[claudecode](https://code.claude.com/docs/zh-CN/overview)[^5]。

但是我们也可以通过 VScode 实现 all in one。

需要以下软件：

- Vscode：代码编写环境
- Git：版本控制，文件传输管理
- Node.js：可以写后端、操作文件、控制硬件。
- cc Switch： 调用集成 ai 的 api。

针对国内环境，推荐参考以下视频：

{{< bilibili BV19vc5zUEeQ>}}

当实现以后，就可以在 vscode 中调用 ai 的 api 直接操作编辑页面。

> 若是第一次使用 vscode, 操作记得先建立一个新文件夹，然后打开 vscode, 点击文件，打开新建的对应文件夹，剩下的就是在其中操作了。

## 进一步加入 stata 插件

当你完成上一步操作后，你完全可以调用 ai 服务帮你开展其他设置操作😀。

![插件名称](/img/Stata_auto.zh-cn-1771516675297.webp)

我个人推荐在 vscode 中下载这几个 stata 插件。

- Stata language：识别 stata 语法
- Stata Outline：让代码能识别大纲，标题格式为 `**#`。有几个 `#` 就是几级标题，最多六级标题。
- Stata MCP：核心，让 vscode 具备控制 stata 的能力。

需要的额外设置也很简单，只需要在 stata MCP 的设置页面输入自己安装 stata 的文件夹目录：

例如我的就是 `D:\stata`。我使用的是 stata MP 版本[^3]。

![自己安装 stata 的文件夹目录](/img/Stata_auto.zh-cn-1771516985076.webp)

Statamcp 插件会让页面出现以下按键，其实就对应着 stata 的运行。

![按键](/img/Stata_auto.zh-cn-1771517247069.webp)

运行如图：

> 提示词：修改完善代码，基于sysuse auto进行一个实证分析。加入代码大纲层次，** # 为标题格式。 # 有几个代表几级标题，最多六级标题。

![运行界面](/img/Stata_auto.zh-cn-1771517125007.webp)

David Yanagizawa-Drott 教授的项目，就是在这个基础上，进一步让 ai 拥有调用公共大数据 api、tex 文件编辑、r 语言分析的能力。

> 可惜的是，stataMCP 是完全在 vscode 中操控 stata。如果想将 vscode 直接作为 do 文件的执行阅读器，且连接桌面上的 stata 执行，似乎目前没有非常优雅的联动方案。


## 集成在其他编辑器上

同样，当你完成第一部——配置好 claude 调用 deepseek 的 api 后，你也可以在其他编辑器上实现同样的操作。例如 `obsidian`。

BRAT 是 Obsidian 用于安装测试版插件的工具。

1. **安装 BRAT：**
    
    - 在 Obsidian 设置中，前往 **Community plugins**（第三方插件） -> **Browse**（浏览）。
        
    - 搜索并安装 **BRAT** (Beta Reviewers Auto-update Tester)。
        
    - 安装后点击 **Enable**（启用）。
        
2. **添加 Claudian 仓库：**
    
    - 打开 **BRAT 插件设置**。
        
    - 点击 **Add Beta plugin**。
        
    - 在弹出窗口中输入 GitHub 地址：`YishenTu/claudian`。
        
    - 点击 **Add Plugin**。


我个人喜欢让其翻译本博客中文文档，适配英文版本。

## 推荐 api？

### Api 平台

个人觉得国内 api，deepseek 的性价比最高。

如果想要免费的，个人推荐 [GLM](https://bigmodel.cn/)，注册就送模型 token[^6]。

现在注册[硅基流动](https://siliconflow.cn/)也送 50+16 元的代金券。

![GLM 注册送的资源包。不过我两天就用得差不多了。](/img/Stata_auto.zh-cn-1771587415799.webp)

### 基于 api 消费数据看 llm 市场

最近已经有论文利用 api 提供市场进行分析。典型的就是国内也可以用的 [OpenRouter](https://openrouter.ai/)。

![OpenRouter用户数据总体可视化做得相当不错，可以在上面参考现在的消费者主要用什么模型，做的任务主要是什么](/img/Stata_auto.zh-cn-1771695202842.webp)

NBER 最近有篇论文爬取了 OpenRouter 网站的数据进行市场分析:

《[The Emerging Market for Intelligence: Pricing, Supply, and Demand for LLMs](https://www.nber.org/papers/w34608)》

最让我印象深刻的是下面这几个图：

![图片显示了过去六个月内发布的模型性能分布，该分布基于智能指数(IntelligenceIndex)绘制。红线为模型智能中位数，深灰色和浅灰色阴影区域分别表示第25-75百分位数和第10-90百分位数范围。分布的扩大进一步反映了前沿领域的进步：当今表现最好的模型达到了样本中最早模型性能的约六倍。](/img/Stata_auto.zh-cn-1771695412057.webp)


![纵坐标为每百万tokens价格的对数值。在2023年中期至2024年初急剧下降之后，即使更新、更强大的模型进入市场，价格也保持相对稳定。在任何给定的时间点，最低十分位数的模型比最高十分位数的模型便宜50到150倍。](/img/Stata_auto.zh-cn-1771695452859.webp)

在 NBER 论文之前，其实 OpenRouter 团队自己就用数据做过分析，就在：

《[An Empirical 100 Trillion Token Study with OpenRouter](https://openrouter.ai/state-of-ai)》

![ 每个点代表 OpenRouter 提供的模型，按源类型着色。闭源模型趋向高成本高使用象限，而开源模型则主导低成本、高流量的区域。虚线趋势线几乎平坦，显示成本与总使用量之间的相关性有限。](/img/Stata_auto.zh-cn-1771695660257.webp)


## 安装 skills

### 安装与说明

Skills 其实就是 ai 的指导说明书，指导其在具体场合具体怎么处理。在其中添加脚本或流程就能约束模型在特定场景下的输出结果。

此时依次输入以下命令，就可以下载 claude 官方准备的 skills 包。

安装 skills 市场：


```js
/plugin marketplace add anthropics/skills
```

安装官方编写的一些 skills 包

```js
https://github.com/anthropics/skills
```

![如图](/img/Stata_auto.zh-cn-1771595992572.webp)

例如我直接将一个[经济学 skills](https://meleantonio.github.io/awesome-econ-ai-stuff/) 的 github 发给 claude 让它自己下载：

```html
https://github.com/meleantonio/awesome-econ-ai-stuff
```

![经济学skills](/img/Stata_auto.zh-cn-1771596445258.webp)

例如，这是我在下载 [obsidian 的 skills](https://github.com/kepano/obsidian-skills/tree/main) 后，让它绘制了[一篇博客文章](https://blog.huaxiangshan.com/zh-cn/posts/fs3/)的思维导图：

![如图](/img/Stata_auto.zh-cn-1771596774086.webp)


### Skill 资源

可以在以下网站寻找 skills 资源

- [Skills. Sh](https://skills.sh/) (个人推荐，也推荐参考这里面的命令统一安装 skills )
- [skillsmp.com](https://skillsmp.com/)
- [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

首先推荐个寻找 skills 的命令，安装之后明显调用 skills 更顺畅准确率。

```js
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

![下载这个skill后识别确实更加顺畅了](/img/Stata_auto.zh-cn-1771684866236.webp)

## 更深的自动化术语？

如果想要更深入地了解当今结合 ai 的自动化流程，或许可以进一步检索 vibecoding 相关术语。

对标同样的 claude code ，openai 的是 [codex](https://openai.com/zh-Hans-CN/codex/)，google 的则是 [gemini cili](https://geminicli.com/)[^7]。如今正在早期竞争阶段，各家注册福利都不少。

不过也别怕，工业革命之前还得是能源革命。现在 ai 烧钱烧资源性价比太低了，泛用注定是个大问题。但是，让人恐怖的不是 ai 的绝对值，而是进步的迭代速度，至少能让我们对变化的时代保持一种清醒。从另外一个角度讲，赛车早已超越了人类的极限，我们却依旧为百米赛跑感到刺激、恐惧、兴奋。若真如刘慈欣《诗云》那样[^4]，某种文明能排列出所有的文字组合，我们对诗歌的感受才是更重要的事情。

![漫改电影《百米》：跑得快不一定能解决所有事，但只要在100米内跑得比任何人都快，那就能解决任何事情。](/img/Stata_auto.zh-cn-1771518187683.webp)







[^1]: 深度学习，机器学习，大模型的概念区分也很微妙。说到底，智能到底是什么，这本身就是一个深刻的问题。
[^2]: 其实我觉得这类 LLM 分析，主打的就是个“力大飞砖”
[^3]: 个人永远推荐 MP 版本，能根据计算机的核灵活增加计算效率。
[^4]: 我的感慨可以参考《[无心之歌](https://blog.huaxiangshan.com/%E6%97%A0%E5%BF%83%E4%B9%8B%E6%AD%8C%EF%BC%88%E5%8F%A4%E8%AF%97%E5%88%9B%E4%BD%9C%E6%8C%87%E5%8C%97%EF%BC%89.pdf)》：AI 时代古诗创作小册子。
[^5]: openai 对应的产品为 [codex](https://openai.com/zh-Hans-CN/codex/)。
[^6]: token 烧的也快，我一个下午就烧完了送的第一个资源包。
[^7]: 甚至可以考虑让 codex 具有 mcp claude code 的能力联合拷打代码。 

