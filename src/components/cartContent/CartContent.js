import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import AmountButtons from "../amountButtons/AmountButtons";
import {
  removeCartItem,
  toggleCartAmount,
} from "../../features/cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

// styles
import "./CartContent.scss";

const CartContent = ({ id, image, title, amount, price }) => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(toggleCartAmount({ id, name: "increase" }));
  };

  const decrease = () => {
    dispatch(toggleCartAmount({ id, name: "decrease" }));
  };

  return (
    <div className="cart__product">
      <div className="cart__figure-container">
        <figure className="cart__figure">
          <img src={image} alt={title} className="cart__img" />
        </figure>
        <figcaption className="cart__figcaption">{title}</figcaption>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <p className="price--sm cart__price">{formatPrice(price * amount)}</p>

      <button
        className="cart__btn"
        onClick={() => dispatch(removeCartItem(id))}
      >
        <MdDelete className="cart__delete-icon" />
      </button>
    </div>
  );
};

export default CartContent;
