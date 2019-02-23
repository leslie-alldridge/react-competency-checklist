import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Register, Beginner, LandingPage } from "./components";
import HelpPage from "./components/HelpPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/help" component={HelpPage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/beginner" component={Beginner} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
