import React, { Component } from 'react';
// import '../images/The-Price-Is-Right-TV-edit.png';

class LeaderBoard extends Component {

  render() {
    let sortedScores = this.props.scores.sort((a, b) => b.score - a.score)
    let topScores = sortedScores.slice(0, 5)

    return (
      <div className="App-header">
        <img src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
          alt="Game Logo"
          height="300px"
          width="300px"
        />
        <h1>High Scores</h1>
        <table cellSpacing="0" id="scoreTable">
          <tbody>
            {
              topScores.map((score, index) => {
                return (
                  <tr key={ index }>
                    <td>{ index + 1 + '.' }</td>
                    <td>{ score.user.first_name }</td>
                    <td>{ score.score }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default LeaderBoard;
