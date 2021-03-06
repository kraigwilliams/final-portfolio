import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
  render() {
    return (
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <ul>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          
        </ul>
      </nav>
    );
  }
}

export default Nav;
