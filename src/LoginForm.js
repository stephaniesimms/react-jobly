import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:"",
      firstname:"",
      lastname:"",
      email:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // TODO: pass data up to parent component and make api calls there
  async handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <button className="btn btn-info">Login</button>
        <button className="btn btn-info">Signup</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            className="form-control"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="firstname"
            className="form-control"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-control"
            value={this.state.lastname}
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
}

export default LoginForm;