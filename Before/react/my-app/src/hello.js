import React from "react"

import PropTypes from 'prop-types'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// 类组件
class Hello extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 简化
  // bind改变this指向
  // constructor() {
  //   super()
  //   this.clickFun = this.clickFun.bind(this)
  // }
  state = {
    count: 0,
    uName: 'aubrey',
    textcontent: ''
  }
  // 箭头函数解决this指向问题
  clickFun = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.props.name)
  }
  changeName = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <Router>
        <div>
          这是抽离出去的类组件 
          {this.props.name}
          <button onClick={this.clickFun}>点击触发事件</button> 
          {this.state.count}
          <input name="uName" type="text" value={this.state.uName} onChange={this.changeName} />
          <textarea name="textcontent" value={this.state.textcontent} onChange={this.changeName}></textarea>
        </div>
      </Router>
    )
  }
}

Hello.propTypes = {
  name: PropTypes.string
}

// 导出组件
export default Hello