import React, { Component } from "react";

export class Fighting extends Component {
  render() {
    return (
      <div className="commandsdiv">
        <h1> Fighting </h1>
        <div className="command">
          <h6> fight </h6>
          <p> Allows you to fight other members of the fighting club. </p>
        </div>
        <div className="command">
          <h6> class </h6>
          <p>
            {" "}
            Allows you to join the fighting club or change your class if you're
            already a member.{" "}
          </p>
        </div>
        <div className="command">
          <h6> classinfo </h6>
          <p> Displays available classes and their stats. </p>
        </div>
      </div>
    );
  }
}

export default Fighting;
