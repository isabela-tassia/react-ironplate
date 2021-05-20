import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import user from "../../assets/images/misc/user.png";
import messages from "../../assets/images/misc/messages.png";

const Header = () => (
  <header>
    <div className="fl">
      <Link type="button" to="/my-pets">
        <img src={user} alt="User Settings" />
      </Link>
    </div>

    <div className="fl">
      <Logo />
    </div>

    <div className="fl ">
      <Link to="/create-pet" type="button">
        <img src={messages} alt="Create Pet" className="mw-100" />
      </Link>
    </div>
  </header>
);

export default Header;
