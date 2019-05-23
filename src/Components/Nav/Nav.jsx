import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  state = {};

  render() {
    return (
      <div className="nav-main row">
        <div className="col-2 brand">
          <a href="https://patrickjgabriel.com/" id="home">
            Patrick.
          </a>
        </div>
        <div className="col-10 menu">
          <ul>
            <li>
              <a
                href="https://www.behance.net/patricksorianodesign"
                id="about"
                target="blank"
              >
                behance
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PatrickJGabriel"
                id="portfolio"
                target="blank"
              >
                github
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
