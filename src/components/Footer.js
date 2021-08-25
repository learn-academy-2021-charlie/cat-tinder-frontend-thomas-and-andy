import React, { Component } from "react";
import { GiDrippingHoney } from "react-icons/gi";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <img className ='header-logo'src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzQ7EFJn3ieAbyYylCNhAI1SxS6sVkTLerw&usqp=CAU"}/> */}
        <GiDrippingHoney color="purple" size="8rem" opacity=".7" />
        <h3>© Andy & Thomas</h3>
      </div>
    );
  }
}

export default Footer;
