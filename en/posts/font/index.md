# The Custom Font in Hugo


{{< music netease song 472045267>}}

The method to customize fonts in each Hugo theme varies, and there are few resources online explaining how to modify fonts in Hugo. Here, we'll introduce how to change fonts in the [LoveIt theme](https://hugoloveit.com/zh-cn/).

## Two Methods of Modification

According to the LoveIt documentation, customizing fonts requires the **extended** version of Hugo, and there are two methods:

1. In `assets/css/_custom.scss`, you can add CSS style code to customize the style.
2. In `assets/css/_override.scss`, you can override variables in `themes/LoveIt/assets/css/_variables.scss` to customize the style.

The first method, writing CSS styles by yourself, is not very beginner-friendly. The second method involves setting font variables.

Here, we'll focus on the second method, which involves using the [Google Fonts](https://fonts.google.com/) API to import fonts.

## Set Font Variables

Open the `_override.scss` file located in the `<YourWebsite>/assets/css` directory. Here, you can override the font variable settings of the theme.

> If you don't have an `_override.scss` file, you can create one yourself. Alternatively, you can copy the `css` folder from `themes\LoveIt\assets` to the `<YourWebsite>\assets` directory. Once you have it open, you'll find two key files — `_variables.scss` and `_override.scss`.

`_variables.scss`: This file is used to define font variables. For example, the website title font is a variable area; the directory font is another variable area. You can change the font for each area by modifying the corresponding variables in this file.

For example, if the default title font is set to a sans-serif font, and you want to make it more decorative, you can modify the corresponding variable in the `_variables.scss` file to specify a different font family or style.

![HeiTi](/img/Hugo自定义字体.zh-cn-20240523125813891.webp)

In `<YourWebsite>\assets\css\override.scss`, input the following code:

```
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif+SC&display=swap');
$header-title-font-family:Ma Shan Zheng, Madimi One;
$header-title-font-size: 35px;
$header-title-font-height: 2rem;
```

![Ma Shan Zheng](/img/Hugo自定义字体.zh-cn-20240523125828278.webp)

> - @import url: The API for a specific font.
> - $header-title-font-family: The name of the font.
> - $header-title-font-size: The font size.
> - $header-title-font-height: The line height.

## Understanding Parameters

### Font Variable Parameters

> See `themes\LoveIt\assets_variables.scss` for details on font variables.
>
> - `$global-font`: Represents the global font variable.
> - `$header-title`: Represents the font variable for webpage titles.
> - `$toc-title`: Represents the font variable for table of contents.
> - `family\size\height`: Corresponds to name, size, and height.
> - `$font-family: Ma Shan Zheng, Madimi One;`: When multiple font names are present, it indicates priority from left to right for font selection.

### The Google Fonts API

After accessing the [Google Fonts website](https://fonts.google.com/), choose the desired fonts, then click on **Get font** in the upper right corner to package them. Continue selecting all the fonts you want, and once you're done, click on the **shopping cart icon** in the top right corner.

![fonts.google](/img/Hugo自定义字体.zh-cn-20240523125918877.webp)

Then click on **Get embed code**. Choose `Web` - `@import`, which provides the corresponding API code.

![Get embed code](/img/Hugo自定义字体.zh-cn-20240523125942865.webp)

<style>
@import url ('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital, wght@0 ,300; 0,400; 0,700; 0,900; 1,300; 1,400; 1,700; 1,900&family=Noto+Serif+SC&display=swap')
</style>
The code shown in the image corresponds to the API call. It also provides the name of each font.

![ API](/img/Hugo自定义字体.zh-cn-20240523130007169.webp)



### The fonts used on this site 

```
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Madimi+One&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif+SC&display=swap');

$header-title-font-family:Ma Shan Zheng, Madimi One;
$header-title-font-size: 35px;
$header-title-font-height: 2rem;

$global-font-family: Noto Serif SC ,ZCOOL KuaiLe, Merriweather;
$global-font-size: 18px;
$global-font-height: 4rem;

$toc-title-font-size: 25px; 
$toc-content-font-size: 20px ;
```

The local preview worked fine, but when I uploaded to GitHub Pages, the about page encountered issues, possibly due to exceeding size limits or similar issues. So, I decided to simply delete the "about" folder under the "themes" directory.

## Reference

[loveit主题文档](https://hugoloveit.com/)

[切换主题——从PaperMod到LoveIt](https://woodencross.cn/%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%E4%BB%8Epapermod%E5%88%B0loveit/#%E5%9B%BE%E7%89%87%E7%9B%B8%E5%85%B3)

[hugo自定义全局字体](https://blog.gezi.men/p/hugo-custom-global-font/)

[Hugo 博客自定义优化](https://shishuochen.github.io/2022/cpvuqozuc/)

[LoveIt主题美化与博客功能增强](https://lewky233.top/posts/hugo-3.html/)


