import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Loading extends Component {

  render() {
    return(
      <div className="App-header">
        <h1>Ready to Try Again?</h1>
        <Link to="/start-game">
          Click to Start
        </Link>
      </div>
    )
  }
}
export default Loading
