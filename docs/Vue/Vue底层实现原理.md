# Vue底层实现原理

<ans>

vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来*劫持各个属性的setter和getter*，在数据变动时发布消息给订阅者，触发相应的监听回调

```
Vue是一个典型的MVVM框架，模型（Model）只是普通的javascript对象，修改它则试图（View）会自动更新。这种设计让状态管理变得非常简单而直观
```

Vue实现这种数据双向绑定的效果，需要三大模块:

```
1. Observer：能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者.
2. Compile：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
3. Watcher：链接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应的回调函数，从而更新试图。
```

```
Observer（数据监听器）
		Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher
Watcher（订阅者）
		Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：
			1.在自身实例化时往属性订阅器(dep)里面添加自己
			2.自身必须有一个update()方法
			3.待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调
Compile（指令解析器）
		Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图
```

</ans>