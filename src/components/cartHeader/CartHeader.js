import { Link } from "react-router-dom";
import { PiArrowLeft } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";

// styles
import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <header className="cart__header">
      <button className="cart__continue">
        <Link to="/dishes" className="cart__link">
          <PiArrowLeft className="cart__arrow-icon" />
          Continue shopping
        </Link>
      </button>
      <div className="cart__rule" />
      <div className="cart__name">
        <h2 className="cart__heading">
          Cart <span className="cart__item">( 3 items in your cart)</span>
        </h2>

        <button className="cart__delete">
          <MdDeleteForever />
          Clear cart
        </button>
      </div>
    </header>
  );
};

export default CartHeader;
