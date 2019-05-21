import React, { Component } from 'react'
import BidForm from './BidForm'
import ShowBids from './ShowBids'

class ContestantsRow extends Component {

  constructor() {
    super()
    this.state = {
      value: "",
      submitted: false,
      allGuess: []
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    let { index } = this.props
    event.preventDefault()
    let answer = parseFloat(this.state.value)
    let userIndex = this.props.index
    let guesses = this.props.eGuess

    guesses.splice(userIndex, 1, answer)
    this.setState({
      submitted: true,
      allGuess: guesses
    })
    console.log(this.state.allGuess)
  }

  // I will also need to do a Post request to GameProduct
  //so I can keep track of which items were used and update
  //the score accordingly

  render() {
    let { contestants, eProduct, dProduct, eGuess } = this.props
    let { value } = this.state

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
            eGuess={ this.state.allGuess }
          />
        </div>
      )
    }

  }

}

export default ContestantsRow
