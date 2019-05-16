import React, { Component } from 'react';
import '../images/The-Price-Is-Right-TV-edit.png';


class Home extends Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>
            <b>Welcome {this.props.first_name}</b>
          </h1>
          <img
            src="../images/The-Price-Is-Right-TV-edit.png"
            alt="The Price Is Right Logo"
          />
        </div>
      </div>
    )
  }
}

export default Home;
