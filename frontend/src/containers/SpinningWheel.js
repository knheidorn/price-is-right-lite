import React, { Component } from 'react'
import Faker from 'faker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let wheelContents = [100, 15, 80, 35, 60, 20, 40, 75, 55, 95, 50, 85, 30, 65, 10, 45, 70, 25, 90, 5]
class SpinningWheel extends Component {

  constructor() {
    super()
    this.state = {
      wheelSpun: false,
      userWon: false,
      totalMoney: 0,
      gameDone: false
    }
  }

  spinWheel = () => {
    let carousel = document.querySelector('.carousel');
    let x = Math.floor(Math.random() * 20)
    let y = 20-x

    if (y === 0) {
      let value = wheelContents.splice(19, 1)
      this.checkValue(value)
    } else {
      let value = wheelContents.splice(y, 1)
      this.checkValue(value)
    }

    let degree = x * 18
    let newSpin = "translateZ(-200px) rotateX(" + degree.toString() + "deg)"
    carousel.style.transform = newSpin

    this.setState({
      wheelSpun: true
    })
  }

  checkValue = (userSpin) => {
    let { showcaseRandoms, userName, winnings } = this.props
    let allSpins = []

    allSpins.push([userName, userSpin[0]])
    showcaseRandoms.map((person, index) => {
      allSpins.push([person.name, person.spin])
    })

    allSpins.sort(function(a, b) {
      return b[1] - a[1]
    })
    let winnerName = allSpins[0][0]

    if (winnerName === userName) {
      let money = userSpin * 100

      let totalMoney = money + winnings
      this.setState({
        userWon: true,
        totalMoney: totalMoney,
        gameDone: true
      })
    } else {
      this.setState({
        totalMoney: winnings,
        gameDone: true
      })
    }
  }

  render() {
    let { winnings, showcaseRandoms, saveMoney } = this.props
    let { wheelSpun, userWon, totalMoney, gameDone } = this.state

    return (
      <div className="App-header">
      <h1>
        Showcase Showdown
      </h1>
       {
         gameDone ? (
           <div>
             <h3>Total Winnings: ${ totalMoney }</h3>
             <Link to="/start-game"
              onClick={(ev) => saveMoney({ totalMoney }, ev)}
             >
               <button className="Start-button">
                 Start New Game
               </button>
             </Link>
             <Link exact to="/"
              onClick={(ev) => saveMoney({ totalMoney }, ev)}
             >
               <button className="Start-button">
                 Go Home
               </button>
             </Link>
           </div>
         ) : (
          <h3>Punch-A-Bunch Winnings: ${ winnings }</h3>
         )
       }
      {
        showcaseRandoms.map((contestant, index) => {
          return (
            <div  key={ index }>
              <img src={ contestant.picture } alt="Player's Avatar" height="60px" width="60px" />
              <h4>
                { contestant.name }: { contestant.spin }
              </h4>
            </div>
          )
        })}
        {
          wheelSpun ? (
            <div></div>
          ) : (
            <button onClick={ () => this.spinWheel() }>Spin</button>
          )
        }
        <div className="scene">
          <div
            className= "carousel"
          >
            <div className="carousel-cell">
              100
            </div>
            <div className="carousel-cell">
              15
            </div>
            <div className="carousel-cell">
              80
            </div>
            <div className="carousel-cell">
              35
            </div>
            <div className="carousel-cell">
              60
            </div>
            <div className="carousel-cell">
              20
            </div>
            <div className="carousel-cell">
              40
            </div>
            <div className="carousel-cell">
              75
            </div>
            <div className="carousel-cell">
              55
            </div>
            <div className="carousel-cell">
              95
            </div>
            <div className="carousel-cell">
              50
            </div>
            <div className="carousel-cell">
              85
            </div>
            <div className="carousel-cell">
              30
            </div>
            <div className="carousel-cell">
              65
            </div>
            <div className="carousel-cell">
              10
            </div>
            <div className="carousel-cell">
              45
            </div>
            <div className="carousel-cell">
              70
            </div>
            <div className="carousel-cell">
              25
            </div>
            <div className="carousel-cell">
              90
            </div>
            <div className="carousel-cell">
              5
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpinningWheel
