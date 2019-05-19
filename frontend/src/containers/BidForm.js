import React, { Component } from 'react'
import Contestants from '../components/Contestants'

class BidForm extends Component {

  render() {
    let { handleChange, handleSubmit, value, contestants } = this.props

    return (
      <div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._SL1500_.jpg"
          alt="Product"
          height="180px"
          width="280px"
        />
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
