import React, { Component } from 'react'
import DisplayContestant from '../components/DisplayContestant'

class CallContestant extends Component {

  render() {
    let { contestants, numDisplayedContestants, length, turnOffTimer } = this.props

    return (
      <div className="App-header">
        {
          contestants.map((contestant, index) => {
            if (index === numDisplayedContestants) {
              return (
                <div  key={ index }>
                  <DisplayContestant
                    firstName={ contestant.name }
                    picture={ contestant.picture }
                    />
                </div>
              )
            } else if (length === numDisplayedContestants) {
              return(
                <div key={ index }>
                  <h1>Ready to Play?</h1>
                  <button
                    onClick={ ()=> turnOffTimer() }>
                    Click to Start
                  </button>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default CallContestant
