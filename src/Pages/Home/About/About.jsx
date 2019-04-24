import React, { Component } from "react";
import about_photo from "../../../Images/about_photo.png";

import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-main">
        <div className="row">
          <div className="col about-title">
            <h1 id="about-title">Clothes, concerts, and general tomfoolery.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col about-photo">
            <img
              className="img-fluid"
              id="about-photo"
              src={about_photo}
              alt="about-photo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">hello</div>
          <div className="col-6">hello</div>
        </div>
      </div>
    );
  }
}

export default About;
