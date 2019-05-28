import React, { Component } from 'react'
import SpinningWheel from './SpinningWheel'
import DailyProduct from '../components/DailyProduct'
import PunchBoard from './PunchBoard'



class PunchABunch extends Component {

  constructor() {
    super()
    this.state = {
      punches: 0,
      finishGame: false,
      bidRound: "one"
    }
  }

  renderProduct = () => {
    let round = this.state.bidRound
    let { productsPunch } = this.props

    switch(round) {
      case 'one':
        console.log("1")
        return (<DailyProduct item={ productsPunch[0] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
        break;
      case 'two':
        console.log("2")
        return (<DailyProduct item={ productsPunch[1] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
        break;
      case 'three':
        console.log("3")
        return (<DailyProduct item={ productsPunch[2] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
        break;
      case 'four':
        console.log("4")
        return (<DailyProduct item={ productsPunch[3] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
        break;
      case 'game':
        console.log("game")
        return (<PunchBoard punches={ this.state.punches }
          revealTile={ this.revealTile }
        />);
      }

  }

  changeRound = (round) => {
    switch(round) {
      case "one":
        return this.setState({bidRound: "two"});
      case "two":
        return this.setState({bidRound: "three"});
      case "three":
        return this.setState({bidRound: "four"});
      case "four":
        return this.setState({bidRound: "game"});
    }
  }


  checkHighPrice = (item) => {
    console.log("high price")
    let actualPrice = item.price
    let guessPrice = item.show_price
    let punchCount = this.state.punches
    let currentRound = this.state.bidRound
    this.changeRound(currentRound)

    if (guessPrice > actualPrice) {
      alert("Nice! You increased your punch count by 1!")
      this.setState({
        punches: punchCount++
      })
      this.renderProduct()
    } else {
      alert("ooo - actual retail price:" + { actualPrice } )
      this.renderProduct()
    }
  }

  checkLowPrice = (item) => {
    console.log("low price")
    let actualPrice = item.price
    let guessPrice = item.show_price
    let punchCount = this.state.punches
    let currentRound = this.state.bidRound

    this.changeRound(currentRound)

    if (guessPrice < actualPrice) {
      alert("Nice! You increased your punch count by 1!")
      this.setState({
        punches: punchCount++
      })
      this.renderProduct()
    } else {
      alert("ooo - actual retail price:" + { actualPrice } )
      this.renderProduct()
    }
  }

  revealTile = (coordinates) => {
    let copyGrid = [...this.state.grid]
    let countPunches = this.state.punches
    let currentTile = copyGrid[coordinates[0]][coordinates[1]]
    if(countPunches > 0){
      if (!currentTile.isClicked) {
        currentTile.isClicked = true
        console.log(currentTile.value)
        countPunches--
      } else {
        alert("Tile Already Punched!")
        return
      }
    } else {
      this.setState({
        finishGame: true
      })
    }
    console.log(countPunches)
    this.setState({
      punches: countPunches
    })
  }


  render() {
    let { finishGame, bidRound } = this.state

    if (!finishGame){
      return(
        <div className="App-header">
          <h1 className="Title">Punch-A-Bunch</h1>
          <div>
            {
              this.renderProduct()
            }
          </div>
        </div>
      )

    } else {
      return (
        <SpinningWheel />
      )
    }
  }
}
export default PunchABunch
