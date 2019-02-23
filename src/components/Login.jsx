import React, { Component } from "react";
import MainNav from "./MainNav";

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
        <MainNav />
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">
                  Please login to proceed.
                </p>
                <div className="box">
                  <figure className="avatar">
                    <img
                      className="form-image"
                      alt="placeholder"
                      src="/images/avatar.png"
                    />
                  </figure>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          autoFocus=""
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          name="password"
                          placeholder="Your Password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="remember"
                          onClick={this.handleCheck}
                        />
                        Remember me
                      </label>
                    </div>
                    <button className="button is-block is-info is-large is-fullwidth">
                      Login
                    </button>
                  </form>
                </div>
                <p className="has-text-grey">
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
