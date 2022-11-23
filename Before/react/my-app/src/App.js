import React, { createContext } from "react";

const {Provider, Consumer} = createContext('')


const ComA = () => {
  return (
    <div>这是A组件
      <ComC />
    </div>
  )
}


const ComC = () => {
  return (
    <div>这是c组件
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component{
  state = {
    msg: '这是顶级组件的数据'
  }
  render() {
    return (
      <Provider value={this.state.msg}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }


}

export default App

