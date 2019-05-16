import React, { Component } from 'react';
import '../images/The-Price-Is-Right-TV-edit.png';

import { GoogleLogout }  from 'react-google-login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class LeaderBoard extends Component {

  render() {
    return (
      <div className="App-header">
        <h1>High Scores</h1>
      </div>
    )
  }
}

export default LeaderBoard;
