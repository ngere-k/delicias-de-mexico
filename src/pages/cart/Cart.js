import CartHeader from "../../components/cartHeader/CartHeader";
import CartColumn from "../../components/cartColumn/CartColumn";
import CartContent from "../../components/cartContent/CartContent";
import CartSummary from "../../components/cartSummary/CartSummary";

// styles
import "./Cart.scss";

const Cart = () => {
  return (
    <article className="article-cart">
      <div className="cart container">
        <div className="cart__container">
          <CartHeader />
          <div>
            <CartColumn />
            <CartContent />
          </div>
        </div>
        <CartSummary />
      </div>
    </article>
  );
};

export default Cart;
