import React, { Component } from 'react'

class DisplayContestant extends Component {

  render() {
    let { firstName, picture } = this.props
    
    return(
      <div className="App-header">
        <img src="https://i.imgur.com/vFqrxxj.png"
          alt="Game Logo"
          height="400px"
          width="400px"
        />
        <h2>
          { firstName }, come on down!
        </h2>
        <img src={ picture } alt="Player's Avatar" />
      </div>
    )
  }

}

export default DisplayContestant
