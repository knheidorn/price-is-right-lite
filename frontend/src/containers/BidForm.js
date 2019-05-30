import React, { Component } from 'react'
import Contestants from '../components/Contestants'

class BidForm extends Component {

  render() {
    let { handleChange, handleSubmit, value, contestants, eProduct, computers } = this.props
    return (
      <div className="Main-bid-page">
        <h2 className="Title-start" >Contestant's Row</h2>
        <img
          src={ eProduct[0].image_url }
          alt="Product"
          className="Product-image"
        />
        <h2 className="Product-title">{ eProduct[0].title }</h2>
        <p  className="Product-description">{ eProduct[0].description }</p>
        <form className="Bid-line" onSubmit={ (event)=> handleSubmit(event) }>
          <input type="text"
            name="answer"
            placeholder="Enter Bid Here"
            value={ value }
            onChange={ (event)=> handleChange(event) }
          />
          <input type="submit" className="Submit-button"/>
        </form>
        <table className="Contestants">
          <tbody>
            <tr>
              {
                contestants.map((contestant, index) => {
                  return(
                    <Contestants
                      firstName={ contestant.name }
                      picture={ contestant.picture }
                      key={ index }
                      eGuess={ computers[index] }
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

export default BidForm
