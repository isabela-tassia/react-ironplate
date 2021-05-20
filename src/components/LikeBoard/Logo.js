import React from "react";
import logo from "../../assets/images/misc/logo.png";
import { Link } from "react-router-dom";
const Logo = () => (
  <div>
    <Link to="/dashboard">
      <img src={logo} alt="Tinder Logo" />
    </Link>
  </div>
);

export default Logo;
