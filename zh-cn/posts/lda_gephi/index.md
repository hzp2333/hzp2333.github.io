# LDA 主题模型与 Gephi 可视化


最近很多经济论文使用了 LDA 主题建模[^1]和社会网络分析，所以在这里尝试用这套方法可视化下博客主题词。流程就是：

- Python 读取 markdown 文档。
- 清洗、分词。
- LDA 主题构建。
- 构建网络数据。
- 利用 Gephi 可视化。

## LDA 主题建模

LDA 对于计算机文本分析来说是一个老东西了，但简单好用，算是种无监督机器学习。对于经济学来说，只需要知道其用于**概括文本有多少个主题词**就行了。在顶刊文章中，其往往用于测度数据类型[^7]。

论文应用举例：

- JPE 2025 年的《[More Laws, More Growth? Evidence from US States](https://www.journals.uchicago.edu/doi/full/10.1086/734874)》量化了美国每州新立法主题的分布，讨论立法和经济增长的关系。关于营商环境类主题的立法更有效，机制是吸引投资，同时降低经济发展的不确定性。
- RES 2025 年的《[Women in the Courtroom: Technology and Justice](https://academic.oup.com/restud/advance-article/doi/10.1093/restud/rdaf066/8220859)》使用直播庭审推广试点的案件面板研究女性案件胜诉情况，其中案件类型基于每个案件的法条内容总结为 50 个主题类型。
- 其他文本分析可以参考《[ 香樟推文3057：怎么在经济学中用文本分析算法？](https://mp.weixin.qq.com/s/9SzkCP0kkG3gw-ca-wNqAA)》

关于 LDA 的理解，推荐一个简洁形象的[油管视频](https://www.youtube.com/watch?v=3mHy4OSyRf0)（挂了梯子才能看见）：

{{< youtube 3mHy4OSyRf0>}}

## Gephi

### 例子

Gephi 是一个网络关系可视化软件。这个软件最早还是博主 {{< person "https://www.sungyinieh.com/" 松易涅 "博友" >}} 推荐给我的。他在撰写毕业论文时使用这个软件研究了[全球锂产品贸易依赖网络](https://mp.weixin.qq.com/s/M2Y3_Cre5vl7Wnk6o6J1fg)。

>关于网络分析的基础知识，我十分推荐学习开源的鸢尾花统计学教材《[数据有道](https://github.com/Visualize-ML/Book6_First-Course-in-Data-Science)》。

社会网络最经典的例子是**六度理论**——**经由六个关键人士就可以认识世界任何一个人**。六度理论体现在网络分析中就是（最短）路径和网络连通性。

社会网络分析最经典的数据集为**空手道俱乐部**。空手道俱乐部有两个教练，有一天他们分道扬镳了。此前有统计学家记录了俱乐部的人际关系，然后进行社会网络可视化然后聚类，最终成员分家的分布基本吻合。


![空手道俱乐部数据集可视化，来源 wiki 百科](/img/社会网络.zh-cn-20250824235924254.webp)

社会网络可视化主要涉及网络关系的演化（聚集、分裂）、分布[^6]（关键节点、权重、密度、结构[^2]）、预测。

论文《[Ownership Networks and Firm Growth: What Do Forty Million Companies Tell Us About the Chinese Economy? ](https://cfrc.pbcsf.tsinghua.edu.cn/__local/C/E3/F1/034E2CB105C230C8A028BDF18AD_5B83ADAD_18F58A.pdf?e=.pdf)》研究了中国股权网络的分布和演化。

![如图](/img/社会网络.zh-cn-20250824230329625.webp)

论文《[Community Interaction and Conflict on the Web](https://arxiv.org/abs/1803.03697)》研究了 raddit 的社群网络：**不到 1% 的社区引发了 74% 的负面动员行为**。这些冲突一般由活跃社区的核心成员发起，而真正参与冲突的却是较不活跃的外围成员。



![raddit 的社群网络](/img/社会网络.zh-cn-20250824231228354.webp)

Citespace 这种文献综述软件也是一种网络分析，也就是知识图谱。可参见另外一篇博文《[ Citespace 文献可视化](https://blog.huaxiangshan.com/zh-cn/posts/citespace/)》。

以前测试的图片。

![二次元主题，可以发现B站、初音未来也是三级关键词（homo是这样的）](/img/Citespace文献可视化.zh-cn-20240523120837358.webp)

### 分析软件

> 让 gpt 总结了下可以选择哪些社会网络分析软件。

| 工具            | 定位                     | 优点                     | 缺点              | 适合场景         |
| ------------- | ---------------------- | ---------------------- | --------------- | ------------ |
| **Gephi**     | 网络可视化 + 探索             | 界面友好；丰富的布局算法；社区检测等功能   | 偏重可视化；不适合超大规模网络 | 快速可视化、演示、探索  |
| **Cytoscape** | 生物网络分析起家 → 泛用          | 插件生态丰富；科研常用；分析+可视化结合紧密 | 大规模性能有限；界面稍复杂   | 生物信息学、科研网络分析 |
| **Pajek**     | 经典社会网络分析软件             | 可处理百万级大网络；学术界常见        | 界面老旧；学习曲线陡      | 大规模社会网络研究    |
| **NodeXL**    | Excel 插件（微软系）          | 上手快；社交媒体数据抓取方便         | 功能有限；商业版才完整     | 社交媒体网络分析入门   |
| **Python**    | NetworkX / igraph 编程工具 | 灵活；可定制；能结合机器学习和文本挖掘    | 无可视化界面；需写代码     | 高度灵活、科研实验    |
## 代码

三个文件夹：

1. 博客 markdown 文件夹（博客原文`. md`）
2. 分词文件夹（txt 文档一个词单独一行即可，例如了、的、得、地、他、她、滑翔闪......）
3. 结果文件夹

我使用的 `jieba` 分词、`gensim.models` 库的模型训练方式，如果想要进一步优化，可以从这几个环节进行修改[^4]。

> 注意 `gensim` 和 `numps` 的版本兼容问题。

```python
import os
import re
import glob
import itertools
import jieba
import pandas as pd
import networkx as nx
from collections import defaultdict
from gensim import corpora
from gensim.models import LdaModel

# 全局配置参数
DOCS_GLOB = r'D:\\PyTorch_practice\\博客分析\\数据\\原始博客\\*.md'   # 文档路径通配符
STOPWORDS_PATH = r'D:\\PyTorch_practice\\博客分析\\数据\\设置\\分词stop.txt'  # 可选停用词文件
OUTPUT_DIR = r'D:\\PyTorch_practice\\博客分析\\数据\\结果输出\\'       # 统一输出文件夹
NO_BELOW = 5  # 词频低于此值的词将被过滤
NO_ABOVE = 0.5  # 词频高于此比例的词将被过滤
KEEP_N = 100000  # 保留的最高频词数量
NUM_TOPICS = 10  # 主题数量
TOPN = 20  # 每个主题显示的关键词数量
MAX_EDGES = 200  # 词共现图中保留的最大边数

# 默认停用词集合
DEFAULT_STOPWORDS = set([
    '的', '了', '和', '是', '在', '就', '都', '而', '及', '与', '或', '一个', '我', '你', '他', '她', '它', '我们', '你们',
    '他们', '她们', '这', '那', '其', '又', '被', '上', '中', '对', '所', '为', '于'
])

def load_stopwords(path):
    """加载停用词列表"""
    sw = set()
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                for line in f:
                    w = line.strip()
                    if w:
                        sw.add(w)
        except Exception as e:
            print(f'读取停用词文件失败 {path}: {e}')
    
    # 如果自定义停用词为空，则使用默认停用词
    return sw if sw else DEFAULT_STOPWORDS

def load_documents(glob_pattern):
    """加载文档集合"""
    docs = []
    filenames = []
    
    # 获取匹配的文件列表
    file_list = sorted(glob.glob(glob_pattern))
    if not file_list:
        print(f'未找到匹配的文件: {glob_pattern}')
        return filenames, docs
        
    print(f'找到 {len(file_list)} 个文件')
    
    # 读取每个文件内容
    for fp in file_list:
        try:
            with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read().strip()
                if text:
                    docs.append(text)
                    filenames.append(os.path.basename(fp))
        except Exception as e:
            print(f'读取文件失败 {fp}: {e}')
    
    return filenames, docs

# 文本清洗与分词
RE_CLEAN = re.compile(r"[\s\d\u0000-\u007F]+")  # 去掉 ascii/数字/多余空白，保留中文汉字和中文标点

def preprocess(text, stopwords):
    """文本预处理：清洗、分词、过滤"""
    text = RE_CLEAN.sub(' ', text)
    tokens = jieba.lcut(text)
    # 过滤停用词和单字词
    tokens = [t for t in tokens if t.strip() and t not in stopwords and len(t) > 1]
    return tokens

def build_cooccurrence(tokens_list):
    """构建词共现矩阵"""
    cooc = defaultdict(int)
    freq = defaultdict(int)
    
    for tokens in tokens_list:
        # 对每篇文档中的词去重
        unique_tokens = list(dict.fromkeys(tokens))
        
        # 更新词频
        for w in unique_tokens:
            freq[w] += 1
            
        # 构建共现关系
        for a, b in itertools.combinations(unique_tokens, 2):
            if a != b:
                # 确保有序，避免重复计数
                key = (a, b) if a < b else (b, a)
                cooc[key] += 1
                
    return freq, cooc

def main():
    """主函数"""
    # 创建输出目录
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print('加载停用词...')
    stopwords = load_stopwords(STOPWORDS_PATH)
    print(f'加载了 {len(stopwords)} 个停用词')
    
    print('加载文档...')
    filenames, docs = load_documents(DOCS_GLOB)
    print(f'找到 {len(docs)} 篇文档')
    
    if len(docs) == 0:
        print('未找到任何文档，检查 DOCS_GLOB 设置')
        return
    
    print('分词并预处理...（这一步可能需要一些时间）')
    texts = [preprocess(d, stopwords) for d in docs]
    
    # 统计处理后的词汇信息
    total_tokens = sum(len(text) for text in texts)
    print(f'预处理完成，共处理 {total_tokens} 个词汇')
    
    # 构建字典与语料
    print('构建词典与语料...')
    dictionary = corpora.Dictionary(texts)
    original_size = len(dictionary)
    dictionary.filter_extremes(no_below=NO_BELOW, no_above=NO_ABOVE, keep_n=KEEP_N)
    filtered_size = len(dictionary)
    print(f'词典过滤: {original_size} -> {filtered_size} 个词')
    
    corpus = [dictionary.doc2bow(text) for text in texts]
    
    # 训练LDA模型
    print('训练 LDA 模型...')
    lda = LdaModel(
        corpus=corpus, 
        id2word=dictionary, 
        num_topics=NUM_TOPICS, 
        passes=15, 
        random_state=42,
        per_word_topics=True
    )
    
    # 保存模型
    model_path = os.path.join(OUTPUT_DIR, 'lda_model.model')
    lda.save(model_path)
    print(f'LDA 模型已保存: {model_path}')
    
    # 输出主题-词分布
    topics = lda.show_topics(num_topics=NUM_TOPICS, num_words=TOPN, formatted=False)
    print('\n主题关键词（每行一个主题）:')
    
    rows_kw = []
    for tid, terms in topics:
        topic_words = ', '.join([f'{w}({p:.4f})' for w, p in terms])
        print(f'Topic {tid}: {topic_words}')
        
        for rank, (word, prob) in enumerate(terms, start=1):
            rows_kw.append({
                'topic': tid, 
                'rank': rank, 
                'word': word, 
                'weight': float(prob)
            })
    
    # 保存主题关键词
    kw_path = os.path.join(OUTPUT_DIR, 'topic_keywords.csv')
    df_kw = pd.DataFrame(rows_kw)
    df_kw.to_csv(kw_path, index=False, encoding='utf-8-sig')
    print(f'主题关键词已保存: {kw_path}')
    
    # 导出文档-主题分布
    print('导出文档-主题分布...')
    rows = []
    for doc_id, bow in enumerate(corpus):
        doc_topics = lda.get_document_topics(bow, minimum_probability=0.0)
        for tid, weight in doc_topics:
            rows.append({
                'doc': filenames[doc_id], 
                'doc_id': doc_id, 
                'topic': int(tid), 
                'weight': float(weight)
            })
    
    dt_path = os.path.join(OUTPUT_DIR, 'doc_topic.csv')
    df_dt = pd.DataFrame(rows)
    df_dt.to_csv(dt_path, index=False, encoding='utf-8-sig')
    print(f'文档-主题分布已保存: {dt_path}')
    
    # 构建 topic-term 二部图
    print('构建 topic-term 二部图...')
    G = nx.Graph()
    
    for tid, terms in topics:
        # 使用前3个关键词作为主题名称
        top_words = [w for w, _ in terms[:3]]
        topic_label = f"Topic_{tid}_" + "_".join(top_words)
        G.add_node(f'topic_{tid}', label=topic_label, type='topic', topic_id=tid)
    
    for tid, terms in topics:
        for term, prob in terms:
            if not G.has_node(term):
                G.add_node(term, label=term, type='term')
            weight = float(prob)
            G.add_edge(f'topic_{tid}', term, weight=weight)
    
    # 保存二部图
    bipartite_path = os.path.join(OUTPUT_DIR, 'gephi_topic_term.gexf')
    nx.write_gexf(G, bipartite_path)
    print(f'Topic-Term 二部图已保存: {bipartite_path}')
    
    # 构建词共现图
    print('构建词共现图...')
    freq, cooc = build_cooccurrence(texts)
    
    # 按权重排序边，只保留权重最高的MAX_EDGES条边
    sorted_edges = sorted(cooc.items(), key=lambda x: x[1], reverse=True)
    
    # 收集所有需要保留的节点（出现在前MAX_EDGES条边中的节点）
    nodes_to_keep = set()
    edges_to_keep = []
    
    for (a, b), w in sorted_edges:
        if len(edges_to_keep) >= MAX_EDGES:
            break
        nodes_to_keep.add(a)
        nodes_to_keep.add(b)
        edges_to_keep.append(((a, b), w))
    
    # 创建图，只添加需要保留的节点和边
    H = nx.Graph()
    
    # 添加节点（只保留出现在边中的节点）
    for node in nodes_to_keep:
        if node in freq:
            H.add_node(node, label=node, frequency=int(freq[node]), type='term')
    
    # 添加边
    for (a, b), w in edges_to_keep:
        if a in H and b in H:  # 确保两个节点都存在
            H.add_edge(a, b, weight=int(w))
    
    # 移除孤立节点（如果有的话）
    H.remove_nodes_from(list(nx.isolates(H)))
    
    print(f'词共现图包含 {H.number_of_nodes()} 个节点和 {H.number_of_edges()} 条边')
    
    # 保存共现图
    cooccurrence_path = os.path.join(OUTPUT_DIR, 'gephi_term_cooccurrence.gexf')
    nx.write_gexf(H, cooccurrence_path)
    print(f'词共现图已保存: {cooccurrence_path}')
    
    # 输出总结信息
    print('\n全部完成。生成的文件：')
    output_files = [
        'lda_model.model', 
        'topic_keywords.csv', 
        'doc_topic.csv', 
        'gephi_topic_term.gexf', 
        'gephi_term_cooccurrence.gexf'
    ]
    
    for fn in output_files:
        file_path = os.path.join(OUTPUT_DIR, fn)
        if os.path.exists(file_path):
            file_size = os.path.getsize(file_path)
            print(f' - {file_path} ({file_size/1024:.1f} KB)')
        else:
            print(f' - {file_path} (文件未生成)')
    
    print('\nGephi 可视化建议:')
    print('1. 打开 Gephi：File → Open → 选择 .gexf 文件')
    print('2. 使用 Layout（例如 ForceAtlas2）进行布局')
    print('3. 根据 node attribute 的 type 上色/筛选')
    print('4. 根据 degree/weight 调整节点大小')

if __name__ == '__main__':
    main()
```

使用代码生成图文件 `gephi_topic_term.gexf` 后，

1. 打开 Gephi：File → Open → 选择 .gexf 文件
2. 使用 Layout（例如 ForceAtlas2）进行布局
3. 根据 node attribute 的 type 上色/筛选
4. 根据 degree/weight 调整节点大小

如果使用过 citespace 就不难理解 gephi 的一些美化操作[^3]。个人感觉这种可视化主要是为了更直观呈现聚类结构，但是实际上大数据很难跑重力图可视化。**社会网络分析的重点在于对于特殊结构、重要节点的捕捉和测度**。

使用 LDA 生成主题和词语后，可视化结果如下：

看来我的博客围绕**经济学**，然后向软件、子学科散开。电影观后感、其他软件确实被孤立到最远，

![LDA 生成主题|444x221](/img/社会网络.zh-cn-20250824180041018.webp)

下面这个图是优化了代码，使用 `jieba` 进一步删减副词形容词得到的图片，个人感觉这种图片总结就相当到位了。

![如图](/img/社会网络.zh-cn-1759046125538.webp)
![15个主题](/img/社会网络.zh-cn-1759046196231.webp)
优化版代码（个人笔记本跑不动了买了个便宜云服务器跑的）。
```python
# -*- coding: utf-8 -*-
"""
优化 LDA 管道：支持 Markdown (.md) 文档、自动停用词、词性过滤
- 使用 LdaMulticore 多线程训练
- 支持豁免词强制保留为主题关键词
- 可直接生成 Gephi 二部图
"""

import os
import glob
import re
import jieba
import jieba.posseg as pseg
import pandas as pd
import networkx as nx
from collections import defaultdict
from gensim import corpora
from gensim.models.ldamulticore import LdaMulticore

# Markdown 解析
try:
    import markdown
    from bs4 import BeautifulSoup
except ImportError:
    print("错误：缺少必要库，请执行 'pip install markdown beautifulsoup4'")
    exit()

# -------------------- 配置 --------------------
DOCS_GLOB = "/root/博客分析/数据/原始博客/*.md"
STOPWORDS_PATH = "/root/博客分析/数据/设置/分词stop.txt"
OUTPUT_DIR = "/root/博客分析/数据/结果输出"

# 词典和语料参数
NO_BELOW = 3            # 词语至少出现的文档数
NO_ABOVE = 0.8          # 词语在文档中出现比例上限
KEEP_N = 100000              # 词典最大词数

# LDA 模型参数
NUM_TOPICS = 10         # 主题数
TOPN = 15               # 每个主题显示的关键词数量
PASSES = 20             # LDA训练轮数
WORKERS = 28             # 多线程数（建议 = CPU核心数 - 1）
CHUNKSIZE = 5000        # 每批处理文档数量
BATCH = True            # 是否使用小批量训练

# 分词与停用词
USE_POS_FILTER = True
POS_BLACKLIST = set(['x', 'c', 'u', 'd', 'p', 't', 'm', 'q', 'r'])
USE_AUTO_DF_STOPWORDS = True
AUTO_DF_THRESHOLD = 0.8
AUTO_DF_TOPK = 200

# 额外停用词
ADDITIONAL_STOPWORDS = set([
    '什么', '推荐', '获取', '点击', '生成', '绘制',
    '存在', '问题', '使用', '可以', '我们', '现在', '通过', '文章', '内容', '研究法', '人为', '保留', '来讲', '叫魂', '学家'
])

DEFAULT_STOPWORDS = set([
    '的', '了', '和', '是', '在', '就', '都', '而', '及', '与', '或', '一个',
    '我', '你', '他', '她', '它', '我们', '你们', '他们', '她们', '这', '那', '其', '又', '被', '上', '中', '对', '所', '为', '于'
])

# 豁免词（强制保留为主题关键词）
WHITELIST_WORDS = set(['经济', '国家', '政府', '政策', '文学'])

# 文本清理正则
RE_CLEAN = re.compile(r"[\s\d\u0000-\u007F]+")


# -------------------- 函数 --------------------
def extract_text_from_markdown(md_content):
    html = markdown.markdown(md_content)
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup(['pre', 'code']):
        tag.decompose()
    return soup.get_text(separator=' ')


def load_stopwords(path):
    sw = set()
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                w = line.strip()
                if w:
                    sw.add(w)
    combined = set(DEFAULT_STOPWORDS) | set(ADDITIONAL_STOPWORDS) | sw
    return combined


def load_documents(glob_pattern):
    docs, filenames = [], []
    file_list = sorted(glob.glob(glob_pattern, recursive=True))
    if not file_list:
        print(f'未找到文件: {glob_pattern}')
        return filenames, docs
    print(f'找到 {len(file_list)} 个文件')
    for fp in file_list:
        try:
            with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
                raw_text = f.read().strip()
                if raw_text:
                    clean_text = extract_text_from_markdown(raw_text)
                    docs.append(clean_text)
                    filenames.append(os.path.basename(fp))
        except Exception as e:
            print(f'读取失败 {fp}: {e}')
    return filenames, docs


def auto_find_generic_terms(tokens_list, threshold=AUTO_DF_THRESHOLD, top_k=AUTO_DF_TOPK):
    n_docs = len(tokens_list)
    if n_docs == 0:
        return set()
    df = defaultdict(int)
    for tokens in tokens_list:
        for t in set(tokens):
            df[t] += 1
    df_ratio = {t: cnt / n_docs for t, cnt in df.items()}
    high_df = {t for t, r in df_ratio.items() if r >= threshold}
    if len(high_df) < top_k:
        sorted_by_df = sorted(df.items(), key=lambda x: x[1], reverse=True)
        high_df |= {t for t, _ in sorted_by_df[:top_k]}
    return high_df


def preprocess(text, stopwords, use_pos_filter=USE_POS_FILTER, pos_blacklist=POS_BLACKLIST):
    if not isinstance(text, str):
        return []
    text = RE_CLEAN.sub(' ', text)
    if use_pos_filter:
        words = []
        for w, flag in pseg.cut(text):
            short_flag = flag.split()[0] if flag else flag
            if (short_flag in pos_blacklist or w in stopwords or len(w) <= 1) and w not in WHITELIST_WORDS:
                continue
            words.append(w)
        return words
    else:
        tokens = [t for t in jieba.lcut(text) if (t not in stopwords or t in WHITELIST_WORDS) and len(t) > 1]
        return tokens


# -------------------- 主流程 --------------------
def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print('加载停用词...')
    stopwords = load_stopwords(STOPWORDS_PATH)
    print(f'加载了 {len(stopwords)} 个停用词')

    print('加载 Markdown 文档...')
    filenames, docs = load_documents(DOCS_GLOB)
    print(f'成功处理 {len(docs)} 篇文档')
    if len(docs) == 0:
        return

    print('文本预处理...')
    texts = [preprocess(d, stopwords) for d in docs]

    if USE_AUTO_DF_STOPWORDS:
        print('自动检测高频泛用词...')
        detected = auto_find_generic_terms(texts)
        detected -= WHITELIST_WORDS  # 豁免词不加入停用词
        if detected:
            print(f'检测到 {len(detected)} 个泛用词，加入停用词重新处理')
            stopwords |= detected
            texts = [preprocess(d, stopwords) for d in docs]

    total_tokens = sum(len(text) for text in texts)
    print(f'共 {total_tokens} 个有效词汇')

    print('构建词典与语料...')
    dictionary = corpora.Dictionary(texts)
    dictionary.filter_extremes(no_below=NO_BELOW, no_above=NO_ABOVE, keep_n=KEEP_N)
    corpus = [dictionary.doc2bow(text) for text in texts]

    print(f'文档数量: {len(corpus)}, 词典大小: {len(dictionary)}')
    print('训练 LDA 模型 (多线程)...')
    lda = LdaMulticore(
        corpus=corpus,
        id2word=dictionary,
        num_topics=NUM_TOPICS,
        passes=PASSES,
        workers=WORKERS,
        chunksize=CHUNKSIZE,
        batch=BATCH,
        random_state=42,
        per_word_topics=True
    )
    model_path = os.path.join(OUTPUT_DIR, 'lda_model.model')
    lda.save(model_path)
    print(f'LDA 模型已保存: {model_path}')

    # 主题关键词
    topics = lda.show_topics(num_topics=NUM_TOPICS, num_words=TOPN, formatted=False)
    rows_kw = []
    print('\n主题关键词:')
    for tid, terms in topics:
        topic_words = ', '.join([f'{w}({p:.4f})' for w, p in terms])
        print(f'Topic {tid}: {topic_words}')
        for rank, (word, prob) in enumerate(terms, start=1):
            rows_kw.append({'topic': tid, 'rank': rank, 'word': word, 'weight': float(prob)})
    pd.DataFrame(rows_kw).to_csv(os.path.join(OUTPUT_DIR, 'topic_keywords.csv'),
                                 index=False, encoding='utf-8-sig')

    # 文档-主题分布
    rows_dt = []
    for doc_id, bow in enumerate(corpus):
        doc_topics = lda.get_document_topics(bow, minimum_probability=0.0)
        for tid, weight in doc_topics:
            rows_dt.append({'doc': filenames[doc_id], 'doc_id': doc_id, 'topic': int(tid), 'weight': float(weight)})
    pd.DataFrame(rows_dt).to_csv(os.path.join(OUTPUT_DIR, 'doc_topic.csv'),
                                 index=False, encoding='utf-8-sig')
    print('文档-主题分布已保存')

    # 构建 Topic-Term 二部图
    print('构建 Topic-Term 二部图...')
    G = nx.Graph()
    for tid, terms in topics:
        top_words = [w for w, _ in terms[:3]]
        topic_label = f"Topic_{tid}_" + "_".join(top_words)
        G.add_node(f'topic_{tid}', label=topic_label, type='topic', topic_id=tid)
        for term, prob in terms:
            if not G.has_node(term):
                G.add_node(term, label=term, type='term')
            G.add_edge(f'topic_{tid}', term, weight=float(prob))
    nx.write_gexf(G, os.path.join(OUTPUT_DIR, 'gephi_topic_term.gexf'))
    print('Topic-Term 二部图已保存')

    # 输出文件信息
    print('\n全部完成! 生成文件:')
    for fn in ['lda_model.model', 'topic_keywords.csv', 'doc_topic.csv', 'gephi_topic_term.gexf']:
        path = os.path.join(OUTPUT_DIR, fn)
        if os.path.exists(path):
            print(f' - {path} ({os.path.getsize(path)/1024:.1f} KB)')


if __name__ == '__main__':
    main()

```

## 一些感叹

总是吐槽机器学习是黑箱子，但是对于使用各种分析软件的我来说，很多软件方法和黑箱子又有什么区别呢？假设 stata 外部命令错误，如果不知根知底，或者从理论上多角度比对结果就难以发现错误。

例如 [「Stata」bdiff+reghdfe的正确用法，很多论文都被坑了](https://mp.weixin.qq.com/s/IsuB02q6Lek07Oxknvx6Vw)。个人记得以前有个 did 外部命令也出现过错误。

我相信 ai 会加强代码类学习的正反馈，但与此同时 ai 也会带来“我懂了”的幻觉。正如费曼一向强调的那样——**知道和理解并不相同**[^5]。跑通代码和理解代码远远不是一个层次的学习。Ai 学习的知识幻觉时代，什么才是懂了？或许应该被重新思考。


[^1]: 虽然 LDA 方法已经很老了, 但是经济学向来擅长冷饭新炒。
[^2]: 把宇宙看作一个网络空间，最新研究发现地球也可能处于一个空洞之中。自从看了知乎上关于星际航行的一篇回答[（人类真的永远无法离开拉尼亚凯亚超星系团吗）](
https://www.zhihu.com/question/329908379/answer/1943305925965374152 )，我已经不相信地球上有外星人了😢。
[^3]: 但是大数据的情况下，分散性分布美化计算太过复杂，因此使用很少。
[^4]: 有了 ai，数据分析都不难，难的是拿到符合要求的素材。
[^5]: 所以费曼吐槽社会科学可能是伪科学。
[^6]: 光是描述性统计就已经足够赚人眼球。
[^7]: 近年异质性主体的挖掘越来越重要


