import React, { Component } from "react";

export class Gambling extends Component {
  render() {
    return (
      <div className="commandsdiv">
        <h1> Gambling </h1>
        <div className="command">
          <h6> flip </h6>
          <p> Allows you to play heads or tails with your money. </p>
        </div>
        <div className="command">
          <h6> highlow </h6>
          <p> Allows you to play high low with your money. </p>
        </div>
        <div className="command">
          <h6> heist </h6>
          <p> Allows you to attempt a heist. </p>
        </div>
        <div className="command">
          <h6> jackpot </h6>
          <p> Allows you to play jackpot with your friends! </p>
        </div>
      </div>
    );
  }
}

export default Gambling;
