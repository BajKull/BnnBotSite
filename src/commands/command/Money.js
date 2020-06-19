import React, { Component } from "react";

export class Money extends Component {
  render() {
    return (
      <div className="commandsdiv">
        <h1> Money </h1>
        <div className="command">
          <h6> balance </h6>
          <p> Displays balance of your account. </p>
        </div>
        <div className="command">
          <h6> collect </h6>
          <p>
            {" "}
            Allows you to earn money which is used to gamble or level up your
            profile!{" "}
          </p>
        </div>
        <div className="command">
          <h6> donate </h6>
          <p> Allows you to transfer money to someone else! </p>
        </div>
      </div>
    );
  }
}

export default Money;
