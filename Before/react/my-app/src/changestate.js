import React from "react";
class Couent extends React.Component {

  constructor() {
    super()
    this.change = this.change.bind(this)
  }

  state = {
    count : 0
  }

  change = () => {
    // 修改state
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <button onClick={this.change}>{ this.state.count }</button>
    )
  }
}

function App () {
  return (
    <div>
      <Couent />
    </div>
  )
}

export default App

