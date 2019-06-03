import React, { Component } from 'react'
import DisplayContestant from '../components/DisplayContestant'

class CallContestant extends Component {

  render() {
    let { contestants, numDisplayedContestants, length, turnOffTimer } = this.props

    if (length === numDisplayedContestants) {
      return(
        <div className="App-header">
          <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
            alt="Game Logo"
            height="340px"
            width="340px"
          />
          <h2>And now here's your host, Drew Carey!</h2>
          <img src="https://i.imgur.com/GlelNsN.jpg"
            alt="Drew Carey"
            height="175px"
            width="175px"
          />
          <button
            className="New-game-button"
            onClick={ ()=> turnOffTimer() }
          >
            Start Game
          </button>

        </div>
      )
    } else {
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
              }
            })
          }
        </div>
      )
    }

  }
}

export default CallContestant
