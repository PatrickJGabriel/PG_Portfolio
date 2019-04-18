import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav-main row">
        <div className="col-4 brand">
          <a href="#">Patrick.</a>
        </div>
        <div className="col-8 menu">
          <ul>
            <li>
              <a href="#" id="about">
                about
              </a>
            </li>
            <li>
              <a href="#" id="">
                portfolio
              </a>
            </li>
          </ul>
          {/* <a href="#" id="about">
            about
          </a>
          <a href="#" id="portfolio">
            portfolio
          </a> */}
        </div>
      </div>
    );
  }
}

export default Nav;
