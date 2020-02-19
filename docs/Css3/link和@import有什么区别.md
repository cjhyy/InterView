# link和@import有什么区别

<ans>

### link和@import有什么区别

```
1. link属于html标签，除了引入css样式以外还可以定义RSS等其他事物，@import是css提供的，只能引入css
2. lilnk在页面加载的时候会同时加载，@import引用的css要等页面加载结束后再加载
3. link是html标签，没有兼容性，@import只有ie5以上才能识别
```

display: none与visibility: hidden的区别

display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）

visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

</ans>