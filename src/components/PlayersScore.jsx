import { Component } from 'react';
import '/public/assets/css/playersScore.css';

class PlayersScore extends Component {
  state = {
    player1Score: 0,
    player2Score: 0,
  };

  render() {
    return (
      <>
        <div className='d-flex justify-content-around'>
          <div className='d-inline-block text-center'>
            <span className='playerName bg-secondary-subtle py-1 px-3 h4'>
              {this.props.playerOneName}
            </span>
            <span className='d-inline-block mt-3 fs-3'>
              {this.state.player1Score}
            </span>
          </div>
          <span className='h3'>VS</span>
          <div className='d-inline-block text-center'>
            <span className='playerName bg-secondary-subtle py-1 px-3 h4'>
              {this.props.playerTwoName}
            </span>
            <span className='d-inline-block mt-3 fs-3'>
              {this.state.player2Score}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default PlayersScore;
