# Using Obsidian for Literature Reading and Blog Writing



I only started using Obsidian recently, so this post is a quick record of my workflow.

I mainly use Obsidian to write and manage blog posts and literature-reading notes.

## Obsidian and plugin usage

- Forum: [https://forum-zh.obsidian.md/](https://forum-zh.obsidian.md/)

- Recommended tutorial: [An Incomplete Beginner Guide to Obsidian](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/obsidian%E6%96%B0%E6%89%8B%E4%B8%8D%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97+by+windily)

Obsidian represents the idea of <font color="#ff0000">bidirectional linking</font>: **notes can connect to each other and gradually form a network of knowledge**. For me, the real reason to use Obsidian is its absurdly good plugin ecosystem. It makes writing and organizing notes genuinely enjoyable.

A quick note: the minimum entry requirement is knowing basic Markdown syntax.

### Downloading the software

Download the app from the official website: [https://obsidian.md/](https://obsidian.md/)

After installing it, the startup screen looks like this. A vault is simply the folder where your notes are stored. In my case, I keep separate vaults for blog writing and literature notes.
![Startup screen](/img/Obsidian配合文献阅读和博客-20240524184612776.webp)
After you choose a vault location, an extra `.obsidian` folder appears inside it. That folder stores the app settings, including plugins, interface style, and so on.

My own layout looks like this:
![My interface layout](/img/Obsidian配合文献阅读和博客-20240524191650737.webp)

The rich have a second monitor. The rest of us make do with split view 😤

>Obsidian settings:
>
>Just replace the `.obsidian` folder in the vault.
>
>You can download [my `.obsidian` config](https://github.com/hzp2333/hzp2333.github.io/blob/master/.obsidian) from my GitHub repository.
>
>After downloading it, remember to unzip `themes.zip`.


Each vault has its own settings. That means every vault can use a completely different theme and plugin setup. I really like this, because writing blog posts and managing notes often call for different tools, so independent vault settings feel necessary.

### Interface fonts

You can change the interface font in Settings -> Appearance -> Font.

### About bidirectional links

- **Document properties**: if the first line is blank, type `---` three times to add document properties. If the first line is not blank, `---` creates a **horizontal rule** instead.
- **Adding tags**: `#tag1`, `#tag2`
- **Links**:
```obsidian
Link to a note: [[文件名]]
Link to a heading in a note: [[ # ]]
Link to a paragraph (block) in a note: [[ # ^ ]]
Create an alias for a link (keyword): [[ | 关键词]]
Link to an external file such as Evernote: [关键词](链接)
Add an image: ![[]] or ![图片标题](图片引用路径)
```
## Plugin usage

After replacing the `.obsidian` folder, open the vault, click Trust author, and turn off safe mode.
![Settings page: you can change themes under Appearance, and install or enable community plugins here](/img/Obsidian配合文献阅读和博客-20240524194922250.webp)
Click the gear icon labeled `Settings` in the lower-left corner to open all installed plugins.
You can also check for plugin updates and browse the community plugin marketplace (**you need a VPN/proxy for that**).

### Command

Most plugins are easy enough to use once they show up in the interface. The rest are mainly driven by **keyboard commands**.

Click the `>_` icon in the far-left sidebar (shortcut: `ctrl+p`), type the command you want in the pop-up, and run the plugin from there.
![Some plugins need to be called through commands](/img/Obsidian配合文献阅读和博客-20240524200110588.webp)

The Command plugin can also help you add quick-access buttons for commands.

![Where you add a command button](/img/Obsidian配合文献阅读和博客.zh-cn-20240525005836916.webp)

Open the right-click menu, or click the three-dot icon at the top right of the note pane, then choose Add command. After going through `choose command -> choose icon -> choose name`, the shortcut button is added.

### Pandoc

It is not enough to install only the plugin.

Obsidian notes use Markdown syntax and can export to PDF. Pandoc lets you export to more formats too, such as LaTeX, epub, and HTML.

There are two steps:

Go to the [official site](https://www.pandoc.org/installing.html) and download the Pandoc application itself.

Then install and enable the Pandoc plugin and the Enhancing export plugin. In the settings for both plugins, fill in the Pandoc file path and set the export directory.

After that, an `Export as...` option will appear under the three-dot menu in the top-right corner of the note pane.

### Easy typing

This is one of the main plugins that sold me on Obsidian. When you write documents that mix Chinese and English, there are lots of little conventions to keep track of. For example:

- Put spaces between Chinese text and numbers or English words;
- Switching input methods is annoying;
- English sentences should start with a capital letter.

With easy typing enabled, numbers and English words are automatically spaced in Chinese text; typing a Chinese punctuation mark twice turns it into the English version; and the first letter of an English sentence is capitalized automatically...

### Annotator

Obsidian itself cannot read PDF files directly, so people usually use the annotator plugin.

In a new note, type `---` on the first line to add document properties, then add `annotation-target`, click the field that appears, and choose the PDF you want to read. Close and reopen the note, and it turns into a PDF reading interface that also **supports annotations**.
![Example of document properties](/img/Obsidian配合文献阅读和博客.zh-cn-20240524205940959.webp)

### Copilot chat

There are roughly three ways people integrate AI into Obsidian. One is direct embedding, where you continue writing notes from context through commands. Another focuses on built-in file search and note-style management.

The third keeps the conversation in a sidebar. Personally, I recommend that third route, and Copilot chat is the plugin I would pick.

After installation, open the settings page.

For Default model, I recommend choosing OPEENROUTER. AI. It is basically a broker that lets you access different models through one service.

![Scroll down to the model settings and choose the model you want. I recommend OPEENROUTER. AI](/img/Obsidian配合文献阅读和博客.zh-cn-20240526165250508.webp)

Scroll down a bit further and you will find the place to enter the OPEENROUTER API.

![Scroll down to find the model settings and choose the one you want](/img/Obsidian配合文献阅读和博客.zh-cn-20240526165713463.webp)
Openrouter. Ai API key [can be generated here](https://openrouter.ai/keys)

The model list is [here](https://openrouter.ai/models?q=free):

You are not limited to GPT-3.5 either. Just search for the keyword `free`, and the listed AI models can all be used for free.

![Choose the free model name you want](/img/Obsidian配合文献阅读和博客.zh-cn-20240526170748976.webp)

For example, copy one of the following model names into `openrouter model`:

```
openchat/openchat-7b:free
meta-llama/llama-3-8b-instruct:free
google/gemma-7b-it:free
gryphe/mythomist-7b:free
```

Click Copilot chat in the left sidebar, and an AI chat panel will appear on the right. It can read your notes too.
### Other plugins

Better word count: counts Chinese characters more accurately (Obsidian already has a word count in the bottom-right corner).

Footnote shortcut: gives you a better footnote editing experience. It can add footnotes through commands automatically, and if you run the footnote command again on an existing footnote, you can jump between the footnote marker and the footnote content at the end of the article.

Word Splitting for Simplified Chinese in Edit Mode and Vim Mode: when you double-click a sentence, this plugin does a better job recognizing Chinese word boundaries.

## Obsidian and mobile devices

[How to sync Obsidian files in March 2022 (a stage-by-stage summary)](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/2022%E5%B9%B43%E6%9C%88%E5%A6%82%E4%BD%95%E5%90%8C%E6%AD%A5obsidian%E6%96%87%E4%BB%B6%EF%BC%88%E9%98%B6%E6%AE%B5%E6%80%A7%E6%80%BB%E7%BB%93%EF%BC%89)

One of Obsidian's weak spots is cross-device syncing: it can be fiddly and unreliable. If you can afford the official service, that is still the best option.

Short version:

### Cross-platform sync: Remotely save 

[Remotely save (sync plugin)](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Remotely+save%EF%BC%88%E5%90%8C%E6%AD%A5%E6%8F%92%E4%BB%B6%EF%BC%89) has been one of the most discussed plugins lately, and the tutorial page already collects a lot of material:

- [Obsidian sync: Remotely Save S3 setup guide by 恐咖兵糖](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian+%E5%90%8C%E6%AD%A5+Remotely+Save+S3+%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97+by+%E6%81%90%E5%92%96%E5%85%B5%E7%B3%96)
- [Third-party sync plugin (an introduction to Remotely save) by 软通达](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E7%AC%AC%E4%B8%89%E6%96%B9%E5%90%8C%E6%AD%A5%E6%8F%92%E4%BB%B6%EF%BC%88Remotely+save%E4%BB%8B%E7%BB%8D%EF%BC%89+by+%E8%BD%AF%E9%80%9A%E8%BE%BE): Dropbox
- ~~[Using the Obsidian Remotely Save plugin to sync desktop and mobile by yaozhuwa](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian+Remotely+Save+%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E7%94%B5%E8%84%91%E5%92%8C%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%90%8C%E6%AD%A5+by+yaozhuwa): OneDrive method~~

(In my own tests, the plain Remotely save + OneDrive setup was already broken. On Android, OneDrive folder recognition has issues, so you need a third-party transfer tool such as FolderSync to act as a OneDrive middle layer, and even then you still have to trigger syncing manually.)

- [The most comfortable third-party multi-device sync setup for Obsidian by 维客笔记](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E6%9C%80%E8%88%92%E6%9C%8D%E7%9A%84Obsidian%E7%AC%AC%E4%B8%89%E6%96%B9%E5%A4%9A%E7%AB%AF%E5%90%8C%E6%AD%A5+by+%E7%BB%B4%E5%AE%A2%E7%AC%94%E8%AE%B0)：Dropbox
- [Tutorial on pairing the Remotely plugin with Tencent Cloud COS by 八宝周](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/remotely%E6%8F%92%E4%BB%B6%E6%90%AD%E9%85%8D%E8%85%BE%E8%AE%AF%E4%BA%91cos%E6%95%99%E7%A8%8B+by+%E5%85%AB%E5%AE%9D%E5%91%A8)：Tencent Cloud, S3
- [Using the Remotely save plugin with Obsidian to sync via Nutstore by BCS](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian%E9%80%9A%E8%BF%87Remotely+save%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%9D%9A%E6%9E%9C%E4%BA%91%E5%90%8C%E6%AD%A5+by+BCS)：Nutstore, WebDAV
- [Using Remotely Save with Alibaba Cloud OSS for multi-platform sync by zm](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Obsidian%E4%BD%BF%E7%94%A8Remotely+Save+%E5%92%8C%E9%98%BF%E9%87%8C%E4%BA%91+OSS+%E5%AE%9E%E7%8E%B0%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%90%8C%E6%AD%A5+by+zm)：Alibaba Cloud OSS, S3
### PC and Android sync 

On Windows and Android, you can consider [Syncthing (sync software)](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/Syncthing%EF%BC%88%E5%90%8C%E6%AD%A5%E8%BD%AF%E4%BB%B6%EF%BC%89) or a similar option such as [微力同步](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/%E5%BE%AE%E5%8A%9B%E5%90%8C%E6%AD%A5). See also [Using Tencent Cloud to build Syncthing for syncing Obsidian by 软通达](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AF%E4%BA%91%E6%90%AD%E5%BB%BASyncthing%E6%9D%A5%E5%90%8C%E6%AD%A5obsidian+by+%E8%BD%AF%E9%80%9A%E8%BE%BE).

### Mac and iOS sync

You can consider [iCloud](https://publish.obsidian.md/chinesehelp/03+%E6%95%99%E7%A8%8B/iCloud). I do not have the devices myself, so I have not tried it.

### Computer-to-computer sync only

I recommend sync tools such as [Nutstore](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E5%9D%9A%E6%9E%9C%E4%BA%91). Just keep two things in mind:

1. Do not keep Obsidian and the sync software open on both machines at the same time, or saving errors may occur.
2. Make sure you understand the difference between a sync disk and a storage disk (cloud drive).
## Hugo and Obsidian

Recommended reading:

- [Best practices for writing with Hugo](https://blog.zhangyingwei.com/posts/2022m4d11h19m42s28/)
- [One-click blog publishing with Obsidian](https://yaofun.top/posts/2024/03/%E4%BD%BF%E7%94%A8-obsidian-%E4%B8%80%E9%94%AE%E5%8F%91%E5%B8%83%E5%8D%9A%E5%AE%A2/)
- [Obsidian + Hugo + Cloudflare: making blog publishing ridiculously simple](https://lillianwho.com/posts/obsidian-hugo-cloudflare/)

I would also recommend the hugo preview plugin. It basically loads an online blog preview page inside Obsidian. Once the plugin is enabled, click the <font color="#00b0f0">blue square</font> in the lower-right corner to open it. In practice, it is just importing a specific webpage into Obsidian for preview.

![Best of both worlds!](/img/Obsidian配合文献阅读和博客.zh-cn-20240524211004569.webp)

Another plugin worth mentioning is mermaid. The LoveIt Hugo theme supports flowchart rendering, and I can never remember every last detail of the syntax, so this plugin helps a lot.

I still use local image references for now (I just like managing files locally 😀),
- **imge converter** can automatically compress, rename, and convert image formats;
- the **clear unsed images** plugin can help clean up local images that are no longer referenced.

As for changing **image reference paths** (copying post/img to static/img) and pushing the blog to Git, I do not use Obsidian's Git plugin. I let `.bat` scripts handle both jobs instead (honestly, just letting GPT write them is enough), and it is simple. That way I can focus on writing.

As for creating new blog templates, there is no need to set up a quick plugin. Obsidian already has built-in template support: just create a template folder, put your Markdown template files in it, and when you create a new post, click the corresponding template-import icon in the left sidebar.

## Zotero and Obsidian

Recommended reading: [Zotero + Obsidian workflow roundup - the most complete 2023 guide](https://zhuanlan.zhihu.com/p/651144180)

The sad part is that the best solutions are usually paid 🤧.

When Zotero 7 had just been updated, I paid for a plugin from Qingning Academic. It let me move Zotero annotation notes into Obsidian almost seamlessly.

![Qingning Academic plugin integration. If you want image transfer to feel truly seamless, you pretty much need to set up image hosting no matter what](/img/Obsidian配合文献阅读和博客.zh-cn-20240525000044724.webp)


By 2024, Zotero had split into Zotero 6 and Zotero 7, and the author of the mdnote plugin had explicitly said they would not keep improving compatibility for Zotero 7. That left even fewer options.

Another free setup I am currently using is Zotero's Better Note plugin together with Obsidian's Zotero Integration plugin.

[My Zotero Better Note template and tutorial](https://blog.huaxiangshan.com/zh-cn/posts/zoteronote/)

Create literature notes with Better Note in Zotero, then import those notes into Obsidian through the Zotero Integration plugin for further organization.

## The note-taking app debate

A lot of people online compare Notion, Obsidian, and other note-taking apps. I picked Obsidian mainly for its rich open-source plugin ecosystem and the peace of mind that comes with local storage.

That said, the usual complaint about Obsidian is easy enough to understand: there are too many plugins, the features can get flashy, and the learning curve is not exactly low, so the priorities sometimes feel blurred. Even so, I still have not used Obsidian to build a proper knowledge graph. Just using it as a writing tool already feels great.

Beyond that, Obsidian was originally meant to help people build a knowledge system. What inspires me in other people's setups is not how pretty their notes look, but how they use Obsidian to carry out their own way of organizing information🦾. Using plugins to rotate periodic notes for review; building keyword-based note blocks and expanding them over time; connecting Obsidian with other tools to refine a workflow; combining note structure with design...

