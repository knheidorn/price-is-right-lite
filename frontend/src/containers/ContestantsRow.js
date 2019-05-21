import React, { Component } from 'react'
import BidForm from './BidForm'
import ShowBids from './ShowBids'

class ContestantsRow extends Component {

  constructor() {
    super()
    this.state = {
      value: "",
      submitted: false,
      allGuess: [],
      winnerIndex: "",
      winner: {
        name: "",
        picture: "",
        bid: ""
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let answer = parseFloat(this.state.value)
    let userIndex = this.props.index
    let guesses = this.props.eGuess

    guesses.splice(userIndex, 1, answer)
    this.setState({
      submitted: true,
      allGuess: guesses
    })
    this.getWinner(guesses)
  }


  getWinner = (bids) => {
    let { contestants, eProduct } = this.props
    let retailPrice = eProduct[0].price

    let filtering = []
    bids.map((bid, index) => {
      if (bid <= retailPrice) {
        filtering.push([index, retailPrice - bid, bid])
      }
    })
    filtering.sort(function(a, b) {
      return a[1] - b[1];
    })
    console.log(filtering)
    let winnerIndex = filtering[0][0]
    let winner = contestants.splice(winnerIndex, 1)
    console.log(winner)
    this.setState({
      winner: {
        name: winner[0].name,
        picture: winner[0].picture,
        bid: filtering[0][2]
      },
      winnerIndex: winnerIndex
    })
  }
  // I will also need to do a Post request to GameProduct
  //so I can keep track of which items were used and update
  //the score accordingly

  render() {
    let { contestants, eProduct, dProduct, eGuess } = this.props
    let { value, winnerIndex, allGuess, winner } = this.state

    if (!this.state.submitted) {
      return(
        <div className="App-header">
          <BidForm contestants={ contestants }
            value={ value }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            eProduct={ eProduct }
            dProduct={ dProduct }
            eGuess={ eGuess }
          />
        </div>
      )
    } else {
      return(
        <div className="App-header">
          <ShowBids contestants={ contestants }
            eProduct={ eProduct }
            dProduct={ dProduct }
            eGuess={ allGuess }
            winnerIndex = { winnerIndex }
            winner={ winner }
          />
        </div>
      )
    }

  }

}

export default ContestantsRow
