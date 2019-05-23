import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="nav-main row">
        <div className="col-2 brand">
          <a href="https://patrickjgabriel.com/">Patrick.</a>
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
              <a href="https://github.com/PatrickJGabriel" id="" target="blank">
                github
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

export default Footer;
