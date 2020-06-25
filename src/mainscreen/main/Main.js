import React, { Component } from "react";
import LogoIcon from "../../icons/logo.png";
import ArrowIcon from "./arrow.svg";
import { scroller } from "react-scroll";

import SwordIcon from "../../icons/sword.svg";
import MoneyIcon from "../../icons/money.svg";
import GamblingIcon from "../../icons/gambling.svg";

export class Main extends Component {
  scrollDown = () => {
    const sc = scroller;
    sc.scrollTo("descriptionScroll", {
      duration: 750,
      delay: 50,
      smooth: true,
      offset: -50,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="aboutBg"></div>
        <h1 className="mainTitle"> Bnn Bot </h1>
        <img className="mainLogo" src={LogoIcon} alt="logo" />
        <h3 className="mainHeader">
          <span className="redText">
            {" "}
            <img src={SwordIcon} alt="" className="slangImage delay10" />
            Fight,
          </span>{" "}
          <span className="greenText">
            {" "}
            <img src={MoneyIcon} alt="" className="slangImage delay20" />
            earn money,
          </span>{" "}
          <span className="purpleText">
            {" "}
            <img src={GamblingIcon} alt="" className="slangImage delay30" />
            gamble
          </span>{" "}
          and many more!
        </h3>
        <a href="https://discord.com/api/oauth2/authorize?client_id=699018077953851413&permissions=223296&scope=bot">
          <button className="mainInvite"> Invite me! </button>
        </a>
        <img
          className="arrowIcon"
          src={ArrowIcon}
          alt="arrow"
          onClick={this.scrollDown}
        />
      </div>
    );
  }
}

export default Main;
