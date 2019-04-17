import React, { Component } from "react";

import "./Coffee-Ico.css";

class Coffee extends Component {
  state = {};
  render() {
    return (
      <div className="coffee-ico-container">
        <div className="pineapples">
          <div className="mug-coffee">
            <div className="smoke-container">
              <svg width="80px" height="73px" viewbox="0 0 31 73">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    className="smokes"
                    transform="translate(2.000000, 2.000000)"
                    stroke="#BEBEBE"
                    stroke-width="5"
                  >
                    <g className="smoke-1">
                      <path
                        id="Shape1"
                        d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                      />
                    </g>
                    <g className="smoke-2">
                      <path
                        id="Shape2"
                        d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                      />
                    </g>
                    <g className="smoke-3">
                      <path
                        id="Shape3"
                        d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="mug" />
          </div>
        </div>
      </div>
    );
  }
}

export default Coffee;
