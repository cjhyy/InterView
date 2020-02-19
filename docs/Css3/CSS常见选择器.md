# CSS常见选择器

<ans>

1、CSS选择器：

- id选择器(#myid)
- 类选择器(.myclass)
- 标签选择器(div, h1,p)
- 相邻选择器（h1 + p）
- 子选择器(ul > li)
- 后代选择器(li a)
- 通配符选择器(*)
- 属性选择器(a[rel="external"])
- 伪类选择器(a:hover, li:nth-child)

2、CSS3属性选择器：

- a[href$='.pdf']：选择href属性中以.pdf结尾的元素
- a[href^='www']：选择href属性中以www开头的元素
- a[href*='tmc']：选择href属性中包含tmc的元素

3、CSS3常见伪类选择器：

:nth-of-type()：

- 可以通过参数来选择表格中的奇数行和偶数行，odd表示奇数行，even表示偶数行

:nth-child()：

- 参数n时选中所有行
- 参数为n+i时表示从第i行开始下面的都被选中，如n+3，从第3行开始下面全部选中
- 2n表示2的倍数行被选中，选中偶数行
- 2n+1表示选中奇数行
- 3n表示每个3行选中一次

可继承的属性：font-size, font-family, color

不可继承的样式：border, padding, margin, width, height

优先级（就近原则）：!important > [id > class > tag]

!important比内联优先级高

</ans>