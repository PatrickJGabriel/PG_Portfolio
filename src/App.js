import React, { Component } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentPage: "home"
    };
  }

  handleClick(event) {
    const id = event.target.id;
    console.log(id);
    this.setState({ currentPage: id });
  }

  render() {
    let state = this.state;
    let currentPage = this.state.currentPage;

    let page = null;
    switch (state.currentPage) {
      case "home":
        page = <Home handleClick={this.handleClick} />;
        break;
      case "about":
        page = <About handleClick={this.handleClick} />;
        break;
      case "portfolio":
        page = <Portfolio handleClick={this.handleClick} />;
        break;
      default:
        page = <Home handleClick={this.handleClick} />;
    }

    return (
      <div className="App">
        {/* <Home /> */}
        {page}
      </div>
    );
  }
}

export default App;
