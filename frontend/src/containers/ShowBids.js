import React, { Component } from 'react'
import Contestants from '../components/Contestants'

class ShowBids extends Component {

  render() {
    let { contestants } = this.props

    return (
      <div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._SL1500_.jpg"
          alt="Product"
          height="180px"
          width="280px"
        />
        <div>
          Actual Retail Price $498
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

export default ShowBids
