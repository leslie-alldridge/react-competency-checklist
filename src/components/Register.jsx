import React from "react";

export default function Register() {
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
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Confirm Password"
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
