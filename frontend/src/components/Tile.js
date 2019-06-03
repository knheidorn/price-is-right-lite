import React, { Component } from 'react'

class Tile extends Component {

  render(){
    let { revealTile, coordinates } = this.props
    return(
      <td className="Tile">
        <button className="Punch-button" onClick={()=> revealTile(coordinates)}>
          $
        </button>
      </td>
    )
  }
}

export default Tile
