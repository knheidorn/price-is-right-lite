import React, { Component } from 'react'

class Tile extends Component {

  render(){
    let { revealTile, coordinates } = this.props
    return(
      <td>
        <button className="Punch-button" onClick={()=> revealTile(coordinates)}>
          $
        </button>
      </td>
    )
  }
}

export default Tile
