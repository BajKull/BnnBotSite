import React, { Component } from 'react'
import FightImage from '../icons/fight.png'
import GambleImage from '../icons/gamble.png'
import ClassImage from '../icons/class.png'
import HeistImage from '../icons/heist.png'
import AnimalImage from '../icons/pic.png'
import './Description.css'

export class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="des1 desdiv">
          <div className="destxt">
            <h1 className="descriptionTitle"> Pick your class </h1>
            <p className="descriptionText"> Pick your favorite class and challange someone to a duel! </p>
          </div>
          <img src={ClassImage} alt="class" />
        </div>
        <div className="des2 desdiv">
          <img src={FightImage} alt="fight" />
          <div className="destxt">
            <h1 className="descriptionTitle"> Fight </h1>
            <p className="descriptionText"> First you will get to answer some trivia questions in order to gain powerful items increasing your stats. Then you fight for glory, money and experience points! </p>
          </div>
        </div>
        <div className="des3 desdiv">
          <div className="destxt">
            <h1 className="descriptionTitle"> Earn money </h1>
            <p className="descriptionText"> Pick your class and challange someone to a duel! First you will get to answer some trivia questions in order to gain powerful items increasing your stats. Then you fight for glory, money and experience points!</p>
          </div>
          <img src={HeistImage} alt="heist" />
        </div>
        <div className="des4 desdiv">
          <img src={GambleImage} alt="gamble" />
          <div className="destxt">
            <h1 className="descriptionTitle"> Gamble </h1>
            <p className="descriptionText"> Choose one of many games and gamble what you earned! Bring your friends along! </p>
          </div>
        </div>
        <div className="des5 desdiv">
          <div className="destxt">
            <h1 className="descriptionTitle"> Send images </h1>
            <p className="descriptionText"> Do you love animals? Get random images of them! </p>
          </div>
          <img src={AnimalImage} alt="animal" />
        </div>
      </div>
    )
  }
}

export default Description
