import React, { Component } from 'react'
import Contestants from '../components/Contestants'
import PunchABunch from './PunchABunch'
import WinningBid from '../components/WinningBid'

class ShowBids extends Component {

  constructor() {
    super()
    this.state = {
      filteredGuesses: []
    }
  }

  componentDidMount() {
    let { eGuess, winnerIndex } = this.props
    eGuess.splice(winnerIndex, 1)

    this.setState({
      filteredGuesses: eGuess
    })
  }

  render() {
    let { contestants, eProduct, winner } = this.props

    if (this.props.userWon) {
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
        </div>
      )
    } else {
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
          
        </div>
      )
    }

  }
}

export default ShowBids
