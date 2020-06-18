import React, { Component } from 'react'
import LogoIcon from '../../icons/logo.png'

export class Main extends Component {
  render() {
    return (
      <div className="main">
          <h1 className="mainTitle"> Bnn Bot </h1>
          <img className="mainLogo" src={LogoIcon} alt="logo"/>
          <h3 className="mainHeader"> Fight, earn money, gamble and many more!</h3>
          <button className="mainInvite"> Invite me! </button>
      </div>
    )
  }
}

export default Main
