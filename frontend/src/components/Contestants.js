import React, { Component } from 'react'

class Contestants extends Component {

  render() {
    let { firstName, picture, eGuess } = this.props

    return(
      <>
        <tr>
          <td><img src={ picture } alt="Player's Avatar" height="60px" width="60px"/></td>
        </tr>
        <tr>
          <td><h4>{ firstName }'s Bid:  ${ eGuess }</h4></td>
        </tr>
      </>
    )
  }

}

export default Contestants
