import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./navbar/Navigationbar.js";
import MainScreen from "./mainscreen/MainScreen.js";
import Commands from "./commands/Commands.js";
import About from "./about/About.js";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigationbar />
          <Switch>
            <Route path="/" exact component={MainScreen} />
            <Route path="/commands" component={Commands} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
