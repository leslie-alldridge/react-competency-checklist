import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Register, Beginner, LandingPage } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              {/* Should we have a landing page here (Route "/") so users know what this website is all about? */}
              <Route path="/" exact component={LandingPage} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/beginner" component={Beginner} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
