# Virtual DOM的理解

<ans>

一、什么是vdom？

```
Virtual DOM 用JS模拟DOM结构
```

二、为何要用vdom？

```
 	1. DOM操作非常非常“rang贵”，将DOM对比操作放在JS层，提高效率

    2. DOM结构的对比，放在JS层来做（图灵完备语言：能实现逻辑代码的语言）
```

三、vdom核心函数有哪些

```
核心函数：
	h('标签名', {...属性名...}, [...子元素...])
	h('标签名', {...属性名...}, '.........')
	patch(container, vnode)
	patch(vnode, newVnode)
```

</ans>