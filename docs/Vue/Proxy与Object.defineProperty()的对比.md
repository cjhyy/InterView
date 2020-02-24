# Proxy与Object.defineProperty()的对比

<ans>

Proxy的优点：

```
 	1. 可以直接监听对象而非属性,并返回一个新对象
    2. 可以直接监听数值的变化
    3. 可以劫持整个对象，并返回一个新对象
```

Proxy的缺点：

```
Proxy是es6提供的新特性，兼容性不好，所以导致Vue3一致没有正式发布让让广大开发者使用
```

Object.defineProperty的优点：

```
IE9以下的版本不兼容
```

Object.defineProperty的缺点：

```
1. 只能劫持对象的属性，我们需要对每个对象的每个属性进行遍历，无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应
```

#### 实现方式

[以后再总结，目前先看](https://www.jianshu.com/p/2df6dcddb0d7)

</ans>