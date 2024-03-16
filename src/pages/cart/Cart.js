import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartHeader from "../../components/cartHeader/CartHeader";
import CartColumn from "../../components/cartColumn/CartColumn";
import CartContent from "../../components/cartContent/CartContent";
import CartSummary from "../../components/cartSummary/CartSummary";
import { useSelector, useDispatch } from "react-redux";
import { cartTotals } from "../../features/cart/cartSlice";

// styles
import "./Cart.scss";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotals());
    localStorage.setItem("foodCart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length < 1) {
    return (
      <article className="empty">
        <h2 className="empty__heading">
          Empty cart? Let’s change that with flavor!
        </h2>
        <Link to="/dishes" className="btn">
          Start shopping
        </Link>
      </article>
    );
  }

  return (
    <article className="article-cart">
      <div className="cart container">
        <div className="cart__container">
          <CartHeader />
          <div>
            <CartColumn />
            <div className="cart__content">
              {cart.map((item) => {
                return <CartContent key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
        <CartSummary />
      </div>
    </article>
  );
};

export default Cart;
