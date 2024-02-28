import { PiPlusBold, PiMinusBold } from "react-icons/pi";

// styles
import "./AmountButtons.scss";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="amount">
      <button className="amount__btn" onClick={decrease}>
        <PiMinusBold className="amount__icon" />
      </button>

      <span className="amount__number">{amount}</span>

      <button className="amount__btn" onClick={increase}>
        <PiPlusBold className="amount__icon" />
      </button>
    </div>
  );
};

export default AmountButtons;
