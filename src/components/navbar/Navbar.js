import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import {
  PiUserPlusFill,
  PiUserMinusFill,
  PiShoppingCartFill,
} from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../../features/user/userSlice";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { closeSidebar, openSidebar } from "../../features/modal/modalSlice";

// styles
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { isSidebarOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOutUser());
    dispatch(closeSidebar());
  };

  return (
    <header className={isSidebarOpen ? "header sidebar-open" : "header"}>
      <Logo />

      <nav className="main-nav">
        <ul className="main-nav__list-1">
          <li>
            <NavLink
              to="/"
              className={`main-nav__link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={() => dispatch(closeSidebar())}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="main-nav__link"
              onClick={() => dispatch(closeSidebar())}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="main-nav__link"
              onClick={() => dispatch(closeSidebar())}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="main-nav__link"
              onClick={() => dispatch(closeSidebar())}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className="main-nav__link"
              onClick={() => dispatch(closeSidebar())}
            >
              Reservation
            </NavLink>
          </li>
        </ul>

        <ul className="main-nav__list-2">
          {!user && (
            <li>
              <NavLink
                to="sign-in"
                className="main-nav__link"
                onClick={() => dispatch(closeSidebar())}
              >
                <span className="main-nav__icon">
                  <PiUserPlusFill />
                </span>
                <span to="" className=" main-nav__sign-in">
                  Sign in
                </span>
              </NavLink>
            </li>
          )}

          {user && (
            <li>
              <Link className="main-nav__link" onClick={handleClick}>
                <span className="main-nav__icon">
                  <PiUserMinusFill />
                </span>
                <span to="" className=" main-nav__sign-out">
                  Sign out
                </span>
              </Link>
            </li>
          )}

          <li className="main-nav__item">
            <NavLink
              to="/cart"
              className="main-nav__link"
              onClick={() => dispatch(closeSidebar())}
            >
              <span className="main-nav__icon">
                <PiShoppingCartFill />
              </span>
              <span to="" className="main-nav__cart">
                Cart
              </span>
            </NavLink>
          </li>
          <li>
            <Link to="/dishes" onClick={() => dispatch(closeSidebar())}>
              <button className="btn">Order online</button>
            </Link>
          </li>
        </ul>
      </nav>

      {!isSidebarOpen && (
        <button
          className="btn-mobile-nav"
          onClick={() => dispatch(openSidebar())}
        >
          <IoMdMenu className="icon-mobile-nav" />
        </button>
      )}

      {isSidebarOpen && (
        <button
          className="btn-mobile-nav btn-mobile-nav--close"
          onClick={() => dispatch(closeSidebar())}
        >
          <IoMdClose className="icon-mobile-nav" />
        </button>
      )}
    </header>
  );
};

export default Navbar;
