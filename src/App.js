import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./JoblyApi";
import jwt from 'jsonwebtoken';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: {},
      isLoggedIn: false
    };
    this.authenticate = this.authenticate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    await this.authenticate();
  }

/** 
  checks for token in localStorage: if present, gets currUser info from db
  and keeps user logged in.
  if no token present, takes username and password from login form,
  authenticates user, sets token.
*/
  async authenticate(userData) {
    if (localStorage.token) {
      let decodedToken = jwt.decode(localStorage.token);
      let currentUser = await JoblyApi.getCurrentUser(decodedToken.username);

      this.setState({
        currUser: currentUser,
        isLoggedIn: true
      });
    }
    if (userData) {
      const token = await JoblyApi.authenticateUser(userData);
      localStorage.setItem('token', token);

      let currentUser = await JoblyApi.getCurrentUser(userData.username);
      this.setState({ currUser: currentUser, isLoggedIn: true });
    }
  }

  handleLogout() {
    localStorage.removeItem("token");
    this.setState({ currUser: {}, isLoggedIn: false });
  }

  render() {
    console.log(this.state.currUser)
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes authenticate={this.authenticate} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
