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
              className="img-responsive"
              src="http://via.placeholder.com/1100x385"
              alt=""
            />
          </div>
          {/* <div className="col-12 portfolio-description">
            <h1>Title</h1>
            <p>Description</p>
          </div> */}
          <div className="col-12 portfolio-item text-center">
            <img
              className="img-responsive"
              src="http://via.placeholder.com/1100x385"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
