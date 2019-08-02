import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./JoblyApi";
import jwt from 'jsonwebtoken';

// add state for currUser
// add componentDidMount() method to check if currUser exists/is logged in

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: {},
      error: ""
    };
    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.state.currUser).length !== 0) {
      //pass currUser for authentication to each route
    }
    else {
      this.authenticate();
    }
  }

// TODO: after decoding token need to check that it is a valid user via API
// TODO: get full user info from API to add to currUser obj
  async authenticate(userData) {
    if (localStorage.token) {
      let decodedToken = jwt.decode(localStorage.token);
      // add API call to get full user info from server and add to currUser obj
      
      this.setState({
        currUser: decodedToken.username
      });
    }
    if (userData) {
      const token = await JoblyApi.authenticateUser(userData);
      this.setState({ currUser: userData.username });
      localStorage.setItem('token', token);
    }
  }


  render() {
    console.log(this.state.currUser)
    // console.log("error:", this.state.error)
    // if (this.state.error !== "") {
    //   return <div>{this.state.error}</div>
    // }
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
