import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import user from "../../assets/images/misc/user.png";
import messages from "../../assets/images/misc/messages.png";
const Header = () => (
  <header>
    <div className="fl">
      <Link type="button">
        <img src={user} alt="User Settings" />
      </Link>
    </div>

    <div className="fl">
      <Logo />
    </div>

    <div className="fl">
      <Link type="button">
        <img src={messages} alt="View Messages" />
      </Link>
    </div>
  </header>
);

export default Header;
