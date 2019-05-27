import React, { Component } from 'react'

class DailyProduct extends Component {
   render(){
     return(
       <div className="Show-product">
         <img src={ this.props.item.image_url }
           alt="Product"
           height="220px"
           width="220px"
         />
         <p>{ this.props.item.title }</p>
         <p>Incorrect Price ${ this.props.item.show_price }</p>
         <button>Higher</button>
         <button>Lower</button>
       </div>
     )
   }
}

export default DailyProduct
