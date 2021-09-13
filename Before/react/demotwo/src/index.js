// 导入react
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 使用默认形式
// // 创建元素
// const title = React.createElement('h1', null, 'hello react')
// // 渲染元素
// ReactDOM.render(title, document.getElementById('root'))

// 使用jsx语法创建react元素

// 条件渲染
// 第一种 if-else判断
const isLoading = false
// const showData = () => {
//   if (isLoading) {
//     return (<p>数据加载中</p>)
//   }
//   return (<p>数据加载成功</p>)
// }

// 第二种 三元表达式
// const showData = () => {
//   return isLoading ? (<p>数据加载中</p>) : (<p>数据加载成功</p>)
// }

// 第三种 逻辑与判断
const showData = () => {
  return isLoading && (<p>数据加载中</p>)
}

// 列表渲染
const list = [
  { id: 1, name: 'aubrey' },
  { id: 2, name: 'song' },
  { id: 3, name: 'zhang' }
]

const name = 'aubrey'
const title = (
  <div style={{ backgroundColor: "green" }}>
    <h1 style={{ color: 'red' }}>hello jsx, my name is {name}
      {showData()}
    </h1>
    <ul>
      {list.map(item => <li className="list" key={item.id}>{item.name}</li>)}
    </ul>
  </div>

)


ReactDOM.render(title, document.getElementById('root'))