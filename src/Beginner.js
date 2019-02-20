import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./BeginnerAnswers/HelloWorld";
import HelloWorldState from "./BeginnerAnswers/HelloWorldState";
import Challenge from "./BeginnerAnswers/Challenge";

class App extends Component {
  state = {
    beginner: false,
    answers: false
  };

  toggleClick = () => {
    this.setState({
      beginner: true
    });
  };

  toggleAnswers = () => {
    this.setState({
      answers: true
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title"> Welcome to my React competency checklist</h1>
                <h2 class="subtitle">Learn the basics</h2>
              </div>
            </div>
          </section>
          {this.state.beginner !== true && (
            <button onClick={this.toggleClick}>Let's Begin</button>
          )}
          <h2 id="head">Beginner Projects</h2>
          {this.state.beginner && (
            <ol id="list">
              <li>
                Use "Create React App" to quickly create React applications.
                Also install the React Dev Tools web browser extension.
              </li>
              <li>Create your first component that prints "Hello World"</li>
              <li>
                Add state to your Hello World component. When the user clicks on
                the text, hide it.
              </li>
              <li>
                Pass information to another component as props. For example your
                Hello World component can render a child component which prints
                Goodbye world via "props.message".
              </li>
              <li>
                Draw a diagram showing the data flow within your application.
                Both within the Hello World component and the data going out via
                props.
              </li>
              <li>
                Challenge: Add a button that when clicked, shows a number on
                screen incrementing by +1 every second.
              </li>
            </ol>
          )}
          <p>Please try to do all of these without looking at the answers.</p>
          <p id="answer" onClick={this.toggleAnswers}>
            I want answers! (click here)
          </p>
          {this.state.answers && <HelloWorld />}
          {this.state.answers && <HelloWorldState />}
          {this.state.answers && <Challenge />}
        </header>
      </div>
    );
  }
}

export default App;
