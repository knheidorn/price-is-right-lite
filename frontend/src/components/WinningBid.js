import React, { Component } from 'react'

class WinningBid extends Component {
  render() {
    let { eProduct, winner } = this.props

    return (
      <>
        <img
          src={ eProduct[0].image_url }
          alt="Product"
          className="Product-image-win"
        />
        <h2 className="Product-title-win">{ eProduct[0].title }</h2>
        <h3 className="Product-actual-price">
          Actual Retail Price ${ Math.floor(eProduct[0].price) }
        </h3>
        <h3 className="Winning-bid-title">Winning Bid: { winner.name } ${ winner.bid }</h3>
        <img src={ winner.picture }
          alt="Winner's Avatar"
          height="90px"
          width="90px"
          className="Winner-picture"
        />
      </>
    )
  }

}

export default WinningBid
