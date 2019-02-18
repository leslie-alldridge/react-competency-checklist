import React, { Component } from 'react';

class Challenge extends Component {
  state = {
    count: 0,
    time: false
  }

  startTimer = () => {
    this.setState({
        time: !this.state.time
    })
    
  }

  render() {
    this.state.time && setTimeout(() => {
        this.setState({
            count: this.state.count + 1
          })
    }, 1000);
    return (
        <div>
      <button onClick={this.startTimer}>{this.state.time === false ? "Click me to start!" : "Click me to stop!"}</button>
      
      <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Challenge;
