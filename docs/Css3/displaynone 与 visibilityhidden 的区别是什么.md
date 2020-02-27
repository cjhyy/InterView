# display:none 与 visibility:hidden 的区别是什么？

<ans>

- 是否占据空间

  display:none，该元素不占据任何空间，在文档渲染时，该元素如同不存在（但依然存在文档对象模型树中）。 visibility:hidden，该元素空间依旧存在。 即一个（display:none）不会在渲染树中出现，一个（visibility :hidden）会。

- 是否渲染

  display:none，会触发reflow（回流），进行渲染。 visibility:hidden，只会触发repaint（重绘），因为没有发现位置变化，不进行渲染。

- 是否是继承属性

  display:none，display不是继承属性，元素及其子元素都会消失。 visibility:hidden，visibility是继承属性，若子元素使用   visibility:visible，则不继承，这个子孙元素又会显现出来。

- 读屏器是否读取

  读屏器不会读取display：none的元素内容，而会读取visibility：hidden的元素内容。

</ans>