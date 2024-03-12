import { MdDelete } from "react-icons/md";

// styles
import "./CartColumn.scss";

const CartColumn = () => {
  return (
    <div className="cart__column">
      <h5>Product</h5>
      <h5>Quantity</h5>
      <h5>Price</h5>
      <span className="cart__btn">
        <MdDelete className="cart__delete-icon cart__icon-hidden" />
      </span>
    </div>
  );
};

export default CartColumn;
