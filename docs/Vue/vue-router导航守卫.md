# vue-router导航守卫

<ans>

一、导航守卫大体分为三类：

```
1. 全局守卫钩子

2. 独享守卫钩子

3. 路由组件守卫钩子
复制代码
```

二、全局守卫钩子（在路由切换全局执行）

全局守卫钩子函数有三种：

```
const router = new VueRouter({....})
// 全局前置守卫
router.beforeEach((to, from, next) => {
	// do something
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
	// do something
})
// 全局后置守卫
router.afterEach((to, from) => {
	// do something
})
注意：
	to：route即将进入的路由
	from：route即将离开的路由
	next：function这个是必须要调用的
	next()接受参数：
  next()：直接执行下一个钩子，如果执行完了导航状态为comfirmed状态
	next(false)：中断当前导航，回到from的位置
	next('/hello')或next({path:'/hello'})：路由到任意地址，可以携带参数等
	next(error)：会回到router.onError(callback)
复制代码
```

三、独享守卫钩子

独享守卫是定义在单独的某一个路由里的

```
const router = new VueRouter({
	routes: [
		{
			path: '/foo',
			component: Foo,
			beforeEnter: (to, from, next) => {
				// do something
		},
		beforeLeave: (to, from, next) => {
			// do something
		}
	}
]
})
复制代码
```

四、路由组件守卫钩子

路由组件即是在vue-router中注册的组件叫路由组件

```
beforeRouteEnter(to, from, next) {}
beforeRouteUpdate(to, from, next) {}
beforeRouteLeave(to,from, next){}
```

</ans>