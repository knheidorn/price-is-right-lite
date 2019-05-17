import React, { Component } from 'react'
import DisplayContestant from '../components/DisplayContestant'
import ContestantsRow from '../components/ContestantsRow'

class CallContestant extends Component {

  render() {
    let { contestants, numDisplayedContestants, length } = this.props

    return (
      <div className="App-header">
        {
          contestants.map((contestant, index) => {
            if (index === numDisplayedContestants) {
              return (
                <div  key={ index }>
                  <DisplayContestant
                    firstName={ contestant.name }
                    picture={ contestant.picture }
                    />
                </div>
              )

            } else if (length === numDisplayedContestants) {
              return(
                <div key={ index }>
                  <table>
                    <tbody>
                    <ContestantsRow
                      firstName={ contestant.name }
                      picture={ contestant.picture }
                    />
                    </tbody>
                  </table>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default CallContestant
