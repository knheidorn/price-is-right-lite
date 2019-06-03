import React, { Component } from 'react'
import Tile from '../components/Tile'
import SpinningWheel from './SpinningWheel'

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

class PunchBoard extends Component {

  constructor() {
    super()
    this.state = {
      grid: [],
      winnings: 0
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

  revealTile = (coordinates) => {
    let { punches, switchGame, saveMoney } = this.props

    let copyGrid = [...this.state.grid]
    let countPunches = punches
    let currentTile = copyGrid[coordinates[0]][coordinates[1]]
    let currentTotal = this.state.winnings

    if(countPunches > 1){
      if (!currentTile.isClicked) {
        currentTile.isClicked = true
        console.log("value of tile", currentTile.value)
        let newTotal = currentTotal + currentTile.value[0]
        this.setState({ winnings: newTotal })
        countPunches--
      } else {
        alert("Tile Already Punched!")
        return
      }
    } else {
      let newTotal = currentTotal + currentTile.value[0]
      saveMoney(newTotal)
      switchGame()
    }
    this.props.savePunch(countPunches)
  }

  render() {
    let { punches, winnings, saveMoney} = this.props
    if (punches === 0) {
      return(
        <div>
          {
            this.props.switchGame()
          }
        </div>
      )
    } else {
      return (
        <div>
        <table className="Punch-board">
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
        <h3 className="Punch-Winnings">Total Winnings So Far: ${ this.state.winnings } </h3>
        <h3 className="Punches">Punches Left: { this.props.punches }</h3>
        </div>
      )
    }
  }
}

export default PunchBoard
