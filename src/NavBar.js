import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <a href="/" className="nav-item">
          <NavLink className="nav-link" to="/">Jobly</NavLink>
        </a>

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

{/* <Nav className="justify-content-end" activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
      </Nav.Link>
  </Nav.Item>
</Nav>
</> */}