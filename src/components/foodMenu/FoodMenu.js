import Price from "../price/Price";
import { normalPrice } from "../../utils/prices";

// styles
import "./FoodMenu.scss";

const FoodMenu = ({ id, image, title }) => {
  return (
    <div key={id} className="menu">
      <div className="menu__img-box">
        <img src={image} alt={title} className="menu__img" />
      </div>

      <div className="menu__details">
        <p className="heading-tertiary">{title}</p>
        <p className="menu__ingredients">eggs / beans / tortillas</p>
      </div>

      <Price amount={normalPrice} />
    </div>
  );
};

export default FoodMenu;
