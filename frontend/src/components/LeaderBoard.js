import React, { Component } from 'react';
// import '../images/The-Price-Is-Right-TV-edit.png';

class LeaderBoard extends Component {

  render() {
    let sortedScores = this.props.scores.sort((a, b) => b.score - a.score)
    let topScores = sortedScores.slice(0, 5)

    return (
      <div className="App-header">
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
        <img src="https://i.imgur.com/vFqrxxj.png"
          alt="Game Logo"
          height="400px"
          width="400px"
        />
      </div>
    )
  }
}

export default LeaderBoard;
