# bind、call、apply用法及区别

<ans>

一。共同之处

```
1、都是用来改变函数的this对象的指向的。
2、第一个参数都是this要指向的对象。
3、都可以利用后续参数传参。
```

二。用法

```
例子
                  var xw = {
                        name : "小王",
                        gender : "男",
                        age : 24,
                        say : function() {
                           alert(this.name + " , " + this.gender + " ,今年" + this.age);                                }
                }
对于call可以这样：
xw.say.call(xh);
对于apply可以这样：
xw.say..apply(xh);
而对于bind来说需要这样：
xw.say..bind(xh)();
```

call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，

#### 传参

```
xw.say.call(xh,"实验小学","六年级");  
xw.say.apply(xh,["实验小学","六年级郑州牛皮癣医院"]);
xw.say.bind(xh,"实验小学","六年级")();
但是由于bind返回的仍然是一个函数，所以我们还可以在调用的时候再进行传参。
xw.say.bind(xh)("实验小学","六年级");
```

</ans>