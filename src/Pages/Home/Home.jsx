import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
// import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Coffee from "./Hero/Coffee-Ico/Coffee-Ico";

import "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="Home-container container">
        <Nav handleClick={this.props.handleClick} />
        <div className="Hero-container">
          <Coffee />
          <Hero />
        </div>
        <Featured />
        {/* <About /> */}
        <Contact />
        <Footer handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default Home;
