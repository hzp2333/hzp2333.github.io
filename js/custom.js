


/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '智慧树上智慧果';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '智慧树下你和我';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}

/* 站点运行时间 */
// 获取当前语言设置
function getCurrentLanguage() {
    // 假设你有一个全局变量或方法来获取当前语言
    return document.documentElement.lang || 'zh'; // 默认返回中文
}

// 更新站点运行时间
function runtime() {
    window.setTimeout(runtime, 1000);
    let startTime = new Date('02/18/2024 15:00:00');
	//这里写自己的建站时间
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));

    // 根据语言设置选择对应的文本
    let language = getCurrentLanguage();
    let runtimeText;

    if (language === 'zh') {
        runtimeText = '本站已运行<i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' 天 '
            + ((hours < 10) ? '0' : '') + hours + ' 时 '
            + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
            + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
    } else if (language === 'en') {
        runtimeText = 'Running for <i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' d '
            + ((hours < 10) ? '0' : '') + hours + ' h '
            + ((minutes < 10) ? '0' : '') + minutes + ' m '
            + ((seconds < 10) ? '0' : '') + seconds + ' s ';
    } else {
        // 默认文本（可以选择其他语言或保留中文/英文）
        runtimeText = '本站已运行<i class="far fa-clock fa-fw"></i> '
            + ((days < 10) ? '0' : '') + days + ' 天 '
            + ((hours < 10) ? '0' : '') + hours + ' 时 '
            + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
            + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
    }

    // 更新页面上的内容
    document.getElementById('run-time').innerHTML = runtimeText;
}

runtime();

/* 照片墙优化配置 */
document.addEventListener('DOMContentLoaded', function() {
  // 初始化lightgallery
  const lightGalleryElements = document.querySelectorAll('.lightgallery');

  if (lightGalleryElements.length > 0) {
    lightGallery(lightGalleryElements, {
      plugins: [lgThumbnail, lgZoom],
      selector: '.lightgallery',
      speed: 400,
      hideBarsDelay: 2000,
      allowMediaOverlap: true,
      exThumbImage: 'data-thumbnail',
      toggleThumb: true,
      // 自定义配置
      download: false, // 禁用下载
      zoom: true, // 启用缩放
      thumbnail: true, // 启用缩略图
      autoplay: false, // 禁用自动播放
      loop: true, // 循环播放
      // 自定义动画
      cssEasing: 'ease',
      easing: 'linear',
      // 自定义控制按钮
      controls: true,
      closeBtn: true,
      fullscreen: true,
      // 缩略图配置
      thumbWidth: 80,
      thumbHeight: 60,
      thumbMargin: 10,
      // 缩放配置
      zoom: {
        enabled: true,
        maxZoom: 5,
        minZoom: 0.5,
        zoomLevel: 2,
        scale: 1,
        zoomPosition: 'original',
        lens: {
          enabled: true,
          size: 100,
          border: '1px solid #fff',
          opacity: 0.4
        }
      },
      // 事件回调
      onOpen: function() {
        console.log('LightGallery opened');
      },
      onClose: function() {
        console.log('LightGallery closed');
      },
      onSlideLoad: function() {
        console.log('Slide loaded');
      },
      onSlideBeforeChange: function() {
        console.log('Slide about to change');
      },
      onSlideAfterChange: function() {
        console.log('Slide changed');
      }
    });
  }

  // 添加图片预加载
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    const src = img.getAttribute('data-src');
    if (src) {
      const newImg = new Image();
      newImg.onload = function() {
        img.src = src;
        img.classList.remove('lazyload');
        img.classList.add('lazyloaded');
      };
      newImg.src = src;
    }
  });

  // 添加图片加载错误处理
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = '/images/default.jpg'; // 替换为默认图片路径
      this.alt = '图片加载失败';
    });
  });

  // 添加键盘导航
  document.addEventListener('keydown', function(e) {
    const lightGallery = document.querySelector('.lg-outer');
    if (lightGallery) {
      if (e.key === 'Escape') {
        lightGallery.closeGallery();
      }
      if (e.key === 'ArrowLeft') {
        lightGallery.goToPrevSlide();
      }
      if (e.key === 'ArrowRight') {
        lightGallery.goToNextSlide();
      }
    }
  });

  // 添加触摸支持
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // 向左滑动，下一张
      const lightGallery = document.querySelector('.lg-outer');
      if (lightGallery) lightGallery.goToNextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      // 向右滑动，上一张
      const lightGallery = document.querySelector('.lg-outer');
      if (lightGallery) lightGallery.goToPrevSlide();
    }
  }
});



