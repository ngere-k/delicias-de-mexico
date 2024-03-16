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

      <div className="menu__details">
        <p className="heading-tertiary">{title}</p>
        <p className="menu__ingredients">eggs / beans / tortillas</p>
      </div>

      <p className="price--sm">{formatPrice(normalPrice)}</p>
    </div>
  );
};

export default FoodMenu;
