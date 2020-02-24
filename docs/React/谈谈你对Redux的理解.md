# 谈谈你对Redux的理解

<ans>

- `store`必须是唯一的，多个`store`是坚决不允许，只能有一个`store`空间

- 只有`store`能改变自己的内容，`Reducer`不能改变，只能通过action表达修改的意图，调用dispatch()修改state

- `Reducer`必须是纯函数

  ```
  Redux提供的API
  1、createStore
  		createStore方法的作用就是创建一个Redux store来存放应用中所有的state
  		createStore(reducer, [preloadState], [enhancer])
  		createStore方法接受三个参数，后面两个是可选参数
  		reducer: 参数的类型必须是function
  		preloadState: 这个参数代表初始化的state(initialState), 可以是任意类型的参数
  		enhancer: 这个参数代表添加的各种中间件，参数的类型必须是function
  		createStore提供的方法：
  			1、getState()
  				返回当前的state
  			2、dispach(action)
  				参数action必须是一个对象，且必须含有type字段
  			3、subscribe(listener)
  				事件监听
  2、combineReducers
  		combineReducers主要是把多个reducer合并成一个，并且返回一个新的reducer函数，该函数接收的参数也是两个state和action
  3、compose
  		主要是在中间件时候使用，合成函数
  		compose(applyMiddleware(thunk), 
  				window.devToolsExtension ?
  				window.devToolsExtension() : undefined
  		)
  4、applyMiddleware
  5、bindActionCreator
  		bindActionCreator的主要作用就是将aciton与dispatch函数绑定，生成直接可以出发action的函数
  ```

  

</ans>