import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="../../assets/img/logo.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Navbar;
