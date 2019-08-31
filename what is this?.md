This 词法



1. 一般情况下：在全局作用域中声明的this就是指全局对象(window 浏览器中)
2. 解决this绑定在回调函数中失效的办法”
   - 在回调函数声明式里`var self = this;`
   - 使用 箭头函数 （箭头函数用当前的词法作用域的this来覆盖this本来的值）；
3. 

```js
var obj = {
    bid: "bairuobing",
    cool: function () {
        setTimeout(function a() {
            console.log(this);
        },1000)
    }
}

obj.cool() // window
```

```js
var obj = {
    bid: "bairuobing",
    cool: function () {
        setTimeout(() => {
            console.log(this);
        },1000)
    }
}

obj.cool() // obj
```

有言道：箭头函数除了可以少写代码，还可以修复一些习惯性问题，把程序员经常犯得一个错误给标准化了；

为什么 this 有这样的麻烦呢？

这其实就是一个错误的用法，this 常用的绑定方式其实是用 bind() 函数 或者 call()，然而，很多程序员喜欢将 词法声明的写法与理论上的写法混用；（一种「自找麻烦」的方式，但是就类似于「曾几何时」的错误用法一样，这个错误用法太过于受欢迎，所以将其标准化了）