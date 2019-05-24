import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Loading extends Component {

  render() {
    return(
      <div className="App-header">
        <h2>Ready to Try Contestant's Row Again?</h2>
        <Link to="/start-game">
          <button className="Start-button">
            Start Game
          </button>
        </Link>
        <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
          alt="Game Logo"
          height="420px"
          width="420px"
        />
      </div>
    )
  }
}
export default Loading
