import React, { Component } from "react";
// import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-info">Login</a>
                  </p>
                  <p className="control">
                    <a className="button is-primary">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

class CoolButton extends Component {
  render() {
    // const {className} = this.props;
    // const isSmall = this.props.isSmall;
    // const isDanger = this.propos.isDanger;

    return (
      <button
        className={`button ${this.props.isSmall ? "is-small" : ""} ${this.props
          .isDanger ? "is-danger" : ""} ${this.props.isSuccess ? "is-success" : ""} ${this.props.className}`}
      >
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Max Ferhani" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g max.ferhani@gmail.com"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}
export default App;
