# The conceit of economics: some recent thoughts





> Some recent reflections from my studies. They come from classes, the internet, and conversations with teachers, classmates, and senior students. I am especially grateful for my recent conversations with lw; they made me feel, somehow, like I was back in middle school 😀.
> 
> Although what follows draws on classes, teachers, senior students, and things I have read online, it has all been filtered, trimmed, reorganized, and commented on according to my own preferences. It does not fully represent anyone else's real view. If there are mistakes, they are mine.

<font color="#ff0000">One thing I want to stress: data, methods, and ideas support each other. There is no real contradiction among them. The problem is simply that it is rare to do all three well at once.</font>
# <center>The conceit of economics</center>

I very much agree with what my elementary-school classmate cj once said: for any discipline, **we do not choose it because we already love it; we study it deeply, begin to see what is remarkable about it, and only then fall in love with it** [^7]. There is something subtle buried deep in every field. It is not that a discipline naturally attracts us from the start. Study simply gives us a firmer basis for judgment, and the world begins to look a little different.

Still, I am glad I chose economics. Among the humanities and social sciences, economics offers relatively complete academic training. Analytically, an economics paper is a three-part hybrid: `social-theory analysis` + `mathematical simulation and modeling` + `statistical empirical testing`. Its insights try to move toward politics and history, its rigor appears as equations, and its arguments are polished through statistics.

Even if someone started out in the humanities, economics still makes it possible to engage, in a relatively coherent way, with knowledge such as:

- Mathematics: measure theory, functional analysis, real analysis...
- Computer science: text processing, image recognition...
- Statistics: econometrics and causal inference
- Other humanities fields: philosophy, history, literature, sociology, political science...

Today, positivism has become the dominant scientific fashion. Leaving aside the hegemony of theory, economics has used econometric methodology to build an even sturdier empire: quantitative history, quantitative sociology (above all in demographic questions), economic anthropology...

That has also brought many problems: the overuse of mathematics, a relative lack of theoretical ideas, blurred disciplinary boundaries, uneven training programs, and a shortage of practical usefulness...

There are also some **awkward trends** right now:

### <center>❓Prediction or parable?❓</center>

Economics once treated prediction as its mission, but the causal-inference paradigm in econometrics is built on conditional expectations and on using exogenous events to test causal relationships. That makes genuine prediction very hard.

Can religion predict? Can experience predict? Both existed before economics. Their job was explanation, not prediction.

Stepping back, what people really want is to sort out causal relationships among variables and then combine them with reality to make predictions. But because reality is complicated and models are abstract, or simply too neat, empirical econometrics cannot truly settle theoretical disputes.

I have also heard another view: all of econometrics is preparing for a giant world model. Each empirical paper analyzes only one tiny variable, but if you stack enough papers together, they begin to describe the whole world.

Even when a theory is provisionally falsified, we can always say it was due to **the limits of the data, the limits of statistical methods, or the limits of the historical setting**.

And so the theme of causal analysis in economics moves to another level: parable. Once nobody really knows whether a theory is right or wrong, the criterion becomes suggestiveness. What is the origin of government? Social contract, collective evolutionary trends, agents, providers of public goods... The theories are countless, and many contradict each other, yet each can still be influential because each is suggestive enough.

A teacher in the history of economic thought once stressed in class that **economics is a chaos, and right versus wrong is not the most important thing**.

On the idea that economics may be, at bottom, a discipline of persuasion, see my notes on another post: [The Rhetoric of Economics](https://blog.huaxiangshan.com/en/posts/jjxxc/).

### <center>❓Mathematical methods or intellectual insight?❓</center>

Most people write economics papers that are empirical econometrics papers. One awkward fact about lower-level empirical work is this: code manipulation and mathematical understanding can be separated.

**We can call code directly without knowing the deeper mathematics at all** (as long as we at least know what kind of model is appropriate in what context). That leads to an awkward problem. If we do not push our study of mathematical statistics to the limit, the difference in output may be tiny. A graduate student who has learned 60% of the underlying logic of mathematical statistics and an undergraduate who has learned only 30% may end up with almost no technical difference in their papers.

> That is why many people question the value of the graduate core trio. The path from learning to actual use is simply too long.

So people often joke that they are just reg monkeys.

A professor in advanced econometrics once said that the frontier is no longer reduced-form work, but structural work and machine learning (the discipline's pursuit of predictive regression)[^1]. At conferences, he found that most papers hardly differed from one another. The spread of OLS is already a little frightening. In the 2023 Yau High School Science Awards, many students were already doing DID, and some high school students were even using OLG models.

So if we do not compete on mathematical statistics, do we compete on insight instead? Of course, many people have written brilliant papers with nothing more than OLS, but that is nowhere near enough now. Take Daron's representative work, [The Colonial Origins of Comparative Development: An Empirical Investigation](https://www.aeaweb.org/articles?id=10.1257/aer.91.5.1369), which helped define his 2024 Nobel recognition. It uses a relatively simple OLS+IV strategy to argue for the role of colonization. The idea is deep and highly suggestive, yet it is also heavily questioned today. At the same time, papers that combine simple methods with astonishing results usually require a gift for topic selection.[^2]

> By talent here I mean that there is too much contingency involved. We still do not have a systematic, repeatable path for it.

That is why economics has produced so much mixed Chinese-English jargon around topic selection and positioning, what people casually call idea.

Technical terms are fine, but then there is the broader academic slang:

> developing academic taste, maybe you can argue a bit here, emphasize the intuition, not novel enough, where is the contribution, the work is not clean enough, your question is getting a bit toxic, telling the story is what matters most...
> 
> My own view is that too much code-switching between Chinese and English (aside from standard abbreviations like GPT, EVA, and DID) does not make conversation clearer. Label-like words often make things less readable and less concrete.

So there are basically **three roads**:

- Compete on insight: almost mystical. If someone finishes the whole evaluation with one word like taste, there is no room left for real discussion.
- Compete on mathematical methods: stay quiet for a long time, then amaze everyone, but it is easy to collapse halfway through.
- Compete on data: everyone hides their own data and loses the spirit of open sharing. Behind that lies endless blood and sweat in data collection and cleaning. But for now, this is the most practical road.

I once saw a wonderful **metaphor**:

- Mathematical methods + intellectual insight: the path of internal cultivation, years of bitter practice, a high threshold, and no guarantee about the outcome.
- Fast-track data work + coding ability: the sword school, quicker to learn, lower threshold, and more dependent on luck.


### <center>❓How much math?❓</center>

A few questions follow naturally. What mathematics does economics need? How should one study mathematics? What place does mathematics occupy in economics? I have asked many senior students and teachers these questions, and their answers have been surprisingly similar.

**How much should you study?**

Let me draw a very broad boundary first. I do not mean everyone must study all of it. I mean the union of the mathematical backgrounds possessed by the very best scholars in the world.

It depends on your field, so it is best to decide on a direction as early as possible. The mainstream tracks are roughly micro, econometrics, and macro, and each requires a different depth of mathematics (leaving aside history of thought and classical Marxist political economy). No matter the direction, the basic undergraduate math trio needs a solid foundation. Going deeper can include measure theory, real analysis, partial differential equations, convex optimization, dynamical systems, discrete mathematics...

A more detailed ranking[^10]:

Micro theory = econometric theory > macro theory > trade > labor = development >= other applied fields, such as health and environment...

**How should you study?**

Many people try to patch an entire mathematical system just to understand one small concept. That is not realistic.[^3] Given the growing pressure of PhD applications, publishing, and the academic job market, the most practical approach is:

- **Learn by doing.** Learn econometrics through code; learn models through papers.
- **Patch as you go.** Do not try to chew through the whole mathematical edifice systematically. Read, and fill gaps along the way.
- **Understand through comparison.** Whether in software, code, or mathematics, many things overlap. Learn to compare and connect them, draw inferences, and speed up the pace of learning.

The advice from teachers and senior students is sincere, but I think it suffers from selection bias. All of those seniors had already gone through strong and demanding classroom training before they concluded that learning by doing and self-study were enough. In the language of causal inference, can their counterfactual really measure our own situation? What if a school does not offer that kind of training at all? **My own feeling is that even when the quality is poor, a school's systematic courses still serve as the first spark for self-study.**

Here is my own view:


> <center>Do not ignore the history of the discipline or the table of contents of textbooks!</center>
> 
> From my own experience, systematic patching is still the best route. When knowledge points are too scattered, they never form a real system. Even if you fill gaps by learning through use, you still may not be able to connect them. It is like having weak mathematical foundations: even after studying the graduate core trio, you end up mechanically memorizing problems and solutions. You can finish the exercises, but you do not grasp the underlying ideas, let alone use them to analyze reality. That gets the order backwards.
> 
> The trouble is that life is short, and filling everything in systematically is terribly inefficient.
> 
> My current view is this: **the history of the discipline is the spine of knowledge**. We really need a solid understanding of the history of the field, both the history of theory and the history of methods, if we want any chance of connecting the scattered points we pick up while learning by doing. Only then do we know what we have learned, what we have not, and what we still need to tackle.
> 
> Take econometrics. If we go to the library and look at well-classified textbooks, the first thing we should try to understand is not just the textbook itself, but its preface and table of contents. Why did the author organize the material in this order?
> 
> - Greene organizes econometrics by the strictness of model assumptions.
> - Wooldridge organizes it by data structure.
> - Angrist organizes it by the sequence in which counterfactual inference is introduced.
> - Hayashi unifies econometrics under the GMM framework.
> 
> The table of contents and the preface contain these masters' own understanding of the history of econometric development.
> 
> What I feel most strongly is this: <font color="#ff0000">your knowledge of the history of the field determines how deeply you understand the field itself</font>.
> 
> If I look back on my own path in learning econometrics:
> 
> At the beginning, I thought econometrics just meant least squares. After reading *The Book of Why*, I started to think that the design of econometric mechanisms stood for causal inference. At a shallow level, econometrics looked like fitting; at a deeper level, it looked like counterfactual controlled comparison.
> 
> But not until I studied advanced econometrics did I realize that the actual development of the field is a long epic:
> 
> Causal inference is philosophy (how do we construct evidence that makes us feel the result is credible?). Then comes how we understand probability (frequentism vs. Bayesian approaches, subjective vs. objective). Then statistical methods. Then econometrics as only one tradition. Then the realization that econometrics is not just OLS (there is also GMM and MLE for parametric estimation, as well as nonparametric estimation). The core is not some simple notion of fit. It is inference about the gap between sample and population. And the three major tests, LR, LM, and Wald, are not just tools; they are also ways of thinking about testing.
> 
> In the same way, understanding how economics moved from value analysis to price analysis, and how it shifted from prediction tasks[^9] to causal-analysis vignettes, also affects the way we judge the discipline itself.
> 
> Students who studied mathematics as undergraduates and then economics in graduate school often understand the nature of economics very differently from students who studied economics at both stages. Your sense of disciplinary history shapes your sense of what economics even is.
> 
> Great teachers abroad often weave this kind of disciplinary awareness into the classroom. In China, by contrast, even getting a course that goes beyond reading the textbook aloud is already a privilege largely reserved for top schools.
> 
> For example, in Daron's *Microeconomics*, although it is still an introductory book, the preface does not emphasize that economics *is* optimization. Instead, it says that people are always <font color="#ff0000">trying</font> to optimize. And because optimization is constrained by current knowledge and methods, he can introduce causal inference almost seamlessly in his presentation of microeconomics!


The mathematical turn is obvious, yet domestic political economy[^4] has not developed much. From the perspective of disciplinary history, my own feeling is that economics internationally has advanced on three fronts at once: conceptual revolution, intellectual revolution, and methodological revolution. Domestic political economy, by contrast, has had only ideological change[^5], without a revolution in disciplinary concepts or methods.

It is like the example Wang Xiaobo once discussed. Some people always insist that *Dream of the Red Chamber* contains everything, and even future things that have not yet appeared must still be explained with that same framework. If they want to spend a lifetime buried in it, fine. But when they start making noise about using it to guide science, that becomes a problem. (**This is entirely my own interpretation. I am only borrowing Wang Xiaobo's criticism of Redology and guoxue as an analogy here.**)

People talk endlessly about mathematics in economics. Almost every master's or PhD student in economics will post on social media about their emotional journey through the graduate core trio, yet very few talk about training the depth of reading required in the humanities and social sciences. **Keep reminding yourself: do not neglect the cultivation of reading depth.**

- If you work in classical Marxist political economy, what comparative advantage do you have over students in Marxism departments?
- If you become a pure math fanatic, what comparative advantage do you have over students in mathematics departments?
- If you do pure historical analysis, what comparative advantage do you have over students in history departments?
- If you do pure statistical analysis, what comparative advantage do you have over students in statistics departments?

Those questions offer one way to think about how statistics, mathematics, and pure theory fit together.

Mathematics is a tool behind economics' comparative advantage. It should be actively used and grasped through intuitive descriptions of economic phenomena and through analytical tools. It deserves respect, but not blind worship.

As students, we should gradually work out a style of combination that suits us, plan our own learning path, and avoid blindly trying to master everything.

### <center>❓On innovation in papers❓</center>

From the Nobel Prizes of recent years, not only in economics but in the natural sciences too, it seems that there are basically no great masters left who found entirely new schools of thought.[^8] Everyone is making marginal contributions. It really is as my econometrics teacher said: when nobody is enlarging the circle, survival only gets harder.[^11]

So what about the graduate core trio? In truth, it is only the entry ticket to research. Real theory still requires catching up with the field on top of that training. Why bring up the graduate core trio again? Because I once saw a heated discussion on Zhihu:

[Do you need to understand all the mathematical principles in advanced econometrics to do research? - Zhihu](https://www.zhihu.com/question/328665578)

In strong field journals, difficult as it is, people can still publish by relying mainly on data and topic selection.

In the top five journals, though, publishing without deep theory is impossible.[^6]

Where does the marginal innovation of a paper mainly come from?

My own answer is that marginal contribution can be roughly divided into:

1. **Econometric theory** (reduced-form models)
2. **Mathematical models** (structural models)
3. **Data organization and mining**
4. **Expansion of the research object**: my teacher has repeatedly stressed to me that papers that only address one case on its own terms are relatively low-level topics, because the paper merely clarifies a single case. I would place that under a lower-level form of expanding the research object. But expansions also have levels. Labor economics expanded from the individual to the family. Interdisciplinary work, such as complexity economics on disequilibrium, behavioral economics on non-rationality, and digital economics on non-material economic activity, can also be seen as expansions of the research object. And if you can discover a phenomenon at all, that is already impressive. People argue endlessly about it, but concepts like the digital economy have undoubtedly kept many people employed. Staying alive matters.
5. **Explaining phenomena** (theory of regularities):

	**First, discovering regularities.** In a lecture, an editor from *World Economy* stressed the importance of explaining phenomena, and my teacher also emphasized that what matters in a paper is the distillation of regularities. See [What makes a good paper? Criterion one: reasoning from a case vs. talking only about the case](https://mp.weixin.qq.com/s/FqgNMMD-HI0qkfrCBCMbfg). Another way people put it is that everyone's topics are equally bad, but good professors know how to package a topic and elevate the angle, which really means having the eye to spot the regularity behind the phenomenon. The more you can see the larger pattern in something small, the rarer the talent.
	
	**Second, testing regularities.** Use data to test two **mutually contradictory** theories. This helps highlight the real-world significance and interest of the paper.
	
{{< admonition type=abstract  title="Social science and science" open=false >}}

A scientific question: **is theoretical science invented, or discovered**?

At the level of theory, both natural science and social science seem to begin with the recognition of regularities.

The key is what regularity we recognize from what phenomenon.

I can derive different regularities from the same phenomenon, and I can also extract the same regularity from different phenomena.

{{< /admonition >}}

	
6. **Identification strategy** (the logic of regression design): this means designing clever regressions and comparison experiments that identify otherwise unobservable elements and offer more people new ideas for research design. Examples include linking patent data to innovation, nighttime-light data to development, and using distant historical factors as instrumental variables.

I am especially fond of the paper [God's Audit: Home-Town Connections and Building Damage in the Sichuan Earthquake](https://www.yimingcao.com/uploads/6/5/6/3/65630513/earthquake4.pdf). Using earthquake data, it finds that when local officials had hometown ties to their superiors, the buildings they oversaw were 75% more likely to collapse than buildings without such ties.[^13] That suggests we can **use natural disasters to measure construction corruption**.

For other examples, see:

[Empirical Economics: Intuitive Does Not Equal Obvious](https://blog.huaxiangshan.com/zh-cn/posts/fs2/)

Items 1 and 2 test mathematical foundations; item 3 tests sheer workload; items 4, 5, and 6 test economic intuition. Papers in the top five journals have to survive tests of foundations, workload, and intuition all at once.

These reflections also draw on [Empirical Economics: Notes on Refereeing](https://blog.huaxiangshan.com/zh-cn/posts/sg/).

As for the direction of great papers, I increasingly feel that both papers and disciplines are moving toward convergence. From classical economics to the neoclassical synthesis, macro and micro have been moving toward each other, and papers are similar. Macro research needs micro foundations, and micro research needs macro background. So I completely agree with what my econometrics teacher says: research should look from the large scale and start from the small.

### <center>❓On project management❓</center>

These days everyone talks about team play. Several of my teachers have advised students to socialize more and look for collaborators.

But teams come in different sizes. What I want to say is that even your own small projects need project management. There is an industry riddle here: how did Frant Gwo go from *My Old Classmate* to *The Wandering Earth*? The mainstream answer is project management. China has had plenty of money, so why did it fail for so long to produce a true AAA game? The mainstream answer is market size and project management.

Think about how to optimize your own code so that your data-cleaning scripts become more reusable. Once you know commands like `program`, `local`, `global`, and `forvalues`, there are actually plenty of fancy things you can do in Stata.

When working with big data, the whole cycle of splitting, merging, and passing files around is full of project-management traps. If a team lacks mature management experience and process control, communication and information transfer can be terribly inefficient. If a team has already handled large-data projects, that experience is genuinely valuable. I suppose that is what industry standards look like.
### <center>❓Personal reflections❓</center>

I look up to the high mountain and the open road. I may never reach them, but my heart is still drawn in that direction.

In the current environment, the higher you look, the easier it is to fall into despair. Stratification is getting sharper, age limits harsher, and people our age abroad are growing faster and faster. The internet helps, but many ideas still cannot really be understood without face-to-face conversation. Experience outside knowledge also needs to be passed on seriously, or the gap will only widen.

Finally, as a committed existentialist, Huaxiangshan has this to say:

1. Stay alive. That matters more than anything else. I believe that anyone who is seriously drawn to academia today is already an expert at self-pressure and overwork. The internet only heightens that atmosphere. We all know how tense things feel, so in this environment we need to lighten our anxiety. Anyway, no one really has a chance to found a new school anymore 😆 (the Nobel Prizes already make that clear). Better to enjoy the process of learning, for example, the flash of joy when causal analysis suddenly changes the way you see the world.

> I had neck problems before, and only then did I realize how fragile the human body is... I have also seen senior students and classmates with injured knees or bad backs. Please, really, treasure your health. My personal suggestion is to **place the sense of achievement that comes from understanding the world above the sense of achievement that comes from producing value**. That way you will not become too anxious when you do not get enough positive feedback from visible results.
> 
> Huaxiangshan has this to say:
> 
> - You should know that most innovation today is driven by necessity rather than inner conviction.
> - It is worth asking whether you have built your standard of happiness in the shadow of the rule-makers.
> - If you are struggling for survival, the price can never be your own life itself. That would be self-contradictory.

2. One regrettable truth is that the desire to innovate is not the same as the ability to innovate. I often want to force out one huge breakthrough all at once, but that is impossible. A good paper is very likely revised from a bad paper. If the most important thing is to uncover the regularity behind a phenomenon, then the quality of the first phenomenon you think of does not determine the quality of the final theory. Action and experimentation come first. Active communication[^12] comes second. Third comes optimism and the work of cultivating a broad, upright spirit. If those ever come into conflict, <font color="#ff0000">we have no reason not to follow the third</font>🥰. Social science should preserve a moral vision that stays ahead of its time.
3. Curiosity about the world is where all research begins. Do not stake 100% of life on a narrow sheet of paper. **Curiosity about the world is the motive force of science. Beyond that, it is also a form of love and affirmation toward the world. Because we love it, we want to understand it. Because we understand it, we love it even more.**


[^1]: I still believe economics needs interpretability more than it needs the black box of machine learning. I also agree more with the view that economics tries to analyze phenomena rather than predict events. Prediction is only a by-product of analyzing phenomena.
[^2]: Is not pulling off a clever stunt its own kind of talent? Think about viral Bilibili videos: everybody knows the meme, but some people can combine simple material in a way that makes you stop and look.
[^3]: I only mean that it is unrealistic in the domestic context.
[^4]: Here I mean socialist theory.
[^5]: In my own view, there has not been a major ideological revolution after Deng Xiaoping. Deng broke through the development path of public ownership plus planning, and combined public ownership with the market economy. Later theories about the essence of socialism all build on that summary.
[^6]: There is also an enormous amount of blood and sweat behind it. The amount of work that goes into the robustness section of a top-journal paper is hard to imagine.
[^7]: Most people make their choice before they really understand the discipline.
[^8]: I keep thinking of what my advanced econometrics professor said in class: nobody is trying to make the cake bigger anymore.
[^9]: Personally, I think prediction is too complicated a task for economics to shoulder on its own.
[^10]: This ranking comes from a Zhihu answer by Professor Shi Zhentao.
[^11]: Either a master appears and enlarges the discipline's circle, or a technological explosion enlarges the circle of life.
[^12]: I do not mean academic exchange alone. Heart-to-heart conversations with close friends are also good medicine for mental health.
[^13]: Faking a paper like this is usually expensive.

