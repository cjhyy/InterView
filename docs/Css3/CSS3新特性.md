# CSS3新特性

<ans>

[详细总结](https://juejin.im/post/5a0c184c51882531926e4294#heading-5)

- 过渡

  > transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
  >
  > 例：transition: width 0 ease 2s

- 动画

  > @keyframes来定义动画
  >
  > 

  > animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）
  >
  > 例1：执行一次logo2-line动画，运动时间2秒，运动曲线为 linear
  >
  > ​         animation: logo2-line 2s linear;

- 形状转换

  > transform:适用于2D或3D转换的元素
  >
  >  transform-origin:right top;旋转轴心

  “skew”是倾斜，“scale”是缩放，“rotate”是旋转，“translate”是平移。transform 支持综合变换。

  例1：2D旋转

  ```
   
   .item{
   transform:rotate(720deg)
   transition:all 2s ease-in-out;
   }
   
  ```

- 阴影

  > 文字阴影: text-shadow: 2px 2px 2px #000;(水平阴影，垂直阴影，模糊距离，阴影颜色) 
  > 盒子阴影: box-shadow: 10px 10px 5px #999 【水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）】

- 边框

  >border-image: 图片url 图像边界向内偏移 图像边界的宽度(默认为边框的宽度) 用于指定在边框外部绘制偏移的量（默认0） 铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch））;

  ```css
  .demo {
      border: 15px solid transparent;
      padding: 15px;   
      border-image: url(border.png);
      border-image-slice: 30;
      border-image-repeat: round;
      border-image-outset: 0;
  }
  ```

- 背景

  > background-clip 制定背景绘制（显示）区域 background-origin  background-size

  > 1.（background-clip: border-box;）默认情况（从边框开始绘制）
  >  2.（background-clip: padding-box;）从padding开始绘制（显示），不算border,，相当于把border那里的背景给裁剪掉！                                                                     
  > 3.（background-clip: content-box;）只在内容区绘制（显示），不算padding和border，相当于把padding和border那里的背景给裁剪掉

  例：多张背景图

  ```
  div
  {
      border:1px dashed black;
      padding:35px;
      background-size: contain;
      background:url('test.jpg') no-repeat left,url(logo.png) no-repeat right;
  }
  ```

- 文字 

  使用（@**font-face**）添加字体

  >换行  
  >
  >语法：word-break: normal|break-all|keep-all; (**控制单词如何被拆分换行**)
  >
  >语法：word-wrap: normal|break-word; (**控制长度超过一行的单词是否被拆分换行**)
  >
  >超出省略号  text-overflow:clip|ellipsis|string      

- 渐变

  > 线性渐变，径向渐变，圆锥渐变

  [渐变详情](https://juejin.im/post/5a0c184c51882531926e4294#heading-43)

- 弹性布局、栅格布局、多列布局

- **Filter**（滤镜）

  >黑白色filter: grayscale(100%)、褐色filter:sepia(1)、饱和度saturate(2)、色相旋转hue-rotate(90deg)、反色filter:invert(1)、透明度opacity(.5)、亮度brightness(.5)、对比度contrast(2)、模糊blur(3px)

- 媒体查询

  > @media

</ans>