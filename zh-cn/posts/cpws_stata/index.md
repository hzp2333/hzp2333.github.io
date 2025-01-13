# 裁判文书清洗指南


# 裁判文书清洗手册

作者：滑翔闪

- 这个文档既是目前工作的汇报，也是一些经验的总结。
- 或许能方便后面的同学更快上手裁判文书的清洗工作。
- 希望未来的同学能重视工程技巧的优化总结与文档分享。

**思考如何优化工程，优化团队协作，让积累和输出成为一种能力**。

世界不但需要输入，也需要输出，知识的分享与传递才是人类文明不断进步的纽带。

关于 AI 工具的推荐：

[通义千问](https://tongyi.aliyun.com/)：**上下文记忆能力长**，能让它改善长代码。

[GPT](https://chat.openai.com/auth/login) ：**更了解 stata 的函数**。在我处理字符串变量时，通义千问经常用复杂的命令处理，通常还报错，而 GPT 知道很多 stata 的不常用函数，一行代码就可以轻松搞定。

[deepseek](https://chat.deepseek.com/) :国内新秀。 语言表达很不错。能很快理解使用者的意思。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #7d637a; background-color: #f6edf5; border-color: #f1e4f0;">
&#x1F4AC
    <b> 备注：裁判文书的清洗需要交替处理中文和数字。本文档会多提一些 python 和 stata 的常用正则表达式。
</b></div>

AI 虽然掌握了很多函数，但它不知道怎么组合。

谋篇布局的算法理解才是我们的最大优势。

提问时要替 AI 理顺代码的算法。

有了 AI 后——知道什么包能实现什么功能，在算法下有什么作用，比掌握细节更重要。

## 裁判文书资源

**原始文本数据**：一堆 txt 文件。每一行是一条裁判文书信息，Txt 文件以 “万”作为文件名，因此下面使用整数部分的数字代表每个 txt 文件。

配套的文档是压缩包、文书字典、变量含义表格。
​
![例子](/img/裁判文书清洗指南.zh-cn-20250113205914854.webp)

**提示**😍：每个 txt 文件都很大，一般软件打不开。个人推荐使用 [EmEditor](https://www.emeditor.com/) 软件查看。积极使用 [EmEditor](https://www.emeditor.com/) 软件查看例子，能让我们更好地了解乱码情况和裁判文书的书写规则，以便改进我们的文本处理代码。


- **Dta 数据**：前辈们清洗好的 stata 文件。拆分为了 ans 1—ans 83。格式刷 stata 的 `.dta`格式

![例子](/img/裁判文书清洗指南.zh-cn-20250113210027701.webp)

一套完整的清洗流程就是：

从原始的 txt 中筛选提取我们需要的信息，最终成为能导入 stata 使用的数据。

## txt 文件的处理

Txt 的裁判文书大部分已经处理为了 json格式，python 读取其实较为方便。

其中，大部分裁判文书 txt 文件是下方的 s 系列命名结构：

![重要的信息都在第三列，s*系列包含的数据结构当中](/img/裁判文书清洗指南.zh-cn-20250113210107895.webp)

重要的信息都在第三列，s*系列包含的数据结构当中

但跑通了一到三份 txt 文件不等于能跑通所有。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
&#x26D4<b> Txt 的裁判文书还存在一些其他格式：

- 有些 txt 文件格式为 DocInfoVo 开头的。
- 有些 txt 文件格式为 title 开头的。
- 有些 txt 文件格式夹杂着 HTML 语言。
- 有些 txt 文件格式是纯粹的乱码。
- 有些格式中 s 系列和 DocInfoVo 格式混在一起，导致循环代码被打断。
</b></div>

因此处理时得考虑**代码的兼容性和全面性**，分开写处理代码，然后对这种 txt 文件处理两次。

![例子](/img/裁判文书清洗指南.zh-cn-20250113210203690.webp)

![例子](/img/裁判文书清洗指南.zh-cn-20250113210207504.webp)
### 一些建议

由于循环容易被打断，用 txt 进行处理处理时，建议参考如下逻辑：

1、将乱码的 txt（附在后文）和 s 系列的 txt 分开处理

2、原始文件为 txt，清洗处理后生成新的 cleaned_txt。

3、由于清洗循环命令容易被打断，最好多写一个命令：对比 txt 和 cleaned_txt 的文件名。

4、多写一个步骤：将处理完成的 txt 文档移动到另一个文件夹，修改报错代码后继续循环。

> Python 默认读取文件的顺序是 txt 1 txt 10 text 111... 而不是 1、2、3...

### 乱码文档

不只是 s 系列格式的 txt 文件有：

![例子](/img/裁判文书清洗指南.zh-cn-20250113210248250.webp)
## 例子 1：python 提取案件号序列

### 思路

python 读取 txt 的 json 格式。

提取第三列 `CourtInfo` 数据。

![例子](/img/裁判文书清洗指南.zh-cn-20250113210332387.webp)

s 23 变量所有案件号，以此追踪**一审二审再审终审**。

例如 `（2016）沪0104民初33043号` ，其实就是一个裁判文书案件的身份证号。

正则表达式筛选：按照 `（年份）初\终\再 号` 的规则提取满足要求的字符串

```python
 pattern = r"[（(]\d{4}[)）][^号]*?(?:初|终|再)[^号]*?号"
```

提取后去除重、排除包含“`['X', 'x', 'Ｘ', '执', '不动产', '-', '第']`”的案件号。

> 如果继续使用这种方法提取，排除时最好加入 **辖**。
> 
> 这种案号也有辖初、辖再、辖终，但只表示法院在管理权上的划分。
> 
> （或许以后还有人能想到用这个特征做研究？👍）

```python
 exclusions = ['X', 'x', 'Ｘ', '执', '不动产', '-', '第']
```

排序，优先按照案号中的 (年份) 进行排序。 删除案号数量大于等于 5 的所有行。

一个案子最多是如下的顺序：

初审，不服申请上诉，再审，终审，不服再进行上诉，终审。

可以直接从初审跳到终审，终审后还有最后一次再审机会，再审结束后一般就不会更改了。

> 个人的排序逻辑：（此处最大的漏洞是我想不到怎么完美识别“再”案号的位置）
> 
> 生成 m 1——m 4 四个变量 带有初的案号归类到 m 1，带有终的案号归类到 m 3。
> 
> 带有再的情况：
> 
> 如果只有初和再，再归类到 m 2
> 
> 如果只再，我默认放在 m 4
> 
> 如果同时有终、再，根据相对位置判断再是 m 2 还是 m 4。
> 
> 后面发现：【辖终】会干扰顺序，所以先将包含辖的案号清除，然后和被其挤到 m 4 的【终】案号交换顺序。
> 
> 这就是大数据最麻烦的点：
> 
> **如果前面工作没有完美做好，后面返工成本会越来越高。 最糟糕的是——大数据总是很难穷尽所有乱码可能。**

### 单个 txt 的处理

以下代码只针对 **s 系列**命名的文档。

```python
 import pandas as pd  
 from collections import OrderedDict  
 import json  
 import re  
 import os  
 ​  
 # 读取数据  
 data = pd.read_csv("F:/桌面/裁判文书数据库/test/test.txt", delimiter='\t')  
 ​  
 # 查看前几行数据  
 print(data.head(3))  
 ​  
 # 假设 CourtInfo 列中包含 JSON 字符串  
 json_data = data['CourtInfo']  
 ​  
 # 解析 JSON 数据  
 def parse_json(json_str):  
     try:  
         return json.loads(json_str)  
     except json.JSONDecodeError:  
         return None  
 ​  
 # 应用解析函数  
 parsed_prac_c = json_data.apply(parse_json)  
 ​  
 ​  
 ​  
 # 将 JSON 字典转换为 DataFrame，并处理缺失值  
 json_df = pd.json_normalize(parsed_prac_c.dropna(how='all'))  
 ​  
 # 查看转换后的 DataFrame  
 print(json_df.head(20))  
 ​  
 # 正则表达式模式  
 pattern = r"[（(]\d{4}[）)]\s*.*?号"  
 ​  
 # 使用findall提取所有匹配项  
 matches = json_df['s23'].apply(lambda x: re.findall(pattern, x) if isinstance(x, str) else [])  
 ​  
 # 查看转换后的 DataFrame  
 print(matches.head(3))  
 print(matches)  
 ​  
 ​  
 # 创建新的 DataFrame，将更新后的 's23' 列保存  
 matches_df = pd.DataFrame({  
     's23': matches  
 })  
 ​  
 # 查看转换后的 DataFrame  
 print(matches_df.head(10))  
 # print(matches_df)  
 ​  
 # 选择要合并的列  
 selected_data_columns = []   
 selected_json_df_columns = []  
 ​  
 # 合并选择的列  
 combined_df = pd.concat([data[selected_data_columns], json_df[selected_json_df_columns],matches_df], axis=1)  
 ​  
 def clean_text(text):  
     if isinstance(text, list):  
         text = ', '.join(text)  # 将列表转换为字符串，元素之间用逗号和空格分隔  
     if isinstance(text, str):  
         if text == "[]":  
             return ''  
         cleaned_text = text.replace('[', '').replace(']', '').strip()  
         return cleaned_text  
     return ''  
 ​  
 # 切割并生成列名  
 def split_and_rename(content):  
     content = clean_text(content)  
     split_content = content.split(', ')  
     result = {f'm{i+1}': split_content[i].strip() for i in range(len(split_content)) if split_content[i].strip()}  
     return result  
 ​  
 # 应用函数  
 expanded_df = combined_df['s23'].apply(split_and_rename).apply(pd.Series)  
 ​  
 # 查看结果  
 # print("Expanded DataFrame:")  
 ​  
 # 提取年份的函数  
 def extract_year(text):  
     match = re.search(r'[（(](\d{4})[）)]', text)  
     return int(match.group(1)) if match else float('inf')  
 ​  
 # 清洗和排序函数  
 def clean_and_sort(row):  
     # 过滤掉非字符串类型的值  
     filtered = [item for item in row if isinstance(item, str) and not any(keyword in item for keyword in exclusions)]  
     # 去除重复项并保持顺序  
     unique_items = list(OrderedDict.fromkeys(filtered))  
     # 按年份排序  
     sorted_items = sorted(unique_items, key=lambda x: extract_year(x))  
     return sorted_items  
 ​  
 # 需要排除的关键字列表  
 exclusions = ['X', 'x', 'Ｘ', '执', '不动产', '-', '第']  
 ​  
 # 筛选所有 m* 列  
 m_columns = [col for col in expanded_df.columns if col.startswith('m')]  
 ​  
 # 对每一行应用清洗和排序函数  
 def process_row(row):  
     # 获取 m* 列的内容  
     row_values = [row[col] for col in m_columns]  
     # 扁平化列表  
     flattened = [item for sublist in row_values for item in (sublist if isinstance(sublist, list) else [sublist])]  
     # 处理并排序  
     sorted_items = clean_and_sort(flattened)  
     return sorted_items  
 ​  
 # 应用到数据框的每一行  
 sorted_results = expanded_df.apply(process_row, axis=1)  
 ​  
 # 创建新的数据框  
 max_length = max(sorted_results.apply(len))  
 sorted_df = pd.DataFrame(sorted_results.tolist(), columns=[f'm_sorted_{i+1}' for i in range(max_length)])  
 ​  
 # 打印结果  
 print(sorted_df.head(10))  
 ​  
 # 合并到原数据  
 combined_df2 = pd.concat([combined_df, sorted_df], axis=1)  
 ​  
 # 查看结果  
 print(combined_df.head(10))  
 # 检查 'm_sorted_5' 列是否存在，并删除非空行  
 if 'm_sorted_5' in combined_df2.columns:  
     combined_df2_cleaned = combined_df2[combined_df2['m_sorted_5'].isna() | (combined_df2['m_sorted_5'] == '')]  
 else:  
     # 如果列不存在，则保留原数据框  
     combined_df2_cleaned = combined_df2.copy()  
 ​  
 # 打印结果  
 print(combined_df2_cleaned.head(10))  
 ​  
 # 获取所有 m_sorted_* 列的名称  
 m_sorted_columns = [col for col in combined_df2_cleaned.columns if col.startswith('m_sorted_')]  
 ​  
 # 过滤出索引大于等于 5 的列  
 columns_to_drop = [col for col in m_sorted_columns if int(col.split('_')[2]) >= 5]  
 ​  
 # 删除指定的列  
 combined_df2_cleaned = combined_df2_cleaned.drop(columns=columns_to_drop, errors='ignore')  
 ​  
 # 打印结果以检查清理后的数据框  
 print(combined_df2_cleaned.head())  
 ​  
 combined_df2.to_csv('F:/桌面/combined_df.txt', sep='\t', index=False, quoting=1, quotechar='"')
```

### 批量处理

个人选择的批量处理思路是循环处理一个文件夹下面的所有文档。

循环容易被打断，建议写一个报错记录，和处理完一个文档便移动的命令。

```python
 import pandas as pd  
 from collections import OrderedDict  
 import json  
 import re  
 import os  
 ​  
 # 定义输入和输出文件夹路径  
 # 定义输入和输出文件夹路径  
 input_folder_path = "C:/Users/PC/Desktop/hzp_project/二审和一审/数据/"  
 output_folder_path = "C:/Users/PC/Desktop/hzp_project/二审和一审/清洗结果/"  
 ​  
 # 如果输出文件夹不存在，则创建它  
 if not os.path.exists(output_folder_path):  
     os.makedirs(output_folder_path)  
 ​  
 # 遍历输入文件夹中的所有 .txt 文件  
 for filename in os.listdir(input_folder_path):  
     if filename.endswith('.txt'):  
         input_file_path = os.path.join(input_folder_path, filename)  
         output_file_path = os.path.join(output_folder_path, filename)  
 ​  
         # 读取数据  
         data = pd.read_csv(input_file_path, delimiter='\t')  
 ​  
         # 打印前3行数据以检查  
         print(f"Processing file: {filename}")  
         print(data.head(3))  
 ​  
         # 解析JSON字段  
         json_data = data['CourtInfo']  
 ​  
         def parse_json(json_str):  
             try:  
                 return json.loads(json_str)  
             except json.JSONDecodeError:  
                 return None  
 ​  
         parsed_prac_c = json_data.apply(parse_json)  
 ​  
         # 将解析后的JSON转换为DataFrame  
         json_df = pd.json_normalize(parsed_prac_c.dropna(how='all'))  
 ​  
         # 打印前20行以检查  
         print(json_df.head(20))  
 ​  
         # 定义匹配模式  
         pattern = r"[（(]\d{4}[）)]\s*.*?号"  
 ​  
         # 查找匹配项  
         matches = json_df['s23'].apply(lambda x: re.findall(pattern, x) if isinstance(x, str) else [])  
 ​  
         # 打印前3行匹配结果以检查  
         print(matches.head(3))  
         print(matches)  
 ​  
         # 将匹配结果转换为DataFrame  
         matches_df = pd.DataFrame({'s23': matches})  
 ​  
         # 打印前10行匹配结果DataFrame以检查  
         print(matches_df.head(10))  
 ​  
         # 选择要保留的数据列  
         selected_data_columns = []   
         selected_json_df_columns = []  
 ​  
         # 合并原始数据、解析后的JSON数据以及匹配结果  
         combined_df = pd.concat([data[selected_data_columns], json_df[selected_json_df_columns], matches_df], axis=1)  
 ​  
         # 清洗文本函数  
         def clean_text(text):  
             if isinstance(text, list):  
                 text = ', '.join(text)   
             if isinstance(text, str):  
                 if text == "[]":  
                     return ''  
                 cleaned_text = text.replace('[', '').replace(']', '').strip()  
                 return cleaned_text  
             return ''  
 ​  
         # 分割并重命名函数  
         def split_and_rename(content):  
             content = clean_text(content)  
             split_content = content.split(', ')  
             result = {f'm{i+1}': split_content[i].strip() for i in range(len(split_content)) if split_content[i].strip()}  
             return result  
 ​  
         # 展开匹配结果  
         expanded_df = combined_df['s23'].apply(split_and_rename).apply(pd.Series)  
 ​  
         # 提取年份函数  
         def extract_year(text):  
             match = re.search(r'[（(](\d{4})[）)]', text)  
             return int(match.group(1)) if match else float('inf')  
 ​  
         # 清洗并排序函数  
         def clean_and_sort(row):  
             filtered = [item for item in row if isinstance(item, str) and not any(keyword in item for keyword in exclusions)]  
             unique_items = list(OrderedDict.fromkeys(filtered))  
             sorted_items = sorted(unique_items, key=lambda x: extract_year(x))  
             return sorted_items  
 ​  
         # 排除关键词列表  
         exclusions = ['X', 'x', 'Ｘ', '执', '不动产', '-', '第']  
 ​  
         # 获取所有m开头的列名  
         m_columns = [col for col in expanded_df.columns if col.startswith('m')]  
 ​  
         # 处理每一行  
         def process_row(row):  
             row_values = [row[col] for col in m_columns]  
             flattened = [item for sublist in row_values for item in (sublist if isinstance(sublist, list) else [sublist])]  
             sorted_items = clean_and_sort(flattened)  
             return sorted_items  
 ​  
         sorted_results = expanded_df.apply(process_row, axis=1)  
 ​  
         # 计算最大长度，并创建新的排序后的DataFrame  
         max_length = max(sorted_results.apply(len))  
         sorted_df = pd.DataFrame(sorted_results.tolist(), columns=[f'm_sorted_{i+1}' for i in range(max_length)])  
 ​  
         # 再次合并数据  
         combined_df2 = pd.concat([combined_df, sorted_df], axis=1)  
 ​  
         # 过滤条件  
         if 'm_sorted_5' in combined_df2.columns:  
             combined_df2_cleaned = combined_df2[combined_df2['m_sorted_5'].isna() | (combined_df2['m_sorted_5'] == '')]  
         else:  
             combined_df2_cleaned = combined_df2.copy()  
 ​  
         # 打印清理后的前10行数据以检查  
         print(combined_df2_cleaned.head(10))  
 ​  
         # 获取所有m_sorted开头的列名  
         m_sorted_columns = [col for col in combined_df2_cleaned.columns if col.startswith('m_sorted_')]  
 ​  
         # 要删除的列名  
         columns_to_drop = [col for col in m_sorted_columns if int(col.split('_')[2]) >= 5]  
 ​  
         # 删除不需要的列  
         combined_df2_cleaned = combined_df2_cleaned.drop(columns=columns_to_drop, errors='ignore')  
 ​  
         # 打印最终前几行数据以检查  
         print(combined_df2_cleaned.head())  
 ​  
         # 保存到文件  
         combined_df2_cleaned.to_csv(output_file_path, sep='\t', index=False, quoting=1, quotechar='"')  
 ​  
 print("Processing complete.")
```

## 例子 2：python 提取法条和移动文件夹

法条数量可以衡量案件复杂度，法条本身也衡量了案件类型。

Txt 文档的 s 47 系列对应着文书的法条，里面是第二层 json 格式：

```python
 for clause in data:  
     fgmc = clause.get('fgmc', '')  
     tkx = clause.get('tkx', '')  
     match = re.search(r'(第.*?条)', tkx)
```

`['s23', 's25', 's26', 's27']` 的中文字符加总就是裁判文书的正文字数。

> "s7": "案件号","s23": "诉讼记录","s24": "诉控辩","s25": "事实","s26": "理由","s27": "判决结果"。

### 多个 txt

```python
 import pandas as pd  
 import json  
 import re  
 import os  
 import glob  
 import logging  
 ​  
 # 配置日志记录  
 logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')  
 ​  
 # 明确指定输入文件夹和输出文件夹的路径  
 input_folder_path = "C:/Users/PC/Desktop/hzp_project/二审和一审/数据/"  
 output_folder_path = "C:/Users/PC/Desktop/hzp_project/二审和一审/清洗结果/"  
 log_folder_path = "C:/Users/PC/Desktop/hzp_project/二审和一审/日志/"  
 ​  
 # 确保输出文件夹和日志文件夹存在  
 os.makedirs(output_folder_path, exist_ok=True)  
 os.makedirs(log_folder_path, exist_ok=True)  
 ​  
 # 解析 JSON 数据  
 def parse_json(json_str):  
     try:  
         if isinstance(json_str, str):  
             return json.loads(json_str)  
         elif isinstance(json_str, list):  
             return json_str  
         else:  
             logging.warning(f"未知数据类型: {type(json_str)}")  
             return None  
     except json.JSONDecodeError:  
         logging.warning(f"JSON 解析失败: {json_str}")  
         return None  
 ​  
 # 计算中文字符数  
 def count_chinese_chars(text):  
     if pd.isnull(text):  
         return 0  
     return len(re.findall(r'[\u4e00-\u9fff\u0030-\u0039\u3000-\u303f\uff00-\uffef]', str(text)))  
 ​  
 # 提取和格式化条款  
 def extract_clauses(s47_data):  
     formatted_clauses = []  
     for item in s47_data.dropna():  
         data = parse_json(item)  
         if data is not None:  
             clauses = set()  # 使用集合去重  
             for clause in data:  
                 fgmc = clause.get('fgmc', '')  
                 tkx = clause.get('tkx', '')  
                 match = re.search(r'(第.*?条)', tkx)  
                 if match:  
                     clauses.add(f"{fgmc}{match.group(1)}")  
             formatted_clauses.append(list(clauses))  # 保存每行提取的条款  
         else:  
             formatted_clauses.append([])  # 如果解析失败，则添加空列表  
     return formatted_clauses  
 ​  
 # 处理单个文件  
 def process_file(input_file, output_folder, log_folder, total_rows):  
     # 初始化一个空的列表来存储错误信息  
     error_logs = []  
       
     def bad_line_handler(bad_line):  
         error_logs.append((input_file, bad_line.line_num, bad_line.line))  
       
     # 读取数据  
     try:  
         data = pd.read_csv(input_file, delimiter='\t', on_bad_lines=bad_line_handler, engine='python')  
         logging.info(f"Read {len(data)} rows from file: {input_file}")  
     except Exception as e:  
         logging.error(f"Error reading file: {input_file}")  
         logging.error(f"Error message: {e}")  
         return  
       
     # 过滤掉 CourtInfo 列以 "DocInfoVo" 开头或无法解析为 JSON 的行  
     data = data[data['CourtInfo'].apply(lambda x: x.startswith('{"s1":') if pd.notnull(x) else False)]  
     data = data[data['CourtInfo'].apply(lambda x: isinstance(parse_json(x), dict))]  
 ​  
     logging.info(f"Filtered out invalid rows from file: {input_file}")  
       
     # 提取 JSON 数据  
     json_data = data['CourtInfo']  
       
     # 应用解析函数  
     parsed_prac_c = json_data.apply(parse_json)  
     logging.info(f"Parsed JSON data from file: {input_file}")  
       
     # 将 JSON 字典转换为 DataFrame，并处理缺失值  
     json_df = pd.json_normalize(parsed_prac_c.dropna(how='all'))  
     logging.info(f"Normalized JSON data from file: {input_file}")  
       
     # 选取特定列  
     selected_columns = json_df[['s7', 's23', 's25', 's26', 's27', 's47']].copy()  # 使用 .copy() 创建副本  
       
     # 计算 s26 列中“条”字的出现次数  
     selected_columns['count_tiao'] = selected_columns['s26'].apply(lambda x: x.count('条') if pd.notnull(x) else 0)  
     logging.info(f"Calculated 'count_tiao' from file: {input_file}")  
       
     # 计算 s23, s25, s26, s27 列的总字数  
     selected_columns['total_chars'] = selected_columns[['s23', 's25', 's26', 's27']].apply(  
         lambda row: sum(count_chinese_chars(x) for x in row), axis=1  
     )  
     logging.info(f"Calculated 'total_chars' from file: {input_file}")  
       
     # 提取和格式化条款  
     unique_clauses = extract_clauses(selected_columns['s47'])  
     selected_columns['unique_clauses'] = unique_clauses  # 使用 .loc 进行安全赋值  
     selected_columns['clause_count'] = [len(clauses) for clauses in unique_clauses]  # 每行的条款数量  
     logging.info(f"Extracted and formatted clauses from file: {input_file}")  
       
     # 生成输出文件名  
     base_name = os.path.basename(input_file)  
     output_file = os.path.join(output_folder, f"cleaned_{base_name}")  
       
     # 将结果保存为 txt 文件  
     selected_columns[['s7', 'count_tiao', 'total_chars', 'unique_clauses', 'clause_count']].to_csv(output_file, sep='\t', index=False, quoting=1, quotechar='"')  
     logging.info(f"Processed and saved to: {output_file}")  
       
     # 汇报进度  
     processed_rows = len(data)  
     logging.info(f"已完成处理文件: {base_name}, 条目数: {processed_rows}/{total_rows}")  
 ​  
     # 保存错误日志  
     if error_logs:  
         log_file = os.path.join(log_folder, f"error_log_{base_name}.txt")  
         with open(log_file, 'w', encoding='utf-8') as f:  
             for log in error_logs:  
                 f.write(f"File: {log[0]}, Line: {log[1]}, Content: {log[2]}\n")  
         logging.info(f"Error logs saved to: {log_file}")  
 ​  
 # 遍历输入文件夹中的所有文件  
 all_files = glob.glob(os.path.join(input_folder_path, "*.txt"))  
 total_files = len(all_files)  
 processed_files = 0  
 ​  
 if not all_files:  
     logging.warning("No files found in the input folder.")  
 else:  
     for input_file in all_files:  
         processed_files += 1  
         # 汇报当前处理的文件进度  
         logging.info(f"正在处理文件: {input_file} ({processed_files}/{total_files})")  
         process_file(input_file, output_folder_path, log_folder_path, total_files)  
```
 ​
### 移动 txt

因为代码循环非常容易被打断，我建议设置**三个文件夹**：

原始文件夹存放原始数据，

结果文件夹存放处理完成的数据，统一改为 `cleaned_*` 的 txt 名字，

清洗完成的文件夹：把清洗完成的原始数据放到这里，便于循环打断后继续开始，

因此本代码的逻辑就是对照**清洗完成的文件夹**和**原始文件夹**，将名字有对应的 txt 文档进行移动。

```python
 import os  
 import shutil  
 ​  
 # 定义文件夹路径  
 source_folder = r'F:/桌面/测试/清洗结果'  
 data_folder = r'F:/桌面/测试/数据'  
 cleaned_folder = r'F:/桌面/测试/完成提取'  
 ​  
 # 获取源文件夹中的所有.txt文件名（不含路径），并去除前缀 "cleaned_"，同时去除所有多余空格并转换为小写  
 def standardize_filename(filename):  
     return ''.join(filename.split()).lower()  
 ​  
 # 获取源文件夹中的文件名  
 source_files = [f for f in os.listdir(source_folder) if f.startswith('cleaned_') and f.endswith('.txt')]  
 standardized_source_files = {standardize_filename(f[8:]): f for f in source_files}  
 ​  
 # 获取数据文件夹中的文件名  
 data_files = [f for f in os.listdir(data_folder) if f.endswith('.txt')]  
 standardized_data_files = set(standardize_filename(f) for f in data_files)  
 ​  
 # 找出数据文件夹中与源文件夹中相同的文件  
 common_files = standardized_source_files.keys() & standardized_data_files  
 ​  
 # 移动相同的文件到清洗完成文件夹  
 for filename in common_files:  
     original_filename = standardized_source_files[filename]  
     source_path = os.path.join(data_folder, original_filename.replace('cleaned_', ''))  
     destination_path = os.path.join(cleaned_folder, original_filename.replace('cleaned_', ''))  
       
     # 确保目标文件夹存在  
     os.makedirs(os.path.dirname(destination_path), exist_ok=True)  
       
     shutil.move(source_path, destination_path)  
     print(f"Moved: {source_path} -> {destination_path}")  
 ​  
 print("Process completed.")
```

## dta 数据的匹配

### 标识的去重

Txt 提取完成后，就是转化为 `.dta` 匹配到 `ans*.dta` 中。

**案号**是理论上的唯一标识，但实际上可能出现重复的情况。

这时候建议使用以下逻辑，先历遍所有变量，生成非空数值总数，去重，在案号的重复行间保留非空数值最多的一行：

```python
 * 标记重复的 case_wid，并计算每组的数量  
     bysort case_wid: gen dup_count = _N  
     replace dup_count = . if _n > 1 // 可选：只保留第一次出现的计数  
     * 创建一个包含所有要检查的变量的局部宏  
     local varlist var1 var2  
     * 使用循环创建标志变量  
     foreach var of local varlist {  
         gen flag_`var' = cond(missing(`var'), 0, 1)  
     }  
     * 计算每行中非空值的数量  
     egen non_missing = rowtotal(flag*)  
     * 对每个 case_wid 按非空变量数量降序排序，并标记保留的观测值  
     bysort case_wid (non_missing): gen keep = (_n == _N)  
     * 清理临时变量  
     capture drop flag*  
     * 删除重复值，保留非空变量最多的行  
     drop if !keep  
     * 清理辅助变量  
     drop dup_count non_missing keep  
     * 保存处理后的文件，覆盖原有文件  
     save "`input_file'", replace  
 }
```

### 文本匹配标识的格式转化

`ans*.dta` 系列的文本格式都是 `strL`，含义为长字符串。Stata 的字符串匹配只能选择有具体长度的字符串格式，我们可以通过字符截取来改变变量格式。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
&#x1F50A<b> 重要：注意，英文字符的占位符和中文字符的占位符是不同的。</b>
</div>

> 例如“民初 730 号”，虽然只是六个字符，但可能实际上占了 15 个位置。
> 
> 如果我们只截取 6 个长度，变量就会变成乱码。
> 
> 个人观察到的案号占位符最长大概是 39 个位置，个人为了稳健直接选择的截取 88 个字符符号。
> 
> 这也意味着： 我们需要在清理掉文本中的奇怪符号以后再转化。
> 
> 例如有些法院名字是"`广西壮族自治区柳州市鱼峰区人民法院`"

```stata
 # 截取字符  
 gen judge_fin2 = substr(judge_fin, 1, 45)  
 gen court_name2 = substr(court_name, 1, 88)  
 drop judge_fin court_name  
 rename judge_fin2  judge_fin  
 rename court_name2 court_name
```

### 匹配命令的选择

**多（基础表格）对一时**：`merge` 命令直接使用。

**一（基础表格）対多时**：例如 txt 有一些重复记录，但是不同行的空缺值不同。我们可以使用 `merge` 的追加匹配 `update nogen force`，只在这一行有空缺时，将空缺值的变量匹配上去；非空缺的部分则不更改。

```stata
 clear   
 forvalues j = 1/83 {  
     use "D:\数据合集\原始数据\ans`j'.dta", clear  
     merge 1:m case_wid_str using "C:\Users\PC\Desktop\hzp_project_re\一审二审数据匹配\排序\面板数据\all.dta", update nogen force  
     drop if case_wid == ""  
 duplicates drop case_wid_str , force  
     save "C:\Users\PC\Desktop\hzp_project_re\一审二审数据匹配\排序\面板数据\ans`j'.dta", replace  
 }
```

多对多（基础表格）匹配时：此时使用 `merge` 不再合适，推荐 `joinby`

详细可参考 [Stata命令：joinby VS merge m:m常见问题](https://mp.weixin.qq.com/s/bTFFvihL221zM2MYaGZcuA)

### 循环匹配命令

当我们写循环匹配命令时，数字可能是间断点，例如 data 1、data 3、data 5、data 7...

可以选择使用 python 直接更改文件名字按顺序排序，但容易破坏命名含义。

这里提供个人写的 stata 自然数循环命令：

```stata
 * 定义排除列表  
 global exclude_list 22 50 54 58  105  
 ​  
 * 初始化 valid_files 变量  
 global valid_files  
 ​  
 * 循环遍历文件编号范围，并检查是否在排除列表中  
 forvalues i = 1/119 {  
     local is_excluded 0  
     foreach excl in $exclude_list {  
         if `i' == `excl' {  
             local is_excluded 1  
             break  
         }  
     }  
     if !`is_excluded' {  
         global valid_files $valid_files `i'  
     }  
 }  
 ​  
 * 显示有效的文件编号  
 display "Valid file numbers: $valid_files"  
 ​  
 ​  
 * 循环处理有效的文件编号  
 foreach i of global valid_files {  
     *写入自己的循环匹配代码  
 }
```

### 匹配速度的优化

正常匹配，应该是将 119 个 txt 转化的 dta 匹配，嵌套循环匹配到 ans 1-ans 83 上去。

如果直接嵌套循环匹配，可能需要 4 到 5 天。

匹配耗时过长的原因在于每一次嵌套循环的文件读取时间太长了，而且不同文件之间有重复值。

建议先将 119 个 dta 文件使用 `append` 命令纵向匹配到一起，然后循环匹配到 ans 1 到 ans 83 上去，这样最多只需要 2 天即可完成全部匹配。
​
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #7d637a; background-color: #f6edf5; border-color: #f1e4f0;">
&#x1F4AC<b> 备注：办公室电脑是 stata MP 版本，这个版本的特性是“计算速度根据电脑的核来分配资源”。目前 cpu 有足足 16 核，个人处理过的最大量峰值是 60 g。基本没有问题，只需要耐心等待处理过程中的卡顿。</b>
</div>

## dta 数据的清洗

### 常用文本处理函数

#### 去除空格

例如裁判长（法官）变量，会出现以下情况 `四川 大学`， `四川大学`，`四 川 大 学`。

不同网站的空格符号并不相同，建议使用以下函数：

 * 移除所有特殊字符，包括不可见字符、空白和标点符号  
```stata
 replace judge_fin = ustrregexra(法官名字变量, "[^\p{L}\p{N}]+", "")
```

#### 筛选特定字符

如果变量中含有特定字符则保留

```stata
 keep if strpos(var, "民初") > 0
```

#### 去除特殊字符

Ans 1 到 ans 83 的文本变量夹杂着各种非中文符号，可以使用以下函数去除：

以下是个人筛选出的乱码符号。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #7d637a; background-color: #f6edf5; border-color: #f1e4f0;">
&#x1F4AC<b> 备注：为什么要坚持排除法，而不选择只保留中文字符？ 因为个人尝试时，发现部分中文变量会因此变成乱码。</b>
</div>

```stata
# 定义需要移除的符号列表（包括空格）  
local symbols "ⅩⅩⅩ Ｘ ? ; ；， 《 》 ． ＋ （ ） ( ) & # 1 2 3 4 5 6 7 8 9 0 & A-Z a-z ；？ ＊ ︰ ++  .   XX XXX   ______   ` - +  BRR H imestimes jzwjzwnjzwnjzwjzwnjzwnjzwnjzwjzwjzwjzwnjzwnjzwnjzwjzwnjzwnj jzwnjzwjzwjzwnjzwnjzwnjzwnjzwnjzwjzwjzwjzwnjzwjzwnjzwjzwj spemsp sp emsp ；； *  XX XXX Ｘ ＸＸＸ"  
​  
* 遍历符号列表并移除每个符号及空格  
foreach s of local symbols {  
    replace judge_fin = subinstr(judge_fin, "`s'", "", .)  
}
```
### 正则表达式提取

#### 字符筛选

以裁判长文本变量为例子，

明明变量应该是一个名字，结果出现了一个段落

> 张三人民委托、张三于 2014 年进行审判、张三人民审判员进行裁决、张三代理裁判长进行庭审、张三李四熟记员进行开庭......

![再举例子——法院变量](/img/裁判文书清洗指南.zh-cn-20250113210847789.webp)
换而言之，正确的文本字符应该是特定词汇的前面几个字。

先使用字符长度筛选例子，查看文本格式：

```stata
 *列出字符长度大于14的变量行  
 list var if ustrlen(judge_fin) >= 14
```

然后根据情况**只保留特定字符**。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #a94442; background-color: #f2dede; border-color: #ebccd1;">
&#x26D4<b> 警告：注意顺序！</b>
</div>

> 例如有以下组合
> 
> 张三**于** 2014 年进行庭审
> 
> 张三**代理**审判长**于** 2014 年进行庭审
> 
> 在该变量包含"庭审"两个字时，我们应该先都保留“于”以前的字符，再保留"代理"以前的字符。
> 
> 条件筛选最好找两个字的特征词，这样叫“于庭审”的法官名字几乎不可能出现。

个人使用的顺序，仅供参考：

```stata
 replace judge_fin = ustrregexra(judge_fin, "人民陪审员.*", "") if  strpos(judge_fin, "人民陪审员") > 0  
 replace judge_fin = ustrregexra(judge_fin, "审判员.*", "") if  strpos(judge_fin, "审判员") > 0  
 replace judge_fin = ustrregexra(judge_fin, "独任.*", "") if  strpos(judge_fin, "独任") > 0  
 replace judge_fin = ustrregexra(judge_fin, "陪审员.*", "") if  strpos(judge_fin, "陪审员") > 0  
 replace judge_fin = ustrregexra(judge_fin, "代理.*", "") if  strpos(judge_fin, "代理") > 0  
 replace judge_fin = ustrregexra(judge_fin, "书记员.*", "") if  strpos(judge_fin, "书记员") > 0  
 replace judge_fin = ustrregexra(judge_fin, "助理.*", "") if  strpos(judge_fin, "助理") > 0  
 replace judge_fin = ustrregexra(judge_fin, "审判长.*", "") if  strpos(judge_fin, "审判长") > 0  
 replace judge_fin = ustrregexra(judge_fin, "人民.*", "") if  strpos(judge_fin, "人民") > 0  
 replace judge_fin = ustrregexra(judge_fin, "二.*", "") if  strpos(judge_fin, "年") > 0   
 replace judge_fin = ustrregexra(judge_fin, "适用.*", "") if  strpos(judge_fin, "适用") > 0   
 replace judge_fin = ustrregexra(judge_fin, "于.*", "") if  strpos(judge_fin, "开庭") > 0   
 replace judge_fin = ustrregexra(judge_fin, "对.*", "") if  strpos(judge_fin, "审理") > 0 
```

由于爬虫有时候遇上网站加密，爬虫结果是 `陈*`,，完成以上清洗后只剩下 `陈`，删除单个字符行的函数命令是：

```stata
 *删除只有一个字的，例如本来是*陈  
 drop if ustrregexm(judge_fin, "^[\p{Han}]$")
```

#### 数字提取

例如数据显示 `2.34435元`（需要是字符串变量），我们只想单独提取数字，可以使用以下代码。

```stata
 gen num_var = .  
 replace num_var = real(regexs(1)) if regexm(str_var, "([0-9]+\.[0-9]+|[0-9]+)")
```

顺便一提，如果没有 `real(regexs(1))` 这个参数则表示判断，只会返回 0 和 1，代表不符合或者符合格式。

```stata
 replace num_var =  regexm(str_var, "([0-9]+\.[0-9]+|[0-9]+)")
```

## 例子3 ：python 跨行匹配

### 任务与思路

这里，我需要完成以下工作：

**裁判文书是一个案件截面数据，这里试图还原为法官追踪数据。**

也就是基于时间，将一个法官审判的下一个案子特征，和他\她审理的下一个案件匹配到一起。

由于我需要精准定位到**下一个**案件，而 stata 的匹配并没有筛选功能，此时只能通过 python 操作。

> 跨行处理是 stata 的最大短板。

思路很简单，

生成空白变量，

按照`法院-法官`分组，提取案件时间戳；

（因此不能用分块读取优化速度，可能把同一组的数据块分割了）

在每个组别内部选取最近的时间戳进行赋值；

因为裁判文书只有月份，如果一个月有很多案子，这里我进行了随机分配。

### 代码

以下做的唯一优化是提前设置数据格式。

在 stata 中 `describe` 命令一下，然后导出的 CSV 处理即可直接使用。

未来想要优化可以考虑平行处理，向量化运算。

```python
 import pandas as pd  
 ​  
 # 指定文件路径  
 file_path = r'F:\桌面\pluck样本.csv'  # 注意这里改成了 .csv  
 output_path = r'F:\桌面\pluck样本结果.csv'   # 输出文件也改成 .csv  
 ​  
 # 根据 Stata 文件中定义的数据类型，创建 dtype 字典，并允许整数列包含 NA 值  
 dtype_dict = {  
     'jud_year': 'Int64',  # 注意大写的 I  
     'jud_month': 'Int8',  
     'court': 'Int8',  
     'case_prov': 'str',  
     'case_city': 'str',  
     'win': 'str',  
     'counter_win': 'str',  
     'second': 'Int8',  
     'second_appeal': 'Int8',  
     'rehear': 'Int8',  
     're_appeal': 'Int8',  
     'protest': 'Int8',  
     'claim_am': 'float64',  
     'first_am': 'float64',  
     'second_am': 'float64',  
     're_am': 'float64',  
     'judge_am': 'float64',  
     'first_win': 'str',  
     'second_win': 'str',  
     're_win': 'str',  
     'pla_num': 'Int32',  
     'def_num': 'Int32',  
     'case_wid_str': 'str',  
     'm_sorted_1': 'str',  
     'm_sorted_2': 'str',  
     'm_sorted_3': 'str',  
     'm_sorted_4': 'str',  
     'count_tiao': 'Int32',  
     'total_chars': 'Int64',  
     'clause_count': 'Int32',  
     'm1_jud_year': 'Int64',  
     'm1_jud_month': 'Int8',  
     'm1_win': 'str',  
     'm1_judge_am': 'float64',  
     'm2_jud_year': 'Int64',  
     'm2_jud_month': 'Int8',  
     'm2_win': 'str',  
     'm2_judge_am': 'float64',  
     'm2_m_sorted_1': 'str',  
     'm3_jud_year': 'Int64',  
     'm3_jud_month': 'Int8',  
     'm3_win': 'str',  
     'm3_judge_am': 'float64',  
     'm4_jud_year': 'Int64',  
     'm4_jud_month': 'Int8',  
     'm4_win': 'str',  
     'm4_judge_am': 'float64',  
     'judge_fin': 'str',  
     'court_name': 'str',  
     'cumulative_co~t': 'float64',  
     'work_experien~s': 'float64',  
     'combo_count': 'float64'  
 }  
 ​  
 try:  
     # 尝试使用 utf-8 编码读取文件，并跳过有问题的行  
     data = pd.read_csv(file_path, sep=',', encoding='utf-8', on_bad_lines='skip',   
                        encoding_errors='replace', dtype=dtype_dict)  
     print("文件成功加载（使用 UTF-8 编码，并跳过有问题的行）。")  
 except Exception as e:  
     print(f"读取文件时发生错误: {e}")  
     raise  # 抛出异常以停止程序执行，除非有进一步处理  
 ​  
 # 初始化新列  
 data['y_win'] = pd.NA  
 data['y_case_wid_str'] = pd.NA  
 data['y_judge_am'] = pd.NA  
 ​  
 # 定义所有时间列  
 time_columns = ['jud_year', 'jud_month', 'm1_jud_year', 'm1_jud_month',   
                 'm2_jud_year', 'm2_jud_month', 'm3_jud_year', 'm3_jud_month',   
                 'm4_jud_year', 'm4_jud_month']  
 ​  
 # 获取最晚上诉时间  
 def get_latest_appeal_time(row):  
     times = [  
         (row[time_columns[i]], row[time_columns[i+1]])   
         for i in range(0, len(time_columns), 2)  
         if pd.notna(row[time_columns[i]]) and pd.notna(row[time_columns[i+1]])  
     ]  
     return max(times) if times else (None, None)  
 ​  
 # 创建每行的最晚上诉时间列  
 data[['latest_appeal_year', 'latest_appeal_month']] = pd.DataFrame(  
     data.apply(get_latest_appeal_time, axis=1).tolist()  
 )  
 ​  
 # 按法院、法官和时间排序  
 data = data.sort_values(by=['court_name', 'judge_fin', 'jud_year', 'jud_month']).reset_index(drop=True)  
 ​  
 # 分组处理  
 grouped = data.groupby(['court_name', 'judge_fin'])  
 ​  
 for group, group_data in grouped:  
     for idx in range(len(group_data)):  
         current_case = group_data.iloc[idx]  
         latest_appeal_year, latest_appeal_month = current_case['latest_appeal_year'], current_case['latest_appeal_month']  
 ​  
         # 跳过无有效时间的情况  
         if pd.isna(latest_appeal_year) or pd.isna(latest_appeal_month):  
             continue  
 ​  
         # 筛选下一个案件：年份大于或（年份相等且月份大于）  
         potential_next_cases = group_data.iloc[idx+1:]  
         potential_next_cases = potential_next_cases[  
             (potential_next_cases['jud_year'] > latest_appeal_year) |  
             ((potential_next_cases['jud_year'] == latest_appeal_year) &   
              (potential_next_cases['jud_month'] > latest_appeal_month))  
         ].sort_values(by=['jud_year', 'jud_month'])  
 ​  
         if not potential_next_cases.empty:  
             # 选择最早的一个案件，如果存在多个相同日期的案件，则随机选择一个  
             earliest_cases = potential_next_cases[  
                 (potential_next_cases['jud_year'] == potential_next_cases.iloc[0]['jud_year']) &  
                 (potential_next_cases['jud_month'] == potential_next_cases.iloc[0]['jud_month'])  
             ]  
 ​  
             if not earliest_cases.empty:  
                 selected_case = earliest_cases.sample(n=1).iloc[0]  
                 data.loc[current_case.name, 'y_win'] = selected_case['win']  
                 data.loc[current_case.name, 'y_case_wid_str'] = selected_case['case_wid_str']  
                 data.loc[current_case.name, 'y_judge_am'] = selected_case['judge_am']  
 ​  
 # 删除临时列  
 data.drop(columns=['latest_appeal_year', 'latest_appeal_month'], inplace=True)  
 ​  
 # 保存结果到新文件  
 try:  
       
     data.to_csv(output_path, sep=',', index=False, encoding='utf-8')  # 修改为逗号分隔  
     print(f"处理完成，结果已保存至: {output_path}")  
 except Exception as e:  
     print(f"保存文件时发生错误: {e}")  
 ​
```

### 提醒

建议先将 stata 数据导出为 csv 格式。

最大的问题是**乱码**。


![如图](/img/裁判文书清洗指南.zh-cn-20250113211041112.webp)
csv 乱码了。因为提取的 txt 不是 utf 8 格式。

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
&#x1F628<b> 注意：一定要保证CSV 文件默认格式刷 UTF-8 ，然后进行处理。</b>
</div>
