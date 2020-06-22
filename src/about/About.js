import React from "react";
import CardDescription from "./CardDescription.js";
import GearIcon from "./icons/gear.svg";
import HammerIcon from "./icons/hammer.svg";
import LicenseIcon from "./icons/license.svg";

import "./About.css";

import Card from "./Card.js";

export default function About() {
  return (
    <div className="about">
      <div className="aboutBg"></div>
      <h1> About </h1>
      <div className="middleLine">
        <div className="topVertLine"></div>
        <div className="rightLine"></div>
        <div className="leftLine"></div>
        <div className="bottomVertLine"></div>
      </div>
      <div className="cards">
        <Card
          title="Functionality"
          description={CardDescription.card1}
          image={GearIcon}
        />
        <Card
          title="Development"
          description={CardDescription.card2}
          image={HammerIcon}
        />
        <Card
          title="License"
          description={CardDescription.card3}
          image={LicenseIcon}
        />
      </div>
    </div>
  );
}
