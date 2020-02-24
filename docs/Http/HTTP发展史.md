# HTTP发展史

<ans>

一、HTTP/0.9

1. 只有一个命令GET
2. 没有HEADER等描述数据的信息
3. 服务器发送完毕，就关闭TCP连接

二、HTTP/1.0

1. 增加了很多命令
2. 增加status code和header
3. 多字符集支持、多部分发送、权限、缓存等

三、HTTP/1.1

1. 持久连接
2. pipeline
3. 增加host和其他命令

四、HTTP2

1. 所有数据以二进制传输（以前是以字符串）
2. 同一个连接里面发送多个请求不再需要按照顺序来
3. 头信息压缩以及推送等提高效率的功能

```
HTTP1.0定义了三种请求方法：GET(查)、POST（增）、HEAD
HTTP1.1新增了五种请求方法：OPTIONS、PUT（改）、DELETE（删）、TRACE、CONNECT
```

</ans>