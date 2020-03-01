# HTTP缓存

<ans>

#### 什么是 HTTP Cache

- 我们知道通过网络获取资源缓慢且耗时，需要三次握手等协议与远程服务器建立通信，对于大点的数据需要多次往返通信大大增加了时间开销，并且当今流量依旧没有理想的快速与便宜。对于开发者来说，长久缓存复用重复不变的资源是性能优化的重要组成部分。
- HTTP 缓存机制就是，配置服务器响应头来告诉浏览器是否应该缓存资源、是否强制校验缓存、缓存多长时间；浏览器非首次请求根据响应头是否应该取缓存、缓存过期发送请求头验证缓存是否可用还是重新获取资源的过程。下面我们就来结合简单的 `node` 服务器代码(文末)来介绍其中原理。

#### 关键字

| 响应头                                                       | (常用)值                                                     | 说明                                               |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------- |
| [Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) | no-cache, no-store, must-revalidate, max-age, public, private | 控制浏览器是否可以缓存资源、强制缓存校验、缓存时间 |
| [ETag](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) | 文件指纹（hash码、时间戳等可以标识文件是否更新）             | 强校验，根据文件内容生成精确                       |
| [Last-Modified](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) | 请求的资源最近更新时间                                       | 弱校验， 根据文件修改时间，可能内容未变，不精确    |
| [Expires](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires) | 资源缓存过期时间                                             | 与响应头中的 Date 对比                             |

| 请求头                                                       | 值                              | 说明                                   |
| :----------------------------------------------------------- | :------------------------------ | :------------------------------------- |
| [If-None-Match](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match) | 缓存响应头中的 ETag 值          | 发送给服务器比对文件是否更新（精确）   |
| [If-Modified-Since](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) | 缓存响应头中的 Last-Modified 值 | 发送给服务器比对文件是否更新（不精确） |

![这里写图片描述](https://user-gold-cdn.xitu.io/2020/2/17/17051e1477a1d12e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



</ans>