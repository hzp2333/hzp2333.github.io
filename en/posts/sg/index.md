# Empirical Economics: Notes from Reviewing


> **Disclaimer**: To preserve the principle of anonymous review, the specific situations cited here are all **made up by me** and differ from the actual reviews I've written. Any resemblance is pure coincidence.
>
> Although review is anonymous, reviewers and authors often work in the same subfield, so it's easy to spot who recommended citing their own paper. Still, that's just part of the experience — no harm in it.

I recently took part in a bit of review work as training, and I noticed there isn't much about the experience shared online, so here's a record.

Recently teacher Liu Xichuan shared a good example:

[An external review report (Zhang Chuanchuan, Fu Mingwei) and the revision notes (Jin Weidong et al.)](https://mp.weixin.qq.com/s/RtYRxD6gALFNBX-kYvl9eQ)

The biggest impression is that empirical economics papers are getting more and more competitive. These journals used to focus on pure econometric empirical analysis; now they use both reduced-form and structural inference, and robustness checks add yet another econometric model. The pace of innovation in the field keeps accelerating.

Reviewing really trains you; coming up with comments is also a process of reflecting on how you'd construct a paper's framework yourself. Each time before I reviewed, my advisor would give me a few pointers — short, but always right on target. My review comments before and after reading those pointers were worlds apart. Below I'll summarize some general perspectives I've picked up.

The better a review report, the more it should show advice specific to the paper — for example, the lineage of the theory, the usual data handling, variable choice and entry point, and the endogeneity problems arising from economic significance[^2]... Most comments are best aimed at the paper's novelty, econometric design, and model handling; typos and formatting should just be mentioned in passing[^3].

## The Reviewer's Stance

I think the "scholars despise each other" mentality is still fairly strong in academia; reviewing actually requires a more generous mindset.

I'd strongly recommend reading teacher Lu Ming's views on reviewing:

[Lu Ming: On Reviewing](https://mp.weixin.qq.com/s/LllJRahhVj_Qh4uaCIdd5Q)

> The best review isn't freewheeling fault-finding; it's spotting the paper's <font color="#ff0000">feasible</font> strengths that <font color="#ff0000">the author hasn't yet noticed — the places that could be analyzed further</font>.

Reviewers have their own standards, and journals have theirs. Be careful not to let your standards casually exceed the journal's. At the same time, I think the healthiest academic market is one with less of the personally biased thinking of "this problem is uninteresting, boring, not worth studying." The best reviewing stance isn't "this is worth studying, that isn't," but "under current conditions, this or that aspect hasn't been explored enough."

Finding faults — once you know the concept of empirical endogeneity, anyone can do that. What truly tests a reviewer's ability is offering constructive suggestions that can extend the research.

## My Own Process

First I do a quick search of Chinese and English journals on the paper's topic, focusing on relevant survey articles to get a rough sense of the current state of the field. Then I look at the paper's econometric design as a whole, read it through carefully, and dig into some of the references it cites (especially those in the literature review, the theoretical citations, and the instrumental variables).

## The Opening and the Body

A review report usually consists of: an opening summary + major issues (research design, novelty, theoretical contribution...) + minor issues (typos, figure and table descriptions, clarity of figures...).

I like the following opening format:

- This paper studies the problem of xx from the perspective of xx (the relationship between xx and xx).
- Positive comments: The treatment of xx and xx is impressive. The paper contributes an xx perspective to xx. Under xx circumstances, studying xx is indeed very necessary.
- Negative comments: Although the treatment or idea of xx is excellent, in reality xxxxx, so the questions around xx and xx still raise concerns about the reliability of the econometric design and empirical results.

After the opening comes the body: list the comments in sections, one point per paragraph.

1. On the topic choice. The paper...
2. On the literature review. The paper...
3. On the reliability of the conclusions. The paper's endogeneity...
4. On some minor formatting errors. In...

Nobody likes pure criticism without suggestions. We have to remember that all research is done under constraints. We can't ask authors to solve problems that can't be solved (say, missing data or variables). So it's best, after raising a problem, to offer a solution you think is workable and worth considering. For example, on the xx problem, the author might consider xx...

## Topic Choice and Novelty

Although I don't believe in judging a paper by its cover, in practice many people look at the x and y in a title and the research subject and conclude the study is unreliable, that there's no causal relationship, or that the subject isn't worth studying. Isn't that assuming your own economic intuition overrides a paper's empirical results? Anyway, this tendency surely reflects some problems behind academia and empirical methods 😅. It also shows how important the title and abstract are[^4].

Evaluate the size and number of elements in the topic. For example, a topic that studies three elements A, B, and C at once: the relationships among three variables are just too complicated to analyze fully. You'd have to answer why these three, and what hierarchical relationship the three have.

Once, at a [journal seminar](https://blog.huaxiangshan.com/zh-cn/posts/effect/) run by The Journal of World Economy, an audience member asked the editor what kind of topic could make it into the journal. The editor answered: "<font color="#ff0000">Economic research that can discover or explain a phenomenon is the kind our editorial office likes best</font>"[^1]. Indeed, whether a phenomenon has various theories around it — progressive or contradictory — is both a way to organize the literature review and a key part of highlighting novelty: whether the paper has, through econometrics, proven or falsified a theory and explained a corresponding phenomenon.

> A side note: as theories develop further, more and more papers focus on the heterogeneity of some specific effect. But this kind of marginal innovation seems far from enough in my advisor's eyes — yet genuinely discovering a phenomenon and giving it a theoretical account is really hard!

## Literature Review

As mentioned above, **the literature review should discuss the layers and relationships of the theories around the topic**. This can be criticized on grounds of language and logic. At the same time, we can note the quantity, quality, and share of top-journal and English-language references.

Generally, a literature review highlights what previous studies have done, which literatures the paper is in dialogue with, and what newer results it obtains. Consider whether the author has really engaged with the cited literature, or whether some overlooked literature was actually already in dialogue with the author without the author realizing it.

In a review report, we can also cite references to strengthen our case or give examples.

## Theory

**In an excellent econometrics paper, the interplay between theory and econometric design runs through the whole text.**

- Do the theories mentioned in the literature review have internal relationships and logical exposition?
- Are the conflicts among multiple theories tested in the econometrics? If not, then the theories are just being listed mechanically.
- Is the theory in the literature review consistent with the theory in the later empirical work? For example, if the earlier theory is about the official promotion tournament, but the later empirical evidence has no government-competition variable, or starts discussing the life cycle.
- Does the heterogeneity/robustness mechanism design have theoretical support, or is it used to test theory?
- Is the social context described adequately? In current research, is this variable really distinctive? Does the study really have a novel perspective? For example, high savings and low consumption driven by housing prices have already been discussed a lot.

## Descriptive Statistics

- Is the distribution reasonable? For example, does a long-tailed distribution affect the paper?
- Are the values reasonable? For example, descriptive statistics below 0 but then log-transformed?
- Is the index construction reasonable? Are positive/negative indicators explained? Is standardization done? When using principal component analysis, scores may be negative; then you should carefully check how the paper handles negative scores, while always keeping in mind the actual meaning of the indicator, which affects its range and sign.
- Are the max, min, mean, and units all shown?
- Is the data source stated?
- Are there omitted data-processing steps that aren't explained?

## Empirical Results

- Recheck the significance.
- Are the effect estimates exaggerated? For example, a measured parameter for work efficiency that turns out to be a 200% decrease! That clearly contradicts reality.
- Some results that can only be positive somehow come out negative!
- In subsample regressions, do the signs conflict with the conclusions?
- The scaling of [Ln(1+my)](https://blog.huaxiangshan.com/zh-cn/posts/log0/) can affect significance.
- Is the model used appropriately? DID should have sufficiently exogenous shock assumptions, RDD needs a suitable cutoff, and the weights of a spatial matrix need a reasonable theoretical justification...

## Heterogeneity, Robustness, Mechanisms

**This part mainly looks at the design of the econometric scheme.**

- Is the econometric analysis designed around the theory?
- Does the econometric method fit the paper's elements or data structure?
- Is the instrumental variable credible? IVs are an important tool for causal inference; here you need to examine them closely against the elements themselves. Most people use IVs from references, so compare carefully. An IV might be suitable in paper A but not in paper B.
- Are the "what" and "why" fully explained? Some papers only prove that a phenomenon exists without discussing why.
- Some checks that can add substance:
  Add interaction-term analysis, add subsample regressions, add between-group difference tests, add pre-trends, test exogenous shocks, swap in other relevant variables, robust clustering suggestions...

## Conclusion

- Does the conclusion match the empirical results — each empirical result produces a conclusion, no more and no less?
- The conclusion should be relatively specific, not freewheeling.
- Since the econometric design tests theories layer by layer based on the phenomenon, the conclusion should show the same structure and thinking.

A higher-level requirement is policy recommendations. Conclusions and implications need to weigh costs and benefits. A paper may find that x affects y — that's an economic regularity — but how to turn that regularity into recommendations requires considering the larger policy cost-benefit.

> This is a higher bar, but actually it's the angle that better fits a realistic, holistic view:

For example, if you suggest that relaxing credit constraints through government investment can promote the development of small and micro enterprises, that policy suggestion carries at least several premises to consider. 1. Why small and micro enterprises — what is the inherent trade-off between investing in large enterprises versus small and micro ones? 2. If the essence is investment and the key is credit constraints, is investment the only channel for relaxing credit constraints? 3. Cost-benefit — citing relevant policy grounds would make it stand out. So a policy's unexpected and spillover effects are easier to write about, because "unexpected effects" are really just additional benefits.

## Recommended References

- [Eight Lectures on Writing Empirical Papers (Liu Xichuan)]
- [Reviewing for Economic Research Journal — Pang Ruizhi](http://www.cesgw.cn/cn/NewsInfo.aspx?m=20100914093455340657&n=20130121161532390266)
- [As a reviewer, when would you choose to reject a paper?](https://www.zhihu.com/question/529489400/answer/2458876355)
- [The Initiative and Guidelines for External Expert Review at the Journal of Finance and Economics](https://mp.weixin.qq.com/s/r4IH3UqRcaP0S-Ps16jusQ)
- [Lu Ming: On Reviewing](https://mp.weixin.qq.com/s/_qfQ1n0lyoEZo5CZdyq8ow)
- [Yue Cha | Zhang Chuanchuan: Some Thoughts on Reviewing for Economics Journals](https://mp.weixin.qq.com/s/HZy3QTH22iMt7GsUOIvHdg)
- [Writing and Publishing | Shi Xinzheng: Some Views on Reviewing](https://mp.weixin.qq.com/s/_sIQyj3BEbssa9G0QdFOhQ)
- [On Reviewing | Value Judgment and Balance in Journal Review](https://mp.weixin.qq.com/s/fsTIbd1t7VCfITLMePtyHg)
- [On Reviewing | Yu Xinliang: In Reviewing, Help Others and Yourself, Together in Beauty](https://mp.weixin.qq.com/s/1_I4F5s3V_3vrX5VSqcYZA)

[^1]: There was also a question about how to title a paper. The editor answered that the title isn't the most important thing; you can see that the more formidable researchers have shorter paper titles, because they care about brevity and quickly foregrounding the topic.
    
[^2]: Suggestions and thinking at the level of novelty and endogeneity from economic significance demand the highest skill and best reflect a reviewer's caliber.
    
[^3]: These minor issues prove that the reviewer has read carefully.
    
[^4]: Actually, if you analyze the role of each structural element of a paper's format, you'll find every one of them matters.


---

> Author: [滑翔闪](https://github.com/hzp2333/hzp2333.github.io)  
> URL: https://blog.huaxiangshan.com/en/posts/sg/  

