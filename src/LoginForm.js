import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:"",
      // firstname: "",
      // lastname: "",
      // email: "",
      //errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // TODO: pass data up to parent component and make api calls there
  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate(this.state);
  }

  render() {
    
    // TODO: create logic to display login or sign-up depending on button clicked
    // for now the form just does login
    return (
      <div>
        <button id="login" className="btn btn-info">Login</button>
        {/* <button id="sign-up" className="btn btn-info">Signup</button> */}
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
{/*           
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
          /> */}

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