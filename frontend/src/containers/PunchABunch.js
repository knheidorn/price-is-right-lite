import React, { Component } from 'react'
import Tile from '../components/Tile'

class GridTile {
  constructor() {
    this.Clicked = false;
    this.value = 0
  }
}

class PunchABunch extends Component {

  constructor() {
    super()
    this.state = {
      grid: []
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
    this.setState({ grid })
  }

  render() {
    return(
      <div>
        <table>
        <tbody>
          {this.state.grid.map((column, i) => {
            return(
              <tr key={ i }>
                {column.map((row, j) => {
                  return(
                    <Tile key={ (i + "") + "," + (j + "") }/>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    )
  }
}
export default PunchABunch
