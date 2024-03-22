import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { toast } from "react-toastify";

// styles
import "./CartSummary.scss";

const CartSummary = () => {
  const { total_amount, delivery_fee } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

  return (
    <article className="summary">
      <h2 className="heading-tertiary">Order summary</h2>

      <div className="summary__content">
        <div className="summary__rule"></div>
        <div className="summary__subtotal">
          Subtotal <span>{formatPrice(total_amount)}</span>
        </div>
        <div className="summary__delivery">
          Delivery fee <span>{formatPrice(delivery_fee)}</span>
        </div>
        <div className="summary__rule"></div>
        <div className="summary__total">
          Total <span>{formatPrice(total_amount + delivery_fee)}</span>
        </div>
      </div>

      {user && (
        <Link to="/checkout" className="btn btn--block text-center">
          Checkout
        </Link>
      )}

      {!user && (
        <button
          onClick={() =>
            toast.error("Ready to checkout? Please sign in or register.")
          }
          className="btn btn--block text-center"
        >
          Checkout
        </button>
      )}
    </article>
  );
};

export default CartSummary;
