import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ReactCardFlip from 'react-card-flip';
class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <Zoom>
        <ReactCardFlip flipSpeedBackToFront="2" flipSpeedFrontToBack	="2"isFlipped={this.state.isFlipped}>
          <div key="front" >
          <img onClick={this.handleClick} height="800" width="800" src={require('../images/card.png')} alt="card"/>
          </div>
          <div key="back" >
          <div class="container">
          <img onClick={this.handleClick} height="800" width="800" src={require('../images/card2.png')} alt="card"/>
            <div class="bottom-left">Bottom Left</div>
            <div class="top-left">Top Left</div>
            <div class="top-right">Top Right</div>
            <div class="bottom-right">Bottom Right</div>
            <div class="centered">Centered</div>
          </div>

          </div>
        </ReactCardFlip>
      </Zoom>
    )
  }
}

export default Result;