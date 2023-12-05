import logo from "../../assets/img/logo.png";

// styles
import "./Logo.scss";

const Logo = ({ medium }) => {
  return (
    <img
      className={medium ? "medium" : "logo"}
      src={logo}
      alt="delicias de mexico logo"
    />
  );
};

export default Logo;
