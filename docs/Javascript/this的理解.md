# this的理解

<ans>

this表示当前对象，this的指向是根据调用的上下文来决定的，默认指向window对象，指向window对象时可以省略不写

全局环境： this始终指向的是window对象

局部环境： 在全局作用域下直接调用函数，this指向window 对象函数调用，哪个对象调用就指向哪个对象 使用new实例化对象，在构造函数中的this指向实例化对象 使用call或apply改变this的指向

总结：this始终指向最后一个调用它的函数的对

</ans>