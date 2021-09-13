import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 函数组件
// const Hello = () => <h2>这是一个函数组件</h2>
// ReactDOM.render(<Hello />, document.getElementById('root'))

// 创建类组件

// class Hello extends React.Component {
//   render() {
//     return (
//       <p>这是一个类创建的组件</p>
//     )
//   }
// }

// // 渲染组件
// ReactDOM.render(<Hello />, document.getElementById('root'))



// 引入组件
import Hello from './hello'
// 渲染组件

ReactDOM.render(<Hello />, document.getElementById('root'))

