import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav-main row">
        <div className="col brand">
          <a href="#">Patrick.</a>
        </div>
        <div className="col menu">
          <a href="#" id="about">
            about
          </a>
          <a href="#" id="portfolio">
            portfolio
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
