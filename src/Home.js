import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h4>Jobly</h4>
        <p>All the jobs in one, convenient place.</p>
        <Link to='/login'>
          <button className="btn btn-info">Login</button>
        </Link>
      </div >
    )
  }
}

export default Home;