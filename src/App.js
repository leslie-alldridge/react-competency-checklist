import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Beginner from "./components/Beginner";
import MainNav from "./components/MainNav";

class App extends Component {
  state = {
    intermediate: false,
    advanced: false
  };

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Switch>
              <Route path="/" component={MainNav} />
              <Route  path="/beginner" component={Beginner} />
            </Switch>
        </header>
      </div>
    );
  }
}

export default App;
