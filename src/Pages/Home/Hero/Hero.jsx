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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="contact-container">
            <a href="#">me@patricksoriano.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
