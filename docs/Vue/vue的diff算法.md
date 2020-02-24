# Vue的diff算法

<ans>

问题：渲染真实的DOM开销是很大的，修改了某个数据，如果直接渲染到真实dom上会引起整个DOM树的重绘和重排。

Virtual Dom 根据真实DOM生成的一个Virtual DOM，当Virtual DOM某个节点的数据改变后生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode.

注意：在采取diff算法比较的时候，只会在同层级进行，不会跨层级比较。

当数据发生改变时，set方法会让调用Dep.notify()方法通知所有订阅者Watcher，订阅者就会调用patch函数给真实的DOM打补丁，更新响应的试图。

</ans>