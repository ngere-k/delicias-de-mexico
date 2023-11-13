import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo2.png";
import { PiUserPlusFill, PiShoppingCartFill } from "react-icons/pi";

// styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="delicias de mexico logo" />
      </Link>

      <nav className="main-nav">
        <ul className="main-nav__list-1">
          <li>
            <NavLink
              to="/"
              className={`main-nav__link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="main-nav__link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" className="main-nav__link">
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className="main-nav__link">
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/reservation" className="main-nav__link">
              Reservation
            </NavLink>
          </li>
        </ul>

        <ul className="main-nav__list-2">
          <li>
            <Link to="sign-in" className="main-nav__link">
              <span className="main-nav__icon">
                <PiUserPlusFill />
              </span>
              <span to="" className=" main-nav__sign-in">
                Sign in
              </span>
            </Link>
          </li>

          <li className="main-nav__item">
            <Link to="/cart" className="main-nav__link">
              <span className="main-nav__icon">
                <PiShoppingCartFill />
              </span>
              <span to="" className="main-nav__cart">
                Cart
              </span>
            </Link>
          </li>

          <li>
            <Link to="">
              <button className="btn">Order online</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
