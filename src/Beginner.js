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
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
              <div className="container react-header">
                <h1 className="title" id="header">
                  {" "}
                  Welcome to my React competency checklist
                </h1>
                <h2 className="subtitle">Learn the basics</h2>
              </div>
            </div>
          </section>
          <div className="columns">
            <div className="column is-three-quarter">
              <h1 class="title is-1 beginner-title">Beginner Projects</h1>
              {this.state.beginner !== true && (
                <button
                  onClick={this.toggleClick}
                  className="button is-large is-primary is-outlined"
                  id="begin-button"
                >
                  Let's Begin!
                </button>
              )}
            </div>
            {this.state.beginner && (
              <ol id="list">
                <li>
                  Use "Create React App" to quickly create React applications.
                  Also install the React Dev Tools web browser extension.
                </li>
                <li>Create your first component that prints "Hello World"</li>
                <li>
                  Add state to your Hello World component. When the user clicks
                  on the text, hide it.
                </li>
                <li>
                  Pass information to another component as props. For example
                  your Hello World component can render a child component which
                  prints Goodbye world via "props.message".
                </li>
                <li>
                  Draw a diagram showing the data flow within your application.
                  Both within the Hello World component and the data going out
                  via props.
                </li>
                <li>
                  Challenge: Add a button that when clicked, shows a number on
                  screen incrementing by +1 every second.
                </li>
              </ol>
            )}
            <div class="tile is-parent column is-one-quarter">
              <article class="tile is-child notification is-primary">
                <div class="content">
                  <p class="title">
                    Please try to do all of these without looking at the answers
                  </p>
                  <button
                    class="button is-primary is-inverted is-outlined"
                    onClick={this.toggleAnswers}
                  >
                    {" "}
                    I want answers
                  </button>
                  <div class="content" />
                </div>
              </article>
            </div>
            {this.state.answers && <HelloWorld />}
            {this.state.answers && <HelloWorldState />}
            {this.state.answers && <Challenge />}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
