# Vue 路由懒加载

<ans>

Vue项目中实现路由按需加载（路由懒加载）的3中方式：

```
1. vue异步组件
2. es6提案的import()
3. webpack的require.ensure()
```

```
一、Vue异步组件技术：
	{
		path: '/home',
		name: 'Home',
		component: resolve => reqire(['path路径'], resolve)
	}
二、es6提案的import()
	const Home = () => import('path路径')
三、webpack提供的require.ensure()
	{
		path: '/home',
		name: 'Home',
		component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
	}
```

</ans>