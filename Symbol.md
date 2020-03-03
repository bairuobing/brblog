# Symbol

```js
Symbol([description])
```

中文含义：象征；符号；标志
1. 首先它是一个基本数据类型（ES6）
2. 它不能被 new 实例化
3. 其次，他还是一个方法，Symbol()
4. 作用：作为对象属性的唯一标识符，防止对象属性冲突发生

举个例子

```js
let myInfo1 = {
    [Symbol('type')]: '人'
}
let myInfo2 = {
    [Symbol('type')]: '男人'
}

let myAllInfo = Object.assign({}, myInfo1, myInfo2);

```

`myAllInfo` 如果不用Symbol的会发生属性覆盖



获取 Symbol 值得方法：
```js

Object.getOwnPropertySymbols(myAllInfo); // [Symbol(type), Symbol(type)]

```
