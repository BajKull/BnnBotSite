import React, { Component } from 'react'
import Navigationbar from './navbar/Navigationbar.js'
import MainScreen from './mainscreen/MainScreen.js'

export class App extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <MainScreen />
      </div>
    )
  }
}

export default App
