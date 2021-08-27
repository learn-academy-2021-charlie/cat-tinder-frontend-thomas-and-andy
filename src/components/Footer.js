import React, { Component } from "react";
import { GiDrippingHoney } from "react-icons/gi";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <GiDrippingHoney color="purple" size="5rem" opacity=".7" position />
        <h3>© Andy & Thomas</h3>
      </div>
    );
  }
}

export default Footer;
