import React, { Component } from "react";
import Nav from "../../Nav/Nav";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Contact from "./Contact/Contact";
import Footer from "../../Footer/Footer";
import Coffee from "../Home/Hero/Coffee-Ico/Coffee-Ico";

import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home-container container">
        <Nav />
        <Coffee />
        <Hero />
        <Featured />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
