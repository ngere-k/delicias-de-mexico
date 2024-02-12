import { PiCurrencyNgn } from "react-icons/pi";

// styles
import "./Price.scss";

const Price = ({ amount }) => {
  return (
    <div className="price__container">
      <div>
        <PiCurrencyNgn className="price__icon" />
      </div>
      <p className="price__amount">{amount}</p>
    </div>
  );
};

export default Price;
