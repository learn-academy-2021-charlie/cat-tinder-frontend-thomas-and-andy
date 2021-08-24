import React, { Component } from "react";
import { MdWork } from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <MdWork color="#00FF72" size="5rem" opacity="0.6" />
        <h4>DevMatch</h4>
      </div>
    );
  }
}

export default Header;
