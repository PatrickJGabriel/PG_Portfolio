import React, { Component } from "react";

// CSS Animation Library - Fade
import Fade from "react-reveal/Fade";

// Images
import amps from "../../../Images/amps_portfolio2.png";
import zravia from "../../../Images/zravia_portfolio2.png";
import scrim from "../../../Images/scrim_portfolio2.png";
import encore from "../../../Images/encore_portfolio2.png";

import "./Featured.css";

let darkStyle = {
  color: "#232323"
};

class Featured extends Component {
  state = {};
  render() {
    return (
      <div className="featured-main">
        <div className="row">
          <div className="col-12 portfolio-item">
            <a href="http://ampshare.co/" target="blank">
              <Fade bottom>
                <div className="card">
                  <img className="card-img" src={amps} alt="Card image" />
                  <div className="card-img-overlay">
                    <p className="card-text" id="featured-title">
                      Featured Case
                    </p>
                    <p className="card-text" id="item-title">
                      amps
                    </p>
                  </div>
                </div>
              </Fade>
            </a>
          </div>
          <div className="col-12 portfolio-item">
            <a
              href="https://www.behance.net/gallery/32344345/ZRAVIA-Music-PortfolioShowcase"
              target="blank"
            >
              <Fade bottom>
                <div className="card">
                  <img className="card-img" src={zravia} alt="Card image" />
                  <div className="card-img-overlay">
                    <p className="card-text" id="featured-title">
                      Featured Case
                    </p>
                    <p className="card-text" id="item-title">
                      zravia
                    </p>
                  </div>
                </div>
              </Fade>
            </a>
          </div>
          <div className="col-12 portfolio-item ">
            <a
              href="https://www.behance.net/gallery/57199999/SCRIM-E-Sports-Team-Scrimmage-Finder"
              target="blank"
            >
              <Fade bottom>
                <div className="card">
                  <img className="card-img" src={scrim} alt="Card image" />
                  <div className="card-img-overlay">
                    <p
                      className="card-text"
                      id="featured-title"
                      style={darkStyle}
                    >
                      Featured Case
                    </p>
                    <p className="card-text" id="item-title" style={darkStyle}>
                      scrim
                    </p>
                  </div>
                </div>
              </Fade>
            </a>
          </div>
          <div className="col-12 portfolio-item ">
            <a href="https://onemoresong.io/" target="blank">
              <Fade bottom>
                <div className="card">
                  <img className="card-img" src={encore} alt="Card image" />
                  <div className="card-img-overlay">
                    <p
                      className="card-text"
                      id="featured-title"
                      style={darkStyle}
                    >
                      Featured Case
                    </p>

                    <p className="card-text" id="item-title" style={darkStyle}>
                      encore
                    </p>
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
