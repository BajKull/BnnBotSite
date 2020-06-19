import React, { Component } from "react";

export class Pictures extends Component {
  render() {
    return (
      <div className="commandsdiv">
        <h1> Pictures </h1>

        <div className="command">
          <h6> pic </h6>
          <p> Sends you a picture of an animal. </p>
        </div>
        <div className="command">
          <h6> piclist </h6>
          <p> Sends you a list of animals the bot can send. </p>
        </div>
        <div className="command">
          <h6> porn </h6>
          <p> Sends you naughty pictures. </p>
        </div>
      </div>
    );
  }
}

export default Pictures;
