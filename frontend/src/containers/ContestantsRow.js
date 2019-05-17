import React, { Component } from 'react'
import BidForm from '../components/BidForm'

class ContestantsRow extends Component {
  render() {
    let { contestants } = this.props
    return(
      <div className="App-header">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._SL1500_.jpg"
          alt="Product"
          height="180px"
          width="280px"
        />
        <form>
          <input type="text"
            name="answer"
            placeholder="Enter Bid Here"/>
          <input type="submit" name="Submit Answer" />
        </form>
        <div>
          <table>
            <tbody>
            {
              contestants.map((contestant, index) => {
                return(
                  <div key={ index }>
                    <BidForm
                      firstName={ contestant.name }
                      picture={ contestant.picture }
                    />
                  </div>
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

export default ContestantsRow
