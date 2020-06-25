import React, { Component } from "react";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="mainFooter">
        <h5> What are you waiting for?! </h5>
        <a href="https://discord.com/api/oauth2/authorize?client_id=699018077953851413&permissions=223296&scope=bot">
          <button className="mainInvite"> Invite me! </button>
        </a>
      </div>
    );
  }
}

export default Footer;
