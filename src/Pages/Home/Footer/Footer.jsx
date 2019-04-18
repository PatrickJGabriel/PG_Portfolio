import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="nav-main row">
        <div className="col brand">
          <a href="#">Patrick.</a>
        </div>
        <div className="col menu">
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
        </div>
      </div>
    );
  }
}

export default Footer;
