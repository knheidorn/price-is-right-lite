import React, { Component } from 'react'
import Tile from '../components/Tile'
import SpinningWheel from './SpinningWheel'
import DailyProduct from '../components/DailyProduct'

class GridTile {
  constructor() {
    this.isClicked = false;
    this.value = 0
  }
}

const money = [25000, 10000, 10000, 5000, 5000, 5000, 5000, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 100, 100, 100, 100, 100, 25000, 10000, 10000, 5000, 5000, 5000, 5000, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 100, 100, 100, 100, 100, 25000, 10000, 10000, 5000, 5000, 5000, 5000, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 100, 100, 100, 100, 100, 25000, 10000, 10000, 5000, 5000, 5000, 5000, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 100, 100, 100, 100, 100, 25000, 10000, 10000, 5000, 5000, 5000, 5000, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 100, 100, 100, 100, 100]

class PunchABunch extends Component {

  constructor() {
    super()
    this.state = {
      grid: [],
      punches: 4,
      finishGame: false,
      bidRound: "one"
    }
  }

  componentDidMount() {
      //number of columns
      let grid = new Array (5)
      for (let i = 0; i < 5; i++ ) {
        //number of browser
        grid[i] = new Array (10)
        for (let j=0; j < 10; j++) {
          grid[i][j] = new GridTile()

        }
      }
      this.setState({ grid
      }, () => {
        this.randomPrice()
      })

  }

  randomPrice = () => {
    let count = 0
    let populateGrid = [...this.state.grid]
    while (count < 50){
      let x = Math.floor(Math.random() * 5)
      let y = Math.floor(Math.random() * 10)
      if (!populateGrid[x][y].value) {
        let randomNumber = Math.floor(Math.random() * money.length)
        let moneyWon = money.splice(randomNumber, 1)
        populateGrid[x][y].value = moneyWon
        count++
      }
    }
    this.setState({
      grid: populateGrid
    })
  }

  renderProduct = (round) => {
    let { productsPunch } = this.props

    switch(round) {
      case 'one':
        return <DailyProduct item={ productsPunch[0] }/>;
      case 'two':
        return <DailyProduct item={ productsPunch[1] }/>;
      case 'three':
        return <DailyProduct item={ productsPunch[2] }/>;
      case 'four':
        return <DailyProduct item={ productsPunch[3] }/>;
      case 'game':
        return (
          <table>
            <tbody>
              { this.state.grid.map((column, x) => {
                return(
                  <tr key={ x }>
                    {column.map((row, y) => {
                      return(
                        <Tile key={ (x) + " " + (y) }
                          revealTile={this.revealTile}
                          coordinates={ [x, y] }
                        />
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        );
      }
  }

  revealTile = (coordinates) => {
    let copyGrid = [...this.state.grid]
    let countPunches = this.state.punches
    let currentTile = copyGrid[coordinates[0]][coordinates[1]]
    if(countPunches > 0){
      if (!currentTile.isClicked) {
        currentTile.isClicked = true
        console.log(currentTile.value)
        countPunches--
      } else {
        alert("Tile Already Punched!")
        return
      }
    } else {
      this.setState({
        finishGame: true
      })
    }
    console.log(countPunches)
    this.setState({
      punches: countPunches
    })
  }


  render() {
    let { finishGame, bidRound } = this.state

    if (finishGame){
      return (
        <SpinningWheel />
      )
    } else {
      return(
        <div className="App-header">
          <h1 className="Title">Punch-A-Bunch</h1>
          <div>
          {
            this.renderProduct(bidRound)
          }
          </div>
        </div>
      )
    }
  }
}
export default PunchABunch
