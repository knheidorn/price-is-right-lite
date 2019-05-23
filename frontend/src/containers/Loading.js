import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Loading extends Component {

  render() {
    return(
      <div className="App-header">
        <h1>Ready to Try Again?</h1>
        <Link to="/start-game">
          <button className="Start-button">
            Start
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
