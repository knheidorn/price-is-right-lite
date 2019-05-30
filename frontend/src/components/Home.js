import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import '../images/The-Price-Is-Right-TV-edit.png';


class Home extends Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
            alt="Game Logo"
            height="340px"
            width="340px"
          />
          <h1>
            Welcome {this.props.firstName}
          </h1>
          <Link to="/start-game">
            <button className="Start-button" onClick={()=> this.props.newGame()}>
              Start New Game
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;
