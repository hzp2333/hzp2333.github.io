# Setting Up Giscus Comment Section with Hugo


Nowadays, there are many mature solutions for comments in Hugo. Waline is powerful and easy to use, but it's a bit unfriendly for newcomers like me (for example, I don't know how to configure Waline to automatically switch between Chinese and English); Gitalk uses the Issues section of a GitHub repository as the comment area, which is easy to set up but has some permission grant issues (as discussed here [discussion](https://www.v2ex.com/t/535608)). Therefore, I choose Giscus—simple to set up and secure.

Environment: [Hugo Enhanced Edition (V0.123.7)](https://github.com/gohugoio/hugo/releases/tag/v0.123.7) + Windows 64 AMD + [LoveIt Theme](https://hugoloveit.com/zh-cn/)

## Creating a GitHub Repository as the Comment Area

![Create repository on GitHub homepage](/img/Hugo搭建Giscus评论区.zh-cn-20240523125357558.webp)

![Must be Public](/img/Hugo搭建Giscus评论区.zh-cn-20240523125412376.webp)

After selecting the options, click "Create repository" to create it. Once created, enter the repository and enable Discussions to open the discussion area.

![Repository settings](/img/Hugo搭建Giscus评论区.zh-cn-20240523125428948.webp)

## Enter Giscus Official Website to Obtain the Code

Go to the [Giscus](https://github.com/apps/giscus) official website, click "Install," and enter the repository you just created.

![If forgotten, you can check the repository name in the repository settings](/img/Hugo搭建Giscus评论区.zh-cn-20240523125444871.webp)

For the settings, I chose the default:

- **Page ↔️ Discussion Mapping:** Select "Discussion title contains the page's `pathname`"
- **Discussion Category:** Select "Announcements"
- **Theme:** Select "User-recommended color scheme"

After checking, the page will display the corresponding **call code**:

Pay special attention to `data-repo`, `data-repo-id`, `data-category`, `data-category-id`, and `data-mapping` values.


```js
<script src="https://giscus.app/client.js"
        data-repo="*************" <!-- Note your repository name -->
        data-repo-id="*************" <!-- Note your code -->
        data-category="Announcements" <!-- Note your configuration model -->
        data-category-id="*************" <!-- Note your code -->
        data-mapping="pathname" <!-- Usually pathname -->
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="" <!-- Default language, recommended to leave empty, will automatically use the website language -->
        crossorigin="anonymous"
        async>
</script>
```

## Hugo Configuration

### Modify the toml Configuration

In the `config.toml` file of your personal website project, add the following content:

```js
[params.page.comment]
   enable = true       
[params.page.comment.giscus]   

  # You can refer to the official documentation to use the following configurations   
  enable = true   
  repo = "**********"   
  repoId = "**************"   
  category = "Announcements"   
  categoryId = "***************"   
  # <your_repo> corresponds to the data-repo on the official website   
  # <your_repoId> corresponds to the data-repo-id on the official website   
  # <your_category> corresponds to the data-category on the official website   
  # <your_categoryId> corresponds to the data-category-id on the official website
  # Leave empty to automatically adapt to the current theme i18n configuration   
  lang = ""   
  mapping = "pathname"   
  # <your_mapping> corresponds to the data-mapping on the official website   
  reactionsEnabled = "1"   
  emitMetadata = "0"   
  inputPosition = "bottom"   
  lazyLoading = false   
  lightTheme = "light"   
  darkTheme = "dark_dimmed"
```

## Hugo Rendering

`hugo serve` is the local preview environment and will not enable the production environment.

Start `hugo serve -e production` to render and start the production environment, enabling the comment section.

![Personally, I think the style is better than gitalk. Below is the dark mode and Chinese-English effect](/img/Hugo搭建Giscus评论区.zh-cn-20240703115100547.webp)

## Pay Attention to Version Control

Follow the above method strictly. Using the LoveIt theme, but the comment section did not appear. It might be due to version mismatch. [LoveIt](https://github.com/dillonzq/LoveIt) page, directly download and unzip via code. The latest release code is actually several versions behind! It does not support giscus.
