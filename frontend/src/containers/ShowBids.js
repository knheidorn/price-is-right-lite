import React, { Component } from 'react'
import Contestants from '../components/Contestants'
import PunchABunch from './PunchABunch'
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
    let { contestants, eProduct, winner, userWon, submitted, addContestants, winnerIndex } = this.props

    return (
        <div>
          <WinningBid eProduct={ eProduct }
            winner={ winner }
          />
          <div>
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
          { userWon ? (
            <Link to="/mini-game">Continue to Mini Game</Link>
          ) : (
            <Link to="/loading"
              onClick={() => addContestants(contestants, winnerIndex)}
              >
              Try Again?
            </Link>
          )}
        </div>

    )


  }
}

export default ShowBids
