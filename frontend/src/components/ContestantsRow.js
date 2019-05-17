import React, { Component } from 'react'

class ContestantsRow extends Component {
  render() {
    let { firstName, picture } = this.props

    return(
      <>
        <tr>
          <th><img src={ picture } alt="Contestant Avatar"/></th>
        </tr>
        <tr>
          <td>{ firstName }</td>
        </tr>
      </>
    )
  }
}

export default ContestantsRow
