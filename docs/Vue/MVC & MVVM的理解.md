# MVC & MVVM的理解

<ans>

#### 一。MVC模式

```

```

#### 二。MVVM模式

2.1 MVVM模式详解

```
MVVM 对应 3个组成部分，Model（模型）、View（视图） 和 ViewModel（视图模型）
View 是用户在屏幕上看到的结构、布局和外观，也称UI。
ViewModel 是一个绑定器，能和 View 层和 Model 层进行通信。
Model 是数据和逻辑。
```

MVVM 的核心实现是由 ViewModel 层数据绑定，它的核心思想是分离

2.2 Vue是怎么实现的MVVM？

```
1.MVVM 在 Vue 中的体现
Model：对应的是组件中的 data、props 属性。
View：组件中 template 的部分（也包括 style）。
ViewModel。继承自 Vue 类的组件实例。
2. Vue 哪些地方违反了 MVVM。
ref 属性虽然为父组件操作子组件大开了方便之门，但是它绕开了 ViewModel 来访问View。
```

**严格的MVVM要求View不能和Model直接通信，而Vue在组件提供了$refs这个属性，可以直接操作View，违反了这一规定，所以说Vue没有完全遵循MVVM。**

</ans>