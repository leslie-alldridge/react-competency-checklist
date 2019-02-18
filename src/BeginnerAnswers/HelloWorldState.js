import React, { Component } from 'react';
import GoodbyeWorld from './GoodbyeWorld';

class HelloWorldState extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
        <div>
      {!this.state.clicked && (<p onClick={this.handleClick}>Hello World State!</p>)}
      {this.state.clicked && (<p onClick={this.handleClick}>Click me to bring the text back...</p>)}
      <GoodbyeWorld message={"Goodbye World!"}/>
      </div>
    );
  }
}

export default HelloWorldState;
