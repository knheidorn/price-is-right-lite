import React, { Component } from 'react'
import DisplayContestant from '../components/DisplayContestant'

class CallContestant extends Component {

  render() {
    let { contestants } = this.props
    return (
      <div className="App-header">
        {
          contestants.map((contestant, index) => {
            return(
              <DisplayContestant
                key={ index }
                firstName={ contestant.name }
                picture={ contestant.picture }
              />
            )
          })
        }
      </div>
    )
  }
}

export default CallContestant
