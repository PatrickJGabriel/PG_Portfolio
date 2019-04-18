import React, { Component } from "react";
import Typist from "react-typist";

import "./TypistTitle.css";

class TypistTitle extends Component {
  state = {};
  render() {
    return (
      <div className="typist-main">
        <Typist className="Typist">
          <span>Patrick Gabriel, Web Designer and Developer.</span>
        </Typist>
      </div>
    );
  }
}

export default TypistTitle;
