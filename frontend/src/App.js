import React, { Component } from 'react';
import './App.css';
import './images/The-Price-Is-Right-TV-edit.png';
import Faker from 'faker'

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout }  from 'react-google-login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Stats from './components/Stats'
import StartGame from './containers/StartGame'
import PunchABunch from './containers/PunchABunch'
import Loading from './containers/Loading'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      picture: "",
      token: "",
      userId: "",
      scores: [],
      contestants: [],
      index: "",
      allData: [],
      electronics: [],
      daily: [],
      eProduct: [],
      dProduct: [],
      eGuess: [],
      dGuess: [],
      testing: true
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
      this.getContestants(data.first_name, data.picture)
    })

  }

  //Clearing state to reload the Login page
  logout = () => {
    console.log("logout")
    this.setState({
      token: "",
      firstName: "",
      picture: "",
      userId: "",
      allData: [],
      electronics: [],
      daily: [],
      eProduct: [],
      dProduct: [],
      eGuess: [],
      dGuess: []
    })
  }

  //Get all scores for database
  componentDidMount() {
    this.getScores()
    this.getProducts()
  }

  getScores = () => {
    let url = "http://localhost:3000/games"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ scores: data })
    })
  }

  getProducts = () =>{
    let url = "http://localhost:3000/products"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ allData: data })
      this.filterProducts(data)
    })
  }


  filterProducts = (products) => {
    let electronics = products.filter(function(product) {
      return product.category.includes("electronics")
    })

    let daily = products.filter(function(product) {
      return product.category.includes("daily")
    })
    this.setState({
      electronics: electronics,
      daily: daily
    })
    this.getElectronic()
    this.getDaily()
  }

  getElectronic = () =>{
    let { electronics } = this.state
    let randomNumber = Math.floor(Math.random() * electronics.length)
    let randomElectric = electronics.splice(randomNumber, 1)

    let minV = randomElectric[0].price * .50
    let maxV = randomElectric[0].price * 1.50
    let min = Math.ceil(minV)
    let max = Math.floor(maxV)
    let eArray = []
    console.log("Max: ", maxV, "Min: ", minV, "actual: ", randomElectric[0].price)
    for (let i = 0; i < 3; i++) {
      let eGuess = Math.floor(Math.random() * (max - min + 1)) + min
      eArray.push(eGuess)
    }
    console.log("new Guesses", eArray)
    this.setState({
      eGuess: eArray,
      eProduct: randomElectric,
      electronics: electronics,
      testing: false
    })
    console.log("after setState newGuesses", this.state.eGuess)
  }

  getDaily = () =>{
    let { daily } = this.state

    let randomNumber = Math.floor(Math.random() * daily.length)
    let randomDaily = daily.splice(randomNumber, 1)

    let min = Math.ceil(randomDaily[0].price * .65)
    let max = Math.floor(randomDaily[0].price * 1.40)
    let dArray = []

    for (let i = 0; i < 3; i++) {
      let dGuess = (Math.random() * (max - min + 1)) + min
      dArray.push(dGuess)
    }

    this.setState({
      dProduct: randomDaily,
      daily: daily,
      dGuess: dArray
    })

  }

  getContestants = (name, picture) => {
    //generate computer contestants
    for (let i = 0; i < 3; i++) {
      let contestant = {
        name: Faker.name.firstName(),
        picture: Faker.internet.avatar()
      }
      this.setState(prevState => ({
        contestants: [...prevState.contestants, contestant]
      }))
    }
    //insert user information in random index
    let user = {
      name: name,
      picture: picture
    }
    let randomNumber = Math.floor(Math.random() * 3)
    let array = this.state.contestants
    array.splice(randomNumber, 0, user)

    let eArray = this.state.eGuess
    eArray.splice(randomNumber, 0, "")

    let dArray = this.state.dGuess
    dArray.splice(randomNumber, 0, "")

    this.setState(prevState => ({
      contestants: array,
      index: randomNumber,
      eGuess: eArray,
      dGuess: dArray
    }))
  }

  // clearGuessArray = () => {
  //   this.setState({
  //     eGuess: []
  //   })
  //   console.log("after clear", this.state.eGuess)
  // }

  addContestant = (contestants, winnerIndex) => {
    console.log("before clear", this.state.eGuess)
    console.log(this)
    this.setState({
      eGuess: [],
      testing: false
    })
    console.log("after clear", this.state.eGuess, this.state.testing)
    this.getElectronic()

    let contestant = {
      name: Faker.name.firstName(),
      picture: Faker.internet.avatar()
    }
    contestants.splice(winnerIndex, 0, contestant)

    let { index } = this.state


    let eArray = this.state.eGuess
    eArray.splice(index, 0, "")

    this.setState({
      contestants: contestants,
      eGuess: eArray,
      testing: true
    })
    console.log("after adding contestant Guess: ", this.state.eGuess, this.state.testing)
  }

  render(){
    if (this.state.token) {
      let { firstName, picture, userId, scores, contestants, index, eProduct, dProduct, eGuess } = this.state
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
                <NavLink exact activeClassName="App-link" to="/">Home</NavLink>{" "}
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/leader-board">Leader Board</NavLink>
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/stats">{ firstName } Stats</NavLink>
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/start-game">Start Game</NavLink>
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
              <Route path="/start-game" component={ () =>
                <StartGame
                  contestants={ contestants }
                  firstName={ firstName }
                  id = { userId }
                  index = { index }
                  eProduct={ eProduct }
                  dProduct={ dProduct }
                  computers={ eGuess }
                  addContestants={ this.addContestant }
                />
              } />
              <Route path="/loading" component={ () =>
                <Loading
                />
              }/>
                <Route path="/mini-game" component={ () =>
                  <PunchABunch
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
            <img src="https://i.imgur.com/vFqrxxj.png"
              alt="Game Logo"
              height="450px"
              width="450px"
            />
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
