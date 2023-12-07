import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

// styles
import "./Logo.scss";

const Logo = ({ medium }) => {
  return (
    <Link to="/">
      <img
        className={medium ? "medium" : "logo"}
        src={logo}
        alt="delicias de mexico logo"
      />
    </Link>
  );
};

export default Logo;
