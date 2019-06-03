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
      bidRound: "one",
      winnings: 0
    }
  }

  renderProduct = () => {
    let round = this.state.bidRound
    let { productsPunch } = this.props

    switch(round) {
      case 'one':
        return (<DailyProduct item={ productsPunch[0] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
      case 'two':
        return (<DailyProduct item={ productsPunch[1] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
      case 'three':
        return (<DailyProduct item={ productsPunch[2] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
      case 'four':
        return (<DailyProduct item={ productsPunch[3] }
          checkHighPrice={ this.checkHighPrice }
          checkLowPrice={ this.checkLowPrice }
        />);
      case 'game':
        return (<PunchBoard
          punches={ this.state.punches }
          switchGame={ this.switchGame }
          savePunch={ this.savePunch }
          saveMoney={ this.saveMoney }
          winnings={ this.state.winnings }
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

    if (guessPrice < actualPrice) {
      alert("Nice! You increased your punch count by 1!")
      punchCount++
      this.renderProduct()
    } else {
      alert("Sorry, the retail price was lower!")
      this.renderProduct()
    }

    this.setState({
      punches: punchCount
    })
  }

  checkLowPrice = (item) => {
    let actualPrice = item.price
    let guessPrice = item.show_price
    let punchCount = this.state.punches
    let currentRound = this.state.bidRound

    this.changeRound(currentRound)

    if (guessPrice > actualPrice) {
      alert("Nice! You increased your punch count by 1!")
      punchCount++
      this.renderProduct()
    } else {
      alert("Sorry, the retail price was higher!")
      this.renderProduct()
    }

    this.setState({
      punches: punchCount
    })
  }

  saveMoney = (money) => {
    this.setState({
      winnings: money
    })

  }
  switchGame = () => {
    this.setState({
      finishGame: true
    })
  }

  savePunch = (punch) => {
    this.setState({
      punches: punch
    })
  }

  render() {
    let { finishGame, winnings } = this.state
    let { showcaseRandoms, userName, saveMoney } = this.props

    if (!finishGame){
      return(
        <div className="Daily-products">
          <h1 className="Title-product">Punch-A-Bunch</h1>
          {
            this.renderProduct()
          }
        </div>
      )
    } else {
      return (
        <SpinningWheel
          winnings={ winnings }
          saveMoney={ saveMoney }
        />
      )
    }
  }
}
export default PunchABunch
