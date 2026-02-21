# Hugo 美化 1 ：自定义字体




每个 hugo 主题设置字体的方法都不同，而网上很少人介绍 hugo 怎么修改字体。这里要介绍的是 [loveit主题](https://hugoloveit.com/zh-cn/)更换字体的方法。

## 两种修改方法

按照 loveit 文档所言，字体自定义需要 Hugo **extended** 版本，有两种方法：

- 在 `assets/css/_custom.scss` 中, 可以添加 CSS 样式代码以自定义样式。
- 在 `assets/css/_override.scss` 中, 可以覆盖 `themes/LoveIt/assets/css/_variables.scss` 中的变量以自定义样式。

第一种方法自己写 CSS 样式对新手太不友好了，第二种方法则设置字体变量就行。

这里介绍第二种方法，作用过程是使用 [google fonts](https://fonts.google.com/) 的 API 来引入字体。

## 设置字体变量

打开 `<自己网站>/assetscss` 里的 `_override.scss` 文件，在这里就可以覆盖主题的字体变量设置。

> 没有 `_override.scss` 就自己创建一个。或者将 `themes\LoveIt\assets` 中的 `css` 文件夹复制替换到 `<自己网站>\assets` 目录位置下。打开后可以发现两个关键文件—— `_variables.scss` 和 `_override.scss`。

`_variables.scss`：用于定义字体变量，例如网站标题字体是一块变量区域；目录字体是一块变量区域；想要改变哪块区域就改变哪里的变量。

例如默认标题字段是黑体，我想改的更花哨一点

![黑体](/img/Hugo自定义字体.zh-cn-20240523125813891.webp)

在 `<自己网站>\assetscss\override.scss` 中输入如下代码：

```css
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif+SC&display=swap');
$header-title-font-family:Ma Shan Zheng, Madimi One;
$header-title-font-size: 35px;
$header-title-font-height: 2rem;
```

![Ma Shan Zheng字体](/img/Hugo自定义字体.zh-cn-20240523125828278.webp)

> - @import url: 特定字体的 API
> - $header-title-font-family: 字体名称
> - $header-title-font-size: 字体大小
> - $header-title-font-height: 行高

## 认识参数

### 字体变量参数

详见 `themes\LoveIt\assets_variables.scss`，文件中交代了字体变量。

> - `$global-font` 代表全局字体变量。
> - `$header-title` 代表网页标题字体变量。
> - `$toc-title` 代表目录字体变量。
> - `family\size\height` 对应名称、大小、行高。
> - `$font-family:Ma Shan Zheng, Madimi One;` 多个字体名称同时存在，代表从左到右优先选择哪个字体。

### 谷歌字体 API

进入[谷歌字体网站](https://fonts.google.com/)后，选好自己想要的字体，点击右上角的**Get font**打包，然后接着选，选完自己想要的全部字体后点击最右上角的**包包图案**。

![fonts.google](/img/Hugo自定义字体.zh-cn-20240523125918877.webp)

然后点击**Get embed code**。选择 `web` - `@import`, 里面提供了对应的 api代码。

![Get embed code](/img/Hugo自定义字体.zh-cn-20240523125942865.webp)

<style>
@import url ('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital, wght@0 ,300; 0,400; 0,700; 0,900; 1,300; 1,400; 1,700; 1,900&family=Noto+Serif+SC&display=swap')
</style>

以上图中代码就是对应的调用 api。里面也提供了每个字体的名称。
![选择web-@import](/img/Hugo自定义字体.zh-cn-20240523130007169.webp)

### 中文字体 api

中文字体 api 也可考虑[字图网](https://chinese-font.netlify.app/cdn/)。

国内开源字体比较火的是[霞鹜文楷](https://github.com/lxgw/LxgwWenKai)。
### 本站所用字体

```css
// ==============================
// Override Variables
// 覆盖变量
// ==============================


@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif+SC&display=swap');

@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');

@import url('https://cdn.staticfile.org/lxgw-wenkai-webfont/1.6.0/style.css');

@import url('https://chinese-fonts-cdn.deno.dev/packages/jhlst/dist/京華老宋体v2_002/result.css');




$header-title-font-family: Ma Shan Zheng, Madimi One;
$header-title-font-size: 35px;
$header-title-font-height: 2rem;

$global-font-family: KingHwa_OldSong , Noto Serif SC , Merriweather;
$global-font-size: 18px;
$global-font-height: 4rem;


$toc-title-font-size: 25px; 
$toc-content-font-size: 20px ;

```

本地预览没有问题，后来上传 github pages 时，about 页面出问题了，可能是大小超出限制之类的，我就干脆把 themes 文件夹下的 about 文件夹删除了。

## 参考链接

[loveit主题文档](https://hugoloveit.com/)

[切换主题——从PaperMod到LoveIt](https://woodencross.cn/%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%E4%BB%8Epapermod%E5%88%B0loveit/#%E5%9B%BE%E7%89%87%E7%9B%B8%E5%85%B3)

[hugo自定义全局字体](https://blog.gezi.men/p/hugo-custom-global-font/)

[Hugo 博客自定义优化](https://shishuochen.github.io/2022/cpvuqozuc/)

[LoveIt主题美化与博客功能增强](https://lewky233.top/posts/hugo-3.html/)

