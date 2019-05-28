import React, { Component } from 'react'

class DailyProduct extends Component {

  componentDidMount() {
    console.log("hello")

  }


    checkHighPrice = (item) => {
      console.log("how many times")
      let actualPrice = item.price
      let guessPrice = item.show_price
      // let punchCount = this.state.punches
      // let currentRound = this.state.bidRound
      // this.changeRound(currentRound)

      // if (guessPrice > actualPrice) {
      //   alert("Nice! You increased your punch count by 1!")
      //   this.setState({
      //     punches: punchCount++
      //   })
      // } else {
      //   alert("ooo - actual retail price:" + { actualPrice } )
      // }
      console.table(item)
    }

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
