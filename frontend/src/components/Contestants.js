import React, { Component } from 'react'

class Contestants extends Component {

  render() {
    let { firstName, picture, eGuess } = this.props

    return(
      <>
        <td>
          <img src={ picture } alt="Player's Avatar" height="60px" width="60px"/>
          <h4>{ firstName }'s Bid ${ eGuess }</h4>
        </td>
      </>
    )
  }

}

export default Contestants
