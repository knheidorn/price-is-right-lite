import React, { Component } from 'react';
import './App.css';
import Faker from 'faker'

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout }  from 'react-google-login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Stats from './components/Stats'
import Loading from './components/Loading'
import EndGame from './components/EndGame'

import StartGame from './containers/StartGame'
import PunchABunch from './containers/PunchABunch'

let wheelContents = [5, 100, 15, 80, 35, 60, 20, 40, 75, 55, 95, 50, 85, 30, 65, 10, 45, 70, 25, 90]

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      picture: "",
      userId: "",
      loggedIn: false,
      scores: [],
      contestants: [],
      index: "",
      electronics: [],
      daily: [],
      eProduct: [],
      productsPunch: [],
      eGuess: [],
      testing: true,
      moneyTotal: 0,
      showcaseRandoms: [],
      gameId: "",
      eProductId: ""
    }
  }

  //****ALL GOOGLE OAUTH / USER RELATED****
  //****STOPS AT LINE 110****

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
          picture: img
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
        userId: data.id,
        loggedIn: true
      })
      this.getContestants(data.first_name, data.picture)
    })
  }

//Clearing state to reload the Login page
  logout = () => {
    console.log("logout")
    this.setState({
      firstName: "",
      picture: "",
      userId: ""
    })
  }

  //**BUILDING HOME PAGE / HIGH SCORES **

//Get all scores for database
  componentDidMount() {
    this.getScores()
    this.getProducts()
    this.showcaseContestants()
  }

  getScores = () => {
    let url = "http://localhost:3000/games"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ scores: data })
    })
  }

  //****ALL PRODUCT RELATED****
  //****STOPS AT LINE 206****

  showcaseContestants = () => {
    for (let i = 0; i < 2; i++) {
      let randomNumber = Math.floor(Math.random() * 20)
      let bid = wheelContents[randomNumber]
      let contestant = {
        name: Faker.name.firstName(),
        picture: Faker.internet.avatar(),
        spin: bid
      }
      this.setState(prevState => ({
        showcaseRandoms: [...prevState.showcaseRandoms, contestant]
      }))
    }
  }

//get all products
  getProducts = () =>{
    let url = "http://localhost:3000/products"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.filterProducts(data)
    })
  }

//sort products by category
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

//pull random electronic product and populate related guesses
  getElectronic = () =>{
    let { electronics } = this.state
    let randomNumber = Math.floor(Math.random() * electronics.length)
    let randomElectric = electronics.splice(randomNumber, 1)
    this.setState({ eProductId: randomElectric[0].id })

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


//pull random daily product and populate related guesses
  getDaily = () =>{
    let { daily } = this.state
    let productId = []

    let productArray = []
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * daily.length)
      let randomDaily = daily.splice(randomNumber, 1)
      productArray.push(randomDaily[0])
    }

    productArray.map((product, index) => {
      let min = Math.ceil(product.price * .20)
      let max = Math.floor(product.price * 2.10)
      let wrongPrice = Math.floor((Math.random() * (max - min + 1)) + min)
      product["show_price"] = wrongPrice
      productId.push(product.id)
    })
    console.log(productId)

    this.setState({
      productsPunch: productArray,
      daily: daily,
      productsPunchId: productId
    })
  }

  //****GAME PLAY FUNCTIONS****

//builds new game - calls on functions above and below
  startNewGame = () => {
    this.clearGameState()
  }

//clears state for new game data
  clearGameState = () => {
    this.setState({
      eProduct: [],
      eGuess: []
    })
    this.getElectronic()
    this.getContestants()
  }

//add user to contestants state
  getContestants = (name, picture) => {
    let copyGuess = [...this.state.eGuess]
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
    copyGuess.splice(randomNumber, 0, "" )


    this.setState(prevState => ({
      contestants: array,
      index: randomNumber,
      eGuess: copyGuess
    }))
  }

  saveMoney = (money, event, cb) => {
    event.preventDefault()
    let { gameId } = this.state
    let url = "http://localhost:3000/games/" + gameId

    console.log('SAVING SCORE')
    cb && cb()

    let config = {
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        score: money.totalMoney
      })
    }
    fetch(url, config)
      .then(response => response.json())
      .then(data => {console.log(data)}, () => {
        this.getScores()
        console.log('GOING HOME')
        cb && cb()
      })
  }

//restarting contestants row bidding page
  addContestant = (contestants, winnerIndex) => {
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

  newGame = () => {
    let { userId } = this.state
    let url = "http://localhost:3000/games"
    let config = {
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        game: {
          user_id: userId,
          score: 0
        }
      })
    }

    fetch(url, config)
      .then(response => response.json())
      .then(data => {this.setState({
          gameId: data.id
        });
        this.saveProducts(data.id)
      })
    }

  saveProducts = (game) => {
    let url = "http://localhost:3000/game_products"
    let { productsPunchId, eProductId } = this.state

    productsPunchId.push(eProductId)
    console.log("all product ids", productsPunchId)

    productsPunchId.map((productId, index) => {
      let config = {
        headers:{
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          game_product: {
            game_id: game,
            product_id: productId
          }
        })
      }
      fetch(url, config)
        .then(response => response.json())
        .then(data => {console.log(data)})
    })
  }

  render(){
    if (this.state.loggedIn) {
      let { firstName, picture, userId, scores, contestants, index, eProduct, productsPunch, eGuess, moneyTotal, showcaseRandoms } = this.state
      return (
        <Router>
          <div className="App">
            <nav className="Top-nav">
              <img
                src={ picture }
                alt="User Avatar"
                height="47px"
                width="46px"
              />
              <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={this.logout}
                render={renderProps => (
                  <button className="Button-nav"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                  Logout
                  </button>
                )}
              />
              <div>
                <NavLink exact activeClassName="App-link" to="/">
                  <button className="Button-nav">
                    Home
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/leader-board">
                  <button className="Button-nav">
                    Leader Board
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="App-link" to="/start-game">
                  <button className="Button-nav">
                    Start Game
                  </button>
                </NavLink>
              </div>
            </nav>
            <div className="content">
              <Route exact path="/" component={ ()=>
                <Home firstName={ firstName }
                  picture={ picture }
                  id={ userId }
                  newGame={ this.newGame }
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
                  computers={ eGuess }
                  addContestants={ this.addContestant }
                  newGame={ this.newGame }
                />
              } />
              <Route path="/loading" component={ () =>
                <Loading
                />
              }/>
                <Route path="/mini-game" component={ () =>
                  <PunchABunch
                    productsPunch={ productsPunch }
                    showcaseRandoms={ showcaseRandoms }
                    userName={ firstName }
                    saveMoney={ this.saveMoney }
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
            <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
              alt="Game Logo"
              height="350px"
              width="350px"
            />
            <div>
            <h3>
              Want to Play?
            </h3>
            <p>Join with Google Account</p>
            </div>
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
