import React, { Component } from "react";

import "./Featured.css";

class Featured extends Component {
  state = {};
  render() {
    return (
      <div className="featured-main">
        <div className="row">
          <div className="col-12 portfolio-item text-center">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/1100x585"
              alt=""
            />
          </div>
          <div className="col-12 portfolio-item text-center">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/1100x585"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
