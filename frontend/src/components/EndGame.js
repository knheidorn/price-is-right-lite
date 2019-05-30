import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class EndGame extends Component {

  render() {
    return(
      <div>
        <h1>Want to Play Again?</h1>
        <Link to="/start-game">
          <button className="Start-button">
            Start New Game
          </button>
        </Link>
      </div>
    )
  }
}
export default EndGame
