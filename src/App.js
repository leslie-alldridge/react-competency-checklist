import React, { Component } from 'react';
import './App.css';
import Beginner from './Beginner'

class App extends Component {
  state = {
    beginner: false,
    intermediate: false,
    advanced: false
  }

  toggleClick = () => {
    this.setState({
      beginner: !this.state.beginner
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Beginner />
        </header>
      </div>
    );
  }
}

export default App;
