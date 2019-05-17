import React, { Component } from 'react'

class BidForm extends Component {

  render() {
    let { firstName, picture } = this.props

    return(
      <>
        <tr>
          <td><img src={ picture } alt="Player's Avatar" height="60px" width="60px"/></td>
        </tr>
        <tr>
          <td><h4>{ firstName }</h4></td>
        </tr>
      </>
    )
  }

}

export default BidForm
