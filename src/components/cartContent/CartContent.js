import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import Price from "../price/Price";
import AmountButtons from "../amountButtons/AmountButtons";

// styles
import "./CartContent.scss";

const CartContent = () => {
  const { cart } = useSelector((store) => store.cart);

  return (
    <div className="cart__content">
      {cart.map((item) => {
        const { id, image, title, amount, price, stock } = item;
        return (
          <div key={id} className="cart__product">
            <div className="cart__figure-container">
              <figure className="cart__figure">
                <img src={image} alt={title} className="cart__img" />
              </figure>
              <figcaption className="cart__figcaption">{title}</figcaption>
            </div>
            <AmountButtons amount={amount} />
            <Price amount={price * amount} />
            <button className="cart__btn">
              <MdDelete className="cart__delete-icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
