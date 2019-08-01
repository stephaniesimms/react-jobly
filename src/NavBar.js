import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div href="/" className="nav-item">
          <NavLink className="nav-link" to="/">Jobly</NavLink>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
          </li>

          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
          </li>

          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Log out</NavLink>
          </li>
        </ul>
      </nav>

    )
  }
}

export default NavBar;

