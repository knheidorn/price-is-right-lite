import React, { Component } from 'react'

class DisplayContestant extends Component {

  render() {
    let { firstName, picture } = this.props

    return(
      <div>
        <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
          alt="Game Logo"
          height="340px"
          width="340px"
        />
        <h2>
          { firstName }, COME ON DOWN!
        </h2>
        <img src={ picture } alt="Player's Avatar" />
      </div>
    )
  }

}

export default DisplayContestant
