import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "" || null,
      lastName: "" || null,
      email: "" || null,
      formType: "login"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
    this.displaySignup = this.displaySignup.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // FIXME: successful login takes user to /jobs but does not recognize that they're authenticated until you refresh the page
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formType === "login") {
      this.props.authenticate(this.state);
    } else {
      this.props.register(this.state);
    }
    this.props.history.push("/jobs");
  }

  displayLogin() {
    this.setState({
      formType: "login"
    });
  }

  displaySignup() {
    this.setState({
      formType: "signup"
    });
  }

  render() {
    // TODO: create logic to display login or sign-up depending on button clicked
    // for now the form just does login
    console.log(this.state.formType, "form")
    if (this.state.formType === "signup") {
      return (
        <div>
          <button id="login" onClick={this.displayLogin} className="btn btn-info">Login</button>
          <button id="sign-up" onClick={this.displaySignup} className="btn btn-info">Signup</button>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="form-control"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="first-name"
              className="form-control"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="last-name"
              className="form-control"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )
    }
    return (
      <div>
        <button id="login" onClick={this.displayLogin} className="btn btn-info">Login</button>
        <button id="sign-up" onClick={this.displaySignup} className="btn btn-info">Signup</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="form-control"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            className="form-control"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary">
            Submit
            </button>
        </form>
      </div>
    )


  }
}

export default LoginForm;