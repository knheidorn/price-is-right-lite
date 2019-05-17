import React, { Component } from 'react'

class BidForm extends Component {

  render() {
    let { firstName, picture } = this.props

    return(
      <div className="App-header">
        <table>
          <tbody>
            <tr>
              <td><h4>{ firstName }</h4></td>
            </tr>
            <tr>
              <td><img src={ picture } alt="Player's Avatar" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default BidForm
