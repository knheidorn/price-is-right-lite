import React, { Component } from 'react'
import Flickity from 'react-flickity-component'

class SpinningWheel extends Component {

  render() {
    let { winnings } = this.props

    return (
      <div className="App-header">
      <h1>
        Showcase Showdown
      </h1>
      <h3>Total Won from PunchABunch: ${ winnings }</h3>
        <div className="scene">
          <div
            className= "carousel"
          >
            <div className="carousel-cell">
              100
            </div>
            <div className="carousel-cell">
              15
            </div>
            <div className="carousel-cell">
              80
            </div>
            <div className="carousel-cell">
              35
            </div>
            <div className="carousel-cell">
              60
            </div>
            <div className="carousel-cell">
              20
            </div>
            <div className="carousel-cell">
              40
            </div>
            <div className="carousel-cell">
              75
            </div>
            <div className="carousel-cell">
              55
            </div>
            <div className="carousel-cell">
              95
            </div>
            <div className="carousel-cell">
              50
            </div>
            <div className="carousel-cell">
              85
            </div>
            <div className="carousel-cell">
              30
            </div>
            <div className="carousel-cell">
              65
            </div>
            <div className="carousel-cell">
              10
            </div>
            <div className="carousel-cell">
              45
            </div>
            <div className="carousel-cell">
              70
            </div>
            <div className="carousel-cell">
              25
            </div>
            <div className="carousel-cell">
              90
            </div>
            <div className="carousel-cell">
              5
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpinningWheel
