import React, { Component } from "react";
import Beginner from "./Beginner";
import MainNav from "./components/MainNav";

class App extends Component {
  state = {
    beginner: false,
    intermediate: false,
    advanced: false
  };

  toggleClick = () => {
    this.setState({
      beginner: !this.state.beginner
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainNav />
          <Beginner />
        </header>
      </div>
    );
  }
}

export default App;
