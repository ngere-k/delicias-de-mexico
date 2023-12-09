import { PiCurrencyNgn } from "react-icons/pi";

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

      <div className="price__container">
        <div>
          <PiCurrencyNgn className="price__icon" />
        </div>
        <p className="price__amount">10,000.00</p>
      </div>
    </div>
  );
};

export default FoodMenu;
