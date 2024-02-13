import { PiCurrencyNgn } from "react-icons/pi";

// styles
import "./Price.scss";

const Price = ({ amount, big }) => {
  return (
    <div className="price__container">
      <div>
        <PiCurrencyNgn className="price__icon" />
      </div>
      <p className={big ? "price__amount--big" : "price__amount"}>{amount}</p>
    </div>
  );
};

export default Price;
