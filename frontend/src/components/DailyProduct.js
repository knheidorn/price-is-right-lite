import React, { Component } from 'react'

class DailyProduct extends Component {

  render(){
    let { item, checkHighPrice, checkLowPrice } = this.props
    return(
      <div className="Show-product">
        <img src={ item.image_url }
          alt="Product"
          height="220px"
          width="220px"
        />
        <p>{ item.title }</p>
        <p className="Description-product">
          { item.description }
        </p>
        <p>Incorrect Price ${ item.show_price }</p>
        <button
          className="Bid-button-high"
          onClick={ () => checkHighPrice(item) }
        >Higher
        </button>
        <button
          className="Bid-button-low"
          onClick={ () => checkLowPrice(item) }
        >Lower
        </button>
      </div>
     )
   }
}

export default DailyProduct
