import React, { Component } from "react";
import Typist from "react-typist";

class TypistTitle extends Component {
  state = {};
  render() {
    return (
      <div className="typist-main">
        <Typist>
          <span>Patrick Gabriel, Web Designer/Developer.</span>
        </Typist>
      </div>
    );
  }
}

export default TypistTitle;
