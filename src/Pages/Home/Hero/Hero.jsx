import React, { Component } from "react";
import TypistTitle from "./Typist-Title/TypistTitle";

import "./Hero.css";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero-main row">
        <div className="col">
          <div className="tagline-container">
            <TypistTitle />
          </div>
          <div className="col about-container">
            <p>
              I create minimalistic websites that put you and your product at
              the forefront. Everything we create is important; Showcasing your
              brand and celebrating what makes it unique is my passion.
            </p>
          </div>
          <div className="contact-container">
            <a href="mailto:patrickjasongabriel@gmail.com">
              patrickjasongabriel@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
