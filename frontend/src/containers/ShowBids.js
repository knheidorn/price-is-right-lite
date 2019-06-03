import React, { Component } from 'react'
import Contestants from '../components/Contestants'
import WinningBid from '../components/WinningBid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class ShowBids extends Component {

  constructor() {
    super()
    this.state = {
      filteredGuesses: []
    }
  }

  componentDidMount() {
    let { allGuess, winnerIndex } = this.props
    allGuess.splice(winnerIndex, 1)

    this.setState({
      filteredGuesses: allGuess
    })
  }

  render() {
    let { contestants, eProduct, winner, userWon, submitted, addContestants, winnerIndex, newGame } = this.props

    return (
        <div className="Show-bid-page">
          <h2 className="Title-start-win" >Contestant's Row</h2>
          <WinningBid eProduct={ eProduct }
            winner={ winner }
          />
          { userWon ? (
            <Link to="/mini-game">
              <button className="New-game-button-bid">
                Continue to Mini Game
              </button>
            </Link>
          ) : (
            <Link to="/loading"
              onClick={() => {addContestants(contestants, winnerIndex); newGame()} }
              >
              <button className="New-game-button-bid">
                Try Again?
              </button>
            </Link>
          )}
          <table className="Contestants-win">
            <tbody>
              <tr>
                {
                  contestants.map((contestant, index) => {
                    return(
                      <Contestants
                          firstName={ contestant.name }
                          picture={ contestant.picture }
                          key={ index }
                          eGuess={ this.state.filteredGuesses[index] }
                      />
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>

    )


  }
}

export default ShowBids
