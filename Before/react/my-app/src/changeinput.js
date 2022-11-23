import React from "react";
class Couent extends React.Component {

  state = {
    message : 'aubrey'
  }

  change = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.message} onChange={ this.change } />
      </div>
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

