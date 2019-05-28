import React, { Component } from 'react'

class DailyProduct extends Component {

  render(){
    let { item } = this.props
    return(
      <div className="Show-product">
        <img src={ item.image_url }
          alt="Product"
          height="220px"
          width="220px"
        />
        <p>{ item.title }</p>
        <p>Incorrect Price ${ item.show_price }</p>
        <button
          className="Bid-button-high"
        >Higher
        </button>
        <button
          className="Bid-button-low"
        >Lower
        </button>
      </div>
     )
   }
}

export default DailyProduct
