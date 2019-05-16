import React, { Component } from 'react'
import CallContestant from './CallContestant'

//component
const DisplayContestant = ({ firstName, picture }) => (
  <div className="App-header">
    <img src="https://i.imgur.com/vFqrxxj.png"
      alt="Game Logo"
      height="400px"
      width="400px"
    />
    <h2>
      { firstName }, come on down!
    </h2>
    <img src={ picture } alt="Player's Avatar" />
  </div>
)

class StartGame extends Component {

  constructor() {
    super()
    this.state = {
      timer: false
    }
  }

  componentDidMount() {
    for (let i = 0; i < this.props.contestants.length; i++) {
      setTimeout(this.setState({ timer: true }), 5000)
    }
  }

  render() {
    let { contestants } = this.props
    if (this.state.timer) {
      return(
        <CallContestant contestants={ contestants } />
      )
    } else {
      return(
        <div>
          <h1>Loading</h1>
        </div>
      )
    }
  }
}

export default StartGame
