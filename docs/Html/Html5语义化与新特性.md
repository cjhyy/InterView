# Html5语义化与新特性

<ans>

1、什么是HTML语义化？

- 表示选择合适的标签（语义化标签）便于开发者阅读和写出更优雅的代码

2、为什么要使用语义化标签？

- 在没有CSS样式的情况下，页面整体也会呈现很好的结构效果
- 更有利于用户体验
- 更有利于搜索引擎优化
- 代码结构清晰，方便团队开发与维护

3、 HTML5新特性有哪些？

- 语义化标签

  ```
  <header> 页头
  <nav> 导航
  <section> 声明一个块，里面可以嵌套别的语义元素
  <article> 独立的自包含内容
  <aside> 侧边栏
  <figcaption> 定义 <figure> 元素的标题
  <figure> 独立的流内容（图像、图表、照片、代码等等）
  <footer> 页脚
  ```

- 音视频处理 (Audio,Video)

- canvas / webGL (canvas 使用js画图)

- history API (详细API操作 [请点这里](https://www.cnblogs.com/jehorn/p/8119062.html))

  ```
  DOM window对象通过history对象提供了对浏览器历史的访问。它暴露了很多有用的方法和属性，允许你在用户浏览历史中向前和向后跳转，同时，从HTML5开始提供了对history栈中内容的操作。
  ```

- requestAnimationFrame(动画优化)

- 地理位置(getCurrentPosition() 方法来获得用户的位置)

- webSocket

  ```
  WebSocket 协议本质上是一个基于 TCP 的协议。
  
  为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。
  ```

  

</ans>