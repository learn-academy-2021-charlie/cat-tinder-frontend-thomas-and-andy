import React, { Component } from "react";
import { MdWork } from "react-icons/md";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar />
        <MdWork color="#00FF72" size="4rem" opacity="0.6" />
        <h4>DevMatch</h4>
      </div>
    );
  }
}

export default Header;
