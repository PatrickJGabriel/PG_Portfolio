import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

import "./About.css";

class About extends Component {
  state = {};

  componentDidMount() {
    console.log("props ", this.props);
  }

  render() {
    let props = this.props;

    return (
      <div className="About-container container">
        <Nav onClick={props.handleClick} />
        <Footer onClick={props.handleClick} />
      </div>
    );
  }
}

export default About;
