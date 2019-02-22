import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Register</h3>
                <p className="subtitle has-text-grey">
                  Please register to proceed.
                </p>
                <div className="box">
                  <figure className="avatar">
                    <img alt="placeholder" src="/react.svg" />
                  </figure>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Username"
                          autoFocus=""
                          name="username"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="email"
                          placeholder="Email"
                          autoFocus=""
                          name="email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="Confirm Password"
                          name="password2"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <button className="button is-block is-info is-large is-fullwidth">
                      Register
                    </button>
                  </form>
                </div>
                <p className="has-text-grey">
                  <a href="/login">Login</a> &nbsp;·&nbsp;
                  <a href="/help">Need Help?</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
