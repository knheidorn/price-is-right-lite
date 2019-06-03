import React, { Component } from 'react'

class Contestants extends Component {

  render() {
    let { firstName, picture, eGuess, index } = this.props

    return(
      <>
        <td className="Box">
          <img src={ picture }
            alt="Player's Avatar" 
            height="60px"
            width="60px"
            className="Box-image"
          />
          <h4>{ firstName }'s Bid ${ eGuess } </h4>
        </td>
      </>
    )
  }

}

export default Contestants
