import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-main row">
        <div className="col-6">
          <div className="cta-container">
            <h1 id="cta">
              Let's work together on <span id="your">your</span> brand.
            </h1>
          </div>
          <div className="email-container">
            <p id="email-text">Email address</p>
            <a id="email" href="mailto:patrickjasongabriel@gmail.com">
              patrickjasongabriel@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
