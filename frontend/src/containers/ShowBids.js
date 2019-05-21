import React, { Component } from 'react'
import Contestants from '../components/Contestants'

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

    return (
      <div>
        <img
          src={ eProduct[0].image_url }
          alt="Product"
          height="180px"
          width="280px"
        />
        <h2>{ eProduct[0].title }</h2>
        <h3>
          Actual Retail Price ${ Math.floor(eProduct[0].price) }
        </h3>
        <p>{ eProduct[0].description }</p>
        <h3>Winning Bid</h3>
        <img src={ winner.picture }
          alt="Winner's Avatar"
          height="90px"
          width="90px"
        />
        <p>{ winner.name }'s Bid: ${ winner.bid }</p>
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

export default ShowBids
