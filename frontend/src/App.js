import React, { Component } from 'react';
import './App.css';
import './images/The-Price-Is-Right-TV-edit.png';

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout }  from 'react-google-login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Stats from './components/Stats'
import StartGame from './containers/StartGame'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      picture: "",
      token: "",
      userId: "",
      scores: [],
      contestants: [
        {name: "Kim", picture: "data:image/jpeg;base64,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"},
        {name: "Did I work?", picture:"data:image/png;base64,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"}
      ]
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
      let {firstName, picture, userId, scores, contestants} = this.state
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
              <div>
                <NavLink activeClassName="App-link" to="/contestants">Start Game</NavLink>
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
              <Route path="/contestants" component={ () =>
                <StartGame contestants={ contestants }/>
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
