import React, { Component } from 'react'

class WinningBid extends Component {
  render() {
    let { eProduct, winner } = this.props

    return (
      <>
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
      </>
    )
  }

}

export default WinningBid
