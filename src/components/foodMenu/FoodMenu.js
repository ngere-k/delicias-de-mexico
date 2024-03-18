import { normalPrice } from "../../utils/prices";
import { formatPrice } from "../../utils/formatPrice";

// styles
import "./FoodMenu.scss";

const FoodMenu = ({ id, image, title }) => {
  return (
    <div key={id} className="menu">
      <div className="menu__img-box">
        <img src={image} alt={title} className="menu__img" />
      </div>

      <div className="menu__detail">
        <h4 className="heading-tertiary menu__heading">{title}</h4>
        <p className="menu__ingredients">eggs / beans / tortillas</p>
        <p className="price--sm menu__price">{formatPrice(normalPrice)}</p>
      </div>
    </div>
  );
};

export default FoodMenu;
