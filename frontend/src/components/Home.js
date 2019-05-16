import React, { Component } from 'react';
import '../images/The-Price-Is-Right-TV-edit.png';


class Home extends Component {



  render() {
    return (
      <div>
        <div className="App-header">
          <h1>
            Welcome {this.props.firstName}
          </h1>
          <button>
            Start New Game
          </button>
          <img src="https://i.imgur.com/vFqrxxj.png"
            alt="Game Logo"
            height="450px"
            width="450px"
          />
        </div>
      </div>
    )
  }
}

export default Home;
