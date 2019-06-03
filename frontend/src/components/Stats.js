import React, { Component } from 'react';
// import '../images/The-Price-Is-Right-TV-edit.png';

class Stats extends Component {

  render() {
    let { firstName, userId, picture, scores } = this.props
    let sortedScores = this.props.scores.sort((a, b) => b.score - a.score)

    return (
      <div className="Stats-page">
        <img className="Logo-stats"
          src="http://theotherjohnsanders.com/wp-content/uploads/2017/07/the-price-is-right-logo.png"
          alt="Game Logo"
          height="300px"
          width="300px"
        />
        <h1 className="Title-stats">User Stats</h1>
        <img src={ picture } alt="User Avatar" className="Avatar-stats"/>
        <table className="Stats-table">
          <tbody>
            <tr>
              <td>
                Display Name:
              </td>
              <td>
                { firstName }
              </td>
            </tr>

            <tr>
              <td>
                Highest Score:
              </td>
              {
                sortedScores.map((score, index) => {
                  if (score.user_id === userId) {
                    return (
                      <td>
                        { score }
                      </td>
                    )
                  }
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Stats;
