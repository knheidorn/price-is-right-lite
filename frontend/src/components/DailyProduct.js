import React, { Component } from 'react'

class DailyProduct extends Component {

  render(){
    let { item, checkHighPrice, checkLowPrice } = this.props
    return(
      <div className="Show-product">
        <h2 className="Daily-title">{ item.title }</h2>
        <img src={ item.image_url }
          alt="Product"
          height="220px"
          width="220px"
          className="Daily-image"
        />
        <p className="Description-product">
          { item.description }
        </p>
        <h4 className="Daily-price">Incorrect Price ${ item.show_price }</h4>
        <button
          className="Bid-button-low"
          onClick={ () => checkLowPrice(item) }
        >Lower
        </button>
        <button
          className="Bid-button-high"
          onClick={ () => checkHighPrice(item) }
        >Higher
        </button>
      </div>
     )
   }
}

export default DailyProduct
