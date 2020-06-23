import React, { Component } from "react";
import LogoIcon from "../../icons/logo.png";
import ArrowIcon from "./arrow.svg";
import * as Scroll from "react-scroll";

export class Main extends Component {
  scrollDown = () => {
    const scroller = Scroll.scroller;
    scroller.scrollTo("descriptionScroll", {
      duration: 750,
      delay: 50,
      smooth: true,
      offset: -50,
    });
  };

  render() {
    return (
      <div className="main">
        <h1 className="mainTitle"> Bnn Bot </h1>
        <img className="mainLogo" src={LogoIcon} alt="logo" />
        <h3 className="mainHeader">Fight, earn money, gamble and many more!</h3>
        <button className="mainInvite"> Invite me! </button>
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
