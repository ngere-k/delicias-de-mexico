import { useEffect } from "react";
import CartHeader from "../../components/cartHeader/CartHeader";
import CartColumn from "../../components/cartColumn/CartColumn";
import CartContent from "../../components/cartContent/CartContent";
import CartSummary from "../../components/cartSummary/CartSummary";
import { useSelector } from "react-redux";

// styles
import "./Cart.scss";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);

  useEffect(() => {
    localStorage.setItem("foodCart", JSON.stringify(cart));
  }, [cart]);

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
