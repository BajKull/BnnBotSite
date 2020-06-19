import React, { Component } from "react";

export class Utility extends Component {
  render() {
    return (
      <div className="commandsdiv">
        <h1> Utility </h1>
        <div className="command">
          <h6> help </h6>
          <p> Displays list of available commands </p>
        </div>

        <div className="command">
          <h6> info </h6>
          <p> Displays all of your stats. </p>
        </div>

        <div className="command">
          <h6> level </h6>
          <p> Shows you your current level progress. </p>
        </div>

        <div className="command">
          <h6> poll </h6>
          <p> Allows you to create a poll. </p>
        </div>

        <div className="command">
          <h6> roll </h6>
          <p> Allows you to roll a number or roll dice. </p>
        </div>

        <div className="command">
          <h6> top10 </h6>
          <p> Shows you top 10 list of the richest fighters! </p>
        </div>

        <div className="command">
          <h6> vote </h6>
          <p> Allows you to vote in a poll. </p>
        </div>

        <div className="command">
          <h6> xp </h6>
          <p> Allows you to buy xp for money. </p>
        </div>
      </div>
    );
  }
}

export default Utility;
