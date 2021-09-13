import React from 'react'

// 创建组件
class Hello extends React.Component {
  // 方法一使用constructor 创建状态数据
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 方法二直接使用es6语法创建状态数据
  state = {
    count: 10
  }
  // 再方法中更改状态数据
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>这是一个被抽离出去的类组件</p>
        <button onClick={this.handleClick}>点击我触发事件: {this.state.count}</button>
      </div>
    )
  }
}

// 函数组件的事件定义
// const Hello = () => {
//   const clickFn = () => {
//     console.log('你点击了函数组件中定义的方法')
//   }
//   const clickLink = (e) => {
//     e.preventDefault() // 阻止默认事件
//     console.log('你点击了a链接')
//   }
//   return <div>
//     <p>这是被抽离出去的函数组件</p>
//     <button onClick={clickFn}>点击我看看</button>
//     <a href="http://www.baidu.com" onClick={clickLink}>点击跳转</a>
//   </div>
// }

// 导出组件
export default Hello
