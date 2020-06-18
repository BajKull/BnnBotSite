import React, { Component } from 'react'
import Main from './main/Main.js'
import Description from './description/Description.js'
import Footer from './footer/Footer.js'
import './main/MainScreen.css'

export class MainScreen extends Component {

  render() {
    return (
      <div>
        <Main />
        <Description />
        <Footer />
      </div>
    )
  }
}

export default MainScreen
