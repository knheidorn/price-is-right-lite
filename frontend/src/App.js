import React, { Component } from 'react';
import './App.css';
import './images/The-Price-Is-Right-TV-edit.png';

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout }  from 'react-google-login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Stats from './components/Stats'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      picture: "",
      token: "",
      userId: "",
      scores: []
    }
  }

//Verifies Google Credentials from User
  verifyGoogle = (response) => {
    let idToken = response.getAuthResponse().id_token;
    let URL = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken

    fetch(URL)
    .then(response=> response.json())
    .then(data => {
      if (data.email_verified) {
        this.getConfig(response)
      } else {
        alert("Login Invalid")
      }
    })
  }

//Once Credentials Verified, Builds Config for Fetch Request
  getConfig = (googleData) => {
    let profile = googleData.getBasicProfile();
    let idToken = googleData.getAuthResponse().id_token;
    let firstName = googleData.profileObj.givenName
    let img = profile.getImageUrl()
    let email = profile.getEmail()

    let config = {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
        },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          email: email,
          picture: img,
          token: idToken
        }
      })
    }
    this.getUser(config)
  }

  //Fetch request to either create a new user or find an existing user
  //with the confirmed Google info
  getUser = (config) => {
    let url = "http://localhost:3000/users"
    fetch(url, config)
    .then(response => response.json())
    .then(data => {
      this.setState({
        firstName: data.first_name,
        picture: data.picture,
        token: data.token,
        userId: data.id
      })
    })
  }

  //Clearing state to reload the Login page
  logout = () => {
    console.log("logout")
    this.setState({
      token: "",
      firstName: "",
      picture: "",
      userId: ""
    })
  }

  //Get all scores for database
  componentDidMount() {
    this.getScores()
  }

  getScores = () => {
    let url = "http://localhost:3000/games"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ scores: data })
    })
  }

  render(){
    if (this.state.token) {
      let {firstName, picture, userId, scores} = this.state
      return (
        <Router>
          <div className="App">
            <nav className="Top-nav">
              <img
                src={ picture }
                alt="User Avatar"
                height="43px"
                width="43px"
              />
              <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={this.logout}
              />
              <div>
                <NavLink activeClassName="App-link" to="/">Home</NavLink>{" "}
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/leader-board">Leader Board</NavLink>
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/stats">{ firstName } Stats</NavLink>
              </div>
            </nav>
            <div className="content">
              <Route exact path="/" component={ ()=>
                <Home firstName={ firstName }
                  picture={ picture }
                  id={ userId }
                />
              }/>
              <Route path="/leader-board" component={ () =>
                <LeaderBoard scores={ scores }/>
              } />
              <Route path="/stats" component={ () =>
                <Stats firstName={ firstName }
                  picture={ picture }
                  scores={ scores }
                />
              } />
            </div>
          </div>
        </Router>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Please Login with Google Account
            </p>
            <div>
              <GoogleLogin
                clientId="306712866153-k37qt6nhspd4v53gg1l7o73vp8hc1kfs.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.verifyGoogle}
                onFailure={this.verifyGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </header>
        </div>
      );
    }
  }


}

export default App;
