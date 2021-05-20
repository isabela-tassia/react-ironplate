import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/misc/logo.png";

function Home() {
  return (
    <div className="text-center">
      <img src={logo} alt="Tinder Pets" />
      <h1>Tinder Pets</h1>
      <p>Welcome!</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
        <Link className="btn btn-lg btn-primary" to="/auth/login">
          Login here!
        </Link>
      </div>
    </div>
  );
}

export default Home;
