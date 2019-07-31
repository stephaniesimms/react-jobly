import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
// import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Jobly</NavLink>
            </li>

            <li className="nav-item mr-4 active">
              <NavLink className="nav-link" to="/companies">Companies</NavLink>
            </li>

            <li className="nav-item mr-4 active">
              <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            </li>

            <li className="nav-item mr-4 active">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Log out</NavLink>
            </li>
          </ul>
      </nav>
      
    )
  }
}

export default NavBar;