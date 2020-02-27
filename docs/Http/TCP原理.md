# TCP原理

<ans>

[详细解析](https://juejin.im/post/5e527c58e51d4526c654bf41?utm_source=gold_browser_extension)

TCP(Transmission Control Protocol)传输控制协议

TCP是主机对主机层的传输控制协议，提供可靠的连接服务，采用三次握手确认建立一个连接：

位码即tcp标志位，有6种标示：SYN(synchronous建立联机) ACK(acknowledgement 确认) PSH(push传送) FIN(finish结束) RST(reset重置) URG(urgent紧急)Sequence number(顺序号码) Acknowledge number(确认号码)

#### 三次握手

> 对应到 TCP 的三次握手，也是需要确认双方的两样能力: `发送的能力`和`接收的能力`。于是便会有下面的三次握手的过程:

![img](https://user-gold-cdn.xitu.io/2020/2/23/170723de9b8aa08b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

第三次握手可以携带数据

#### 四次挥手

![img](https://user-gold-cdn.xitu.io/2020/2/23/170723e5c0e05829?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

当客户端收到服务端发来的`FIN`后，自己变成了`TIME-WAIT`状态，然后发送 ACK 给服务端。

注意了，这个时候，客户端需要等待足够长的时间，具体来说，是 2 个 `MSL`(`Maximum Segment Lifetime，报文最大生存时间`), 在这段时间内如果客户端没有收到服务端的重发请求，那么表示 ACK 成功到达，挥手结束，否则客户端重发 ACK。

#### 等待2MSL的意义

如果不等待会怎样？

如果不等待，客户端直接跑路，当服务端还有很多数据包要给客户端发，且还在路上的时候，若客户端的端口此时刚好被新的应用占用，那么就接收到了无用数据包，造成数据包混乱。所以，最保险的做法是等服务器发来的数据包都死翘翘再启动新的应用。

那，照这样说一个 MSL 不就不够了吗，为什么要等待 2 MSL?

- 1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端
- 1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达

这就是等待 2MSL 的意义。

</ans>