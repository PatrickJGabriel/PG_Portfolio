import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
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
                behance
              </a>
            </li>
            <li>
              <a href="#" id="">
                instagram
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
