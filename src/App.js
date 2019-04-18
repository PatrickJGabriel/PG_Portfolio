import React, { Component } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css";

class App extends Component {
  state = {
    currentPage: "home"
  };

  render() {
    let state = this.state;
    let currentPage = this.state.currentPage;

    let page = null;
    switch (state.currentPage) {
      case "about":
        page = <About />;
        break;
      case "portfolio":
        page = <Portfolio />;
        break;
      default:
        page = <Home />;
    }

    return (
      <div className="App">
        <Home />
        {/* {page} */}
      </div>
    );
  }
}

export default App;
