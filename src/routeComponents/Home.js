import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/misc/logo.png";

function Home() {
  return (
    <div className="text-center">
      <img src={logo} alt="Tinder Pets" className="mt-3" />
      <h1 className="mt-5">Tinder Pets</h1>
      <p className="mt-4">Welcome!</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary mt-5" to="/auth/signup">
          Signup here!
        </Link>
        <Link className="btn btn-lg btn-primary mt-5" to="/auth/login">
          Login here!
        </Link>
      </div>
    </div>
  );
}

export default Home;
