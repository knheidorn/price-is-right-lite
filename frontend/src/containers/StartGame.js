import React, { Component } from 'react'
import CallContestant from './CallContestant'
import ContestantsRow from './ContestantsRow'

class StartGame extends Component {

  constructor() {
    super()
    this.state = {
      timer: false,
      numDisplayedContestants: 0
    }
  }

  componentDidMount() {
    let length = this.props.contestants.length + 1

    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        this.setState({
          timer: true,
          numDisplayedContestants: i
         })
       }, i * 2000)
    }
  }

  turnOffTimer = () => {
    this.setState({
      timer: false
    })
  }

  render() {
    let { contestants, id, index, eProduct, computers, firstName, addContestants, newGame } = this.props
    let { timer, numDisplayedContestants } = this.state

    if (timer) {
      return(
        <CallContestant
          contestants={ contestants }
          numDisplayedContestants={ numDisplayedContestants }
          length={ contestants.length }
          turnOffTimer={ this.turnOffTimer }
        />
      )
    } else {
      return (
        <div>
          <ContestantsRow
            contestants= { contestants }
            id={ id }
            index={ index }
            eProduct={ eProduct }
            computers={ computers }
            firstName={ firstName }
            addContestants={ addContestants }
            newGame={ newGame }
          />
        </div>
      )
    }
  }
}

export default StartGame
