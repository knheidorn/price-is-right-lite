import React, { Component } from 'react'
import Faker from 'faker'

class SpinningWheel extends Component {

  constructor() {
    super()
    this.state = {
      rotateX: "transform: rotateX(0deg)"
    }
  }

  spinWheel = () => {
    let carousel = document.querySelector('.carousel');
    let x = Math.floor(Math.random() * 20)
    let degree = x * 18
    let newSpin = "translateZ(-200px) rotateX(" + degree.toString() + "deg)"
    carousel.style.transform = newSpin
    console.log(newSpin)
  }

  render() {
    let { winnings, showcaseRandoms } = this.props
    let { rotateX } = this.state

    return (
      <div className="App-header">
      <h1>
        Showcase Showdown
      </h1>
      <h3>Punch-A-Bunch Winnings: ${ winnings }</h3>
        {
          showcaseRandoms.map((contestant, index) => {
            return (
              <div  key={ index }>
                <img src={ contestant.picture } alt="Player's Avatar" height="60px" width="60px" />
                <h4>
                  { contestant.name }: { contestant.spin }
                </h4>
              </div>
            )
          })
        }
      <button onClick={ () => this.spinWheel() }>Spin</button>
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
