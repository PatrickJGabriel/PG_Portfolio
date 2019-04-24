import React, { Component } from "react";
import amps from "../../../Images/amps_portfolio.png";
import zravia from "../../../Images/zravia_portfolio.png";
import scrim from "../../../Images/scrim_portfolio.png";
import encore from "../../../Images/encore_portfolio.png";

import "./Featured.css";

class Featured extends Component {
  state = {};
  render() {
    return (
      <div className="featured-main">
        <div className="row">
          <div className="col-12 portfolio-item text-center">
            <img className="img-fluid" src={amps} alt="amps" />
          </div>
          <div className="col-12 portfolio-title">
            <a
              href="http://www.ampshare.co"
              target="_blank"
              onClick={this.props.handleClick}
            >
              <b>ampshare.co</b> - share your playlists
            </a>
          </div>
          <div className="col-12 portfolio-item text-center">
            <img className="img-fluid" src={zravia} alt="zravia" />
          </div>
          <div className="col-12 portfolio-title">
            <a
              href="https://www.behance.net/gallery/32344345/ZRAVIA-Music-PortfolioShowcase"
              target="_blank"
              onClick={this.props.handleClick}
            >
              <b>zravia</b> - dj music portfolio
            </a>
          </div>
          <div className="col-12 portfolio-item text-center">
            <img className="img-fluid" src={scrim} alt="scrim" />
          </div>
          <div className="col-12 portfolio-title">
            <a
              href="https://www.behance.net/gallery/57199999/SCRIM-E-Sports-Team-Scrimmage-Finder"
              target="_blank"
              onClick={this.props.handleClick}
            >
              <b>scrim</b> - e-sports team scrimmage finder
            </a>
          </div>
          <div className="col-12 portfolio-item text-center">
            <img className="img-fluid" src={encore} alt="scrim" />
          </div>
          <div className="col-12 portfolio-title">
            <a
              href="https://onemoresong.io/"
              target="_blank"
              onClick={this.props.handleClick}
            >
              <b>encore</b> - band setlist app
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
