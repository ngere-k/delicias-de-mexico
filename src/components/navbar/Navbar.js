import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import {
  PiUserPlusFill,
  PiUserMinusFill,
  PiShoppingCartFill,
} from "react-icons/pi";

// styles
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <Logo />

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
            <span to="sign-in" className="main-nav__user">
              {/* user name here */}
              {/* Hi, Kanyun Ngere */}
            </span>
          </li>

          <li>
            <NavLink to="sign-in" className="main-nav__link">
              <span className="main-nav__icon">
                <PiUserPlusFill />
              </span>
              <span to="" className=" main-nav__sign-in">
                Sign in
              </span>
            </NavLink>
          </li>

          {/* when authenticated, display signout button here */}
          {/* <li>
            <NavLink to="sign-in" className="main-nav__link">
              <span className="main-nav__icon">
                <PiUserMinusFill />
              </span>
              <span to="" className=" main-nav__sign-out">
                Sign out
              </span>
            </NavLink>
          </li> */}

          <li className="main-nav__item">
            <NavLink to="/cart" className="main-nav__link">
              <span className="main-nav__icon">
                <PiShoppingCartFill />
              </span>
              <span to="" className="main-nav__cart">
                Cart
              </span>
            </NavLink>
          </li>

          <li>
            <Link to="/dishes">
              <button className="btn">Order online</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
