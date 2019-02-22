import React, { Component, Fragment } from "react";
import "../App.css";
import HelloWorld from "../BeginnerAnswers/HelloWorld";
import HelloWorldState from "../BeginnerAnswers/HelloWorldState";
import Challenge from "../BeginnerAnswers/Challenge";
import MainNav from "./MainNav";

class Beginner extends Component {
  state = {
    beginner: true,
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
      <Fragment>
        <MainNav />
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
            <h1 className="title is-1 beginner-title">Beginner Projects</h1>
            <div className="columns">
              {this.state.beginner !== true && (
                <div className="column is-three-quarters">
                  <button
                    onClick={this.toggleClick}
                    className="button is-large is-primary is-outlined"
                    id="begin-button"
                  >
                    Let's Begin!
                  </button>
                </div>
              )}
              {this.state.beginner && (
                <div className="column is-three-quarters">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <label className="checkbox">
                          <input type="checkbox" />
                          Use "Create React App" to quickly create React
                          applications. Also install the React Dev Tools web
                          browser extension.
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" />
                          Create your first component that prints "Hello World"
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" />
                          Add state to your Hello World component. When the user
                          clicks on the text, hide it.
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" />
                          Pass information to another component as props. For
                          example your Hello World component can render a child
                          component which prints Goodbye world via
                          "props.message".
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" />
                          Draw a diagram showing the data flow within your
                          application. Both within the Hello World component and
                          the data going out via props.
                        </label>
                        <label className="checkbox">
                          <input type="checkbox" />
                          Challenge: Add a button that when clicked, shows a
                          number on screen incrementing by +1 every second.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="tile is-parent column is-one-quarter">
                <article className="tile is-child notification is-primary">
                  <div className="content">
                    <p className="title">
                      Please try to do all of these without looking at the
                      answers
                    </p>
                    <button
                      className="button is-primary is-inverted is-outlined"
                      onClick={this.toggleAnswers}
                    >
                      {" "}
                      I want answers
                    </button>
                    <div className="content" />
                  </div>
                </article>
              </div>
              {this.state.answers && <HelloWorld />}
              {this.state.answers && <HelloWorldState />}
              {this.state.answers && <Challenge />}
            </div>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default Beginner;
