import React, { Component } from 'react'
import Contestants from '../components/Contestants'

class ShowBids extends Component {

  render() {
    let { contestants, eProduct, eGuess } = this.props

    return (
      <div>
        <img
          src={ eProduct[0].image_url }
          alt="Product"
          height="180px"
          width="280px"
        />
        <h3>{ eProduct[0].title }</h3>
        <p>{ eProduct[0].description }</p>
        <div>
          Actual Retail Price ${ Math.floor(eProduct[0].price) }
        </div>
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
                      eGuess={ eGuess[index] }
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
