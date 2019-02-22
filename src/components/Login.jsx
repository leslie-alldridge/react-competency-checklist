import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: "off"
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheck = () => {
    this.setState({
      remember: this.state.remember === "on" ? "off" : "on"
    });
  };

  render() {
    return (
      <div>
        <section class="hero is-success is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
                <h3 class="title has-text-grey">Login</h3>
                <p class="subtitle has-text-grey">Please login to proceed.</p>
                <div class="box">
                  <figure class="avatar">
                    <img alt="placeholder" src="/react.svg" />
                  </figure>
                  <form>
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          autoFocus=""
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="password"
                          name="password"
                          placeholder="Your Password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="field">
                      <label class="checkbox">
                        <input
                          type="checkbox"
                          name="remember"
                          onClick={this.handleCheck}
                        />
                        Remember me
                      </label>
                    </div>
                    <button class="button is-block is-info is-large is-fullwidth">
                      Login
                    </button>
                  </form>
                </div>
                <p class="has-text-grey">
                  <a href="/register">Sign Up</a> &nbsp;·&nbsp;
                  <a href="/forgot">Forgot Password</a> &nbsp;·&nbsp;
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
