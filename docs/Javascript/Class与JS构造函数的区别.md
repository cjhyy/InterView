# Class与JS构造函数的区别

<ans>

#### 一。用法区别

```js
//普通构造函数
function MathHandler (x, y) {
  this.x = x
  this.y = y
}

MathHandler.prototype.add = function () {
  return this.x + this.y
}

let m = new MathHandler(1, 2)
console.log(m.add())

typeof MathHandler //'function'
MathHandler.prototype.constructor === MathHandler //true
m.__proto__ === MathHandler.prototype  //true
```

```js
class MathHandler {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  add () {
    return this.x + this.y
  }
}

const m = new MathHandler(1, 2)
console.log(m.add())

typeof MathHandler //'function'
MathHandler.prototype.constructor === MathHandler //true
m.__proto__ === MathHandler.prototype  //true
```

#### 二。继承的区别

```js
function Animal () {
  this.eat = function () {
    console.log('吃')
  }
}

function Dog () {
  this.bark = function () {
    console.log('叫')
  }
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog
const dog = new Dog()
dog.bark()
dog.eat()
```

```js
class Animal {
  constructor (name) {
    this.name = name
  }
  eat () {
    console.log(this.name + '吃')
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name)
    this.name = name
  }
  bark () {
    console.log(this.name + '叫')
  }
}

const dog = new Dog('哈士奇')
dog.eat()
dog.bark()
```

###### 总结

- Class在写法上更加贴合面向对象的写法，实现继承更加易读、易理解
- 本质还是语法糖，使用prototype

</ans>

