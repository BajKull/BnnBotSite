import React, { Component } from 'react'
import FightImage from '../../icons/fight.png'
import GambleImage from '../../icons/gamble.png'
import ClassImage from '../../icons/class.png'
import HeistImage from '../../icons/heist.png'
import AnimalImage from '../../icons/pic.png'
import './Description.css'

export class Description extends Component {

  calculateViewport = () => {
    const location = window.scrollY + window.innerHeight
    console.log(location)
    if(location >= 750) {
      document.getElementsByClassName("des1")[0].classList.remove("desInactive")
      document.getElementsByClassName("des1")[0].classList.add("desdiv")
    }

    if(location >= 1200) {
      document.getElementsByClassName("des2")[0].classList.remove("desInactive")
      document.getElementsByClassName("des2")[0].classList.add("desdiv")
    }

    if(location >= 1700) {
      document.getElementsByClassName("des3")[0].classList.remove("desInactive")
      document.getElementsByClassName("des3")[0].classList.add("desdiv")
    }

    if(location >= 2300) {
      document.getElementsByClassName("des4")[0].classList.remove("desInactive")
      document.getElementsByClassName("des4")[0].classList.add("desdiv")
    }

    if(location >= 2700) {
      document.getElementsByClassName("des5")[0].classList.remove("desInactive")
      document.getElementsByClassName("des5")[0].classList.add("desdiv")
      window.removeEventListener('scroll', this.calculateViewport)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calculateViewport)
    this.calculateViewport()
  }

  render() {
    return (
      <div className="description" onScroll={() => this.calculateViewport()}>
        <div className="des1 desInactive">
          <div className="destxt">
            <h1 className="descriptionTitle"> Pick your class </h1>
            <p className="descriptionText"> Pick your favorite class and challange someone to a duel! </p>
          </div>
          <img src={ClassImage} alt="class" />
        </div>
        <div className="des2 desInactive">
          <img src={FightImage} alt="fight" />
          <div className="destxt">
            <h1 className="descriptionTitle"> Fight </h1>
            <p className="descriptionText"> First you will get to answer some trivia questions in order to gain powerful items increasing your stats. Then you fight for glory, money and experience points! </p>
          </div>
        </div>
        <div className="des3 desInactive">
          <div className="destxt">
            <h1 className="descriptionTitle"> Earn money </h1>
            <p className="descriptionText"> There are many ways to earn money! You can fight someone, gamble or simply collect it once an hour! </p>
          </div>
          <img src={HeistImage} alt="heist" />
        </div>
        <div className="des4 desInactive">
          <img src={GambleImage} alt="gamble" />
          <div className="destxt">
            <h1 className="descriptionTitle"> Gamble </h1>
            <p className="descriptionText"> Choose one of many games and gamble what you earned! Bring your friends along! </p>
          </div>
        </div>
        <div className="des5 desInactive">
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
