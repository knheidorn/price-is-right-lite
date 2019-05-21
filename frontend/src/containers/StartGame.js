import React, { Component } from 'react'
import CallContestant from './CallContestant'
import ContestantsRow from './ContestantsRow'

class StartGame extends Component {

  constructor() {
    super()
    this.state = {
      timer: false,
      numDisplayedContestants: 0,
      allData: [],
      electronics: [],
      daily: [],
      eProduct: {},
      dProduct: {}
    }
  }

  componentDidMount() {
    let length = this.props.contestants.length + 1

    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        this.setState({
          timer: true,
          numDisplayedContestants: i
         })
       }, i * 2000)
    }
    this.getProducts()
  }

  getProducts = () =>{
    let url = "http://localhost:3000/products"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ allData: data })
      this.filterProducts(data)
    })
  }


  filterProducts = (products) => {
    let electronics = products.filter(function(product) {
      return product.category.includes("electronics")
    })

    let daily = products.filter(function(product) {
      return product.category.includes("daily")
    })

    this.getElectronic(electronics)
    this.getDaily(daily)
  }

  getElectronic = (electronics) =>{
    let randomNumber = Math.floor(Math.random() * electronics.length)
    let randomElectric = electronics.splice(randomNumber, 1)
    this.setState({
      eProduct: randomElectric,
      electronics: electronics
    })
  }

  getDaily = (daily) =>{
    let randomNumber = Math.floor(Math.random() * daily.length)
    let randomDaily = daily.splice(randomNumber, 1)
    this.setState({
      dProduct: randomDaily,
      daily: daily
    })
  }

  turnOffTimer = () => {
    this.setState({
      timer: false
    })
  }

  render() {
    let { contestants, id, index } = this.props
    let { timer, numDisplayedContestants } = this.state

    if (timer) {
      return(
        <CallContestant
          contestants={ contestants }
          numDisplayedContestants={ numDisplayedContestants }
          length={ contestants.length }
          turnOffTimer={ this.turnOffTimer }
        />
      )
    } else {
      return (
        <div>
          <ContestantsRow
            contestants= { contestants }
            id={ id }
            index={ index }
          />
        </div>
      )
    }
  }
}

export default StartGame
