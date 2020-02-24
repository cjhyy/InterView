# Vuex的理解及使用场景

<ans>

Vuex 是一个专为 Vue 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。

```
1. Vuex 的状态存储是响应式的；当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
2. 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation，这样使得我们可以方便地跟踪每一个状态的变化
```

Vuex主要包括以下几个核心模块：

```
1. State：定义了应用的状态数据
2. Getter：在 store 中定义“getter”（可以认为是 store 的计算属性），就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数
4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作
5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中
```

<img src="https://user-gold-cdn.xitu.io/2020/2/17/17050f12d4f0494e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="Vuex架构图" style="zoom:150%;" />

</ans>