import React, { Component } from 'react'
import Main from './Main.js'
import Description from './Description.js'
import './MainScreen.css'

export class MainScreen extends Component {
  render() {
    return (
      <div>
        <Main />
        <Description />
      </div>
    )
  }
}

export default MainScreen
