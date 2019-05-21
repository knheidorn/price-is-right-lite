import React, { Component } from 'react'
import Contestants from '../components/Contestants'

class BidForm extends Component {

  render() {
    let { handleChange, handleSubmit, value, contestants, eProduct, eGuess } = this.props

    return (
      <div>
        <img
          src={ eProduct[0].image_url }
          alt="Product"
          height="180px"
          width="280px"
        />
        <h2>{ eProduct[0].title }</h2>
        <p>{ eProduct[0].description }</p>
        <div>
          <form onSubmit={ (event)=> handleSubmit(event) }>
            <input type="text"
              name="answer"
              placeholder="Enter Bid Here"
              value={ value }
              onChange={ (event)=> handleChange(event) }
            />
            <input type="submit" />
          </form>
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

export default BidForm
