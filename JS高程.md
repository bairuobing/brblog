## 第五章 引用类型

### instanceof 运算符 & Array.isArray() 产生的原因
1. 既然已经有了 instanceof 运算符，为什么还要发明一个Array.isArray() 呢？
instanceof //无法判断跨 frame 的数组类型，因为跨了**全局作用域 window.Array**  
```js
var iframe = document.createElement('iframe');
document.body.append(iframe);
var FrameArray = window.frames[window.frames.length-1].Array;
var array = new FrameArray();
console.log(array instanceof Array);
// false
```

2. `toLocaleString() toString() valueOf()`


3. Array 原生方法 可分为 操作方法，位置方法，迭代方法，归并方法

4. RegExp exec() 返回值是什么
```js
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

 //["Quick Brown Fox Jumps", "Brown", "Jumps", index: 4, input: "The Quick Brown Fox Jumps Over The Lazy Dog", groups: undefined]
```


5. Function 
表达式形式 函数声明形式(提升)
`解析器首先读取声明——而表达式则在执行到所在代码时解释执行`


6. 严格模式下的一些行为

7. 如何在 chrome console 中使用 'use strict'
```js
(function()
{
    'use strict';
    i = 10
    console.log(i) //报错Uncaught ReferenceError: a is not defined(…)
}())
```

8. 什么是寄生组合继承？

9. 闭包作用和副作用