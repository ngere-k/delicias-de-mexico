import { Link } from "react-router-dom";
import { PiArrowLeft } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

// styles
import "./CartHeader.scss";

const CartHeader = () => {
  const dispatch = useDispatch();

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
          Cart <span className="cart__item">(3 items in your cart)</span>
        </h2>

        <button className="cart__delete" onClick={() => dispatch(clearCart())}>
          <MdDelete />
          Clear cart
        </button>
      </div>
    </header>
  );
};

export default CartHeader;
