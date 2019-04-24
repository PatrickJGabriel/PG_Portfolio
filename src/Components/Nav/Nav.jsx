import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  state = {};

  render() {
    return (
      <div className="nav-main row">
        <div className="col-2 brand">
          <a href="#" id="home" onClick={this.props.handleClick}>
            Patrick.
          </a>
        </div>
        <div className="col-10 menu">
          <ul>
            <li>
              <a href="#" id="about" onClick={this.props.handleClick}>
                behance
              </a>
            </li>
            <li>
              <a href="#" id="portfolio" onClick={this.props.handleClick}>
                instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
