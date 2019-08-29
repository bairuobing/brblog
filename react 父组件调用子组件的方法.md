在父组件this上先挂载一个child = ref  接收一个参数 `ref` 子组件传递过来的this

`<Child onRef={this.onRef} />` 在子组件上用props传递这个函数

子组件接收这个函数返回自己的this，如：在生命周期中返回这个this





```js
import React, {Component} from 'react';

export default class Parent extends Component {
    render() {
        return(
            <div>
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }
	//定义一个拿子组件返回值this的函数
    onRef = (ref) => {
        this.child = ref
    }
	//调用处理函数
    click = (e) => {
        this.child.myName()
    }

}

class Child extends Component {
    componentDidMount(){
    	//通过pros接收父组件传来的方法
        this.props.onRef(this)
    }

    myName = () => alert('子组件fn')

    render() {
        return ('ch')
    }
}
```

