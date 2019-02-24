import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Login, Register, Beginner, LandingPage } from "./components";
import HelpPage from "./components/HelpPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/beginner" component={Beginner} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
