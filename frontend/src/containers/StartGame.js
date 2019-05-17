import React, { Component } from 'react'
import CallContestant from './CallContestant'

class StartGame extends Component {

  constructor() {
    super()
    this.state = {
      timer: false,
      numDisplayedContestants: 0
    }
  }

  componentDidMount() {
    let length = this.props.contestants.length + 1

    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        this.setState({
          timer: true,
          numDisplayedContestants: i
         })
       }, i * 2000)
    }
  }

  render() {
    let { contestants } = this.props
    let { timer, numDisplayedContestants } = this.state

    if (timer) {
      return(
        <CallContestant
          contestants={ contestants }
          numDisplayedContestants={ numDisplayedContestants }
          length={ contestants.length }
        />
      )
    } else {
      return <div></div>
    }
  }
}

export default StartGame
