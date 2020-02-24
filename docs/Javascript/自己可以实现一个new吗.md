# 自己可以实现一个new吗

<ans>

#### 一。New的原理

```
• 以构造器的prototype属性为原型，创建新对象；
• 将this(也就是上一句中的新对象)和调用参数传给构造器，执行；
• 如果构造器没有手动返回对象，则返回第一步创建的对象
```

#### 二。实现一个NEW

```
复制代码
function create(Con, ...args) {
    this.obj = {};//创建一个空的对象
    //将空对象指向构造函数的原型链
    Object.setPrototypeOf(obj, Con.prototype);
    //obj绑定到构造函数上，便可以访问构造函数中的属性
    let result = Con.apply(obj, args);
    //如果返回的result是一个对象则返回该对象，new方法失效，否则返回obj
    return result instanceof Object ? result : obj;
}
```

#### </ans>