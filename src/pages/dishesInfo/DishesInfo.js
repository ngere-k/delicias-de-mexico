import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleFood } from "../../features/foods/foodsSlice";
import { normalPrice } from "../../utils/prices";
import { IoCheckmark } from "react-icons/io5";
import Loading from "../../components/loading/Loading";
import SectionError from "../../components/sectionError/SectionError";
import { Link } from "react-router-dom";
import AmountButtons from "../../components/amountButtons/AmountButtons";
import { addToCart } from "../../features/cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

// styles
import "./DishesInfo.scss";

const DishesInfo = () => {
  const {
    singleFood: food,
    isLoadingSingleFood: isLoading,
    errorInSingleFood: error,
  } = useSelector((store) => store.foods);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const stock = 50;

  const increase = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  useEffect(() => {
    dispatch(fetchSingleFood(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
  }
  // destructuring here so when id change you get different item
  const { title, description, ingredients, image, method } = food;

  return (
    <article className="food">
      <div className="container">
        <div className="food__grid">
          <figure className="food__figure">
            <img src={image} alt={title} className="food__img" />
          </figure>

          <div className="food__content">
            <h2 className="food__heading">{title}</h2>

            <p className="price--md text-bold-500">
              {formatPrice(normalPrice)}
            </p>
            <p className="food__description">{description}</p>

            <div className="food__amount-box">
              <AmountButtons
                amount={amount}
                increase={increase}
                decrease={decrease}
              />
              <div className="food__btn">
                <Link
                  to="/cart"
                  onClick={() =>
                    dispatch(
                      addToCart({ food, stock, price: normalPrice, amount })
                    )
                  }
                  className="btn btn--padding-left-right-sm"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
          {/* cooking method */}
          <div className="food__more-info">
            <div className="method">
              <h3 className="heading-tertiary">Cooking method</h3>
              <ul className="method__item">
                {method?.map((item, index) => {
                  return (
                    <li key={index} className="method__list">
                      <p className="method__paragraph">
                        <span>{`Step ${index + 1}: `}</span>
                        {item[`Step ${index + 1}`]}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ingredients */}
            <div className="ingredient">
              <h3 className="heading-tertiary">Ingredients</h3>
              <ul className="ingredient__item">
                {ingredients?.map((item, index) => {
                  return (
                    <li key={index} className="ingredient__list">
                      <IoCheckmark className="ingredient__icon" />
                      <p className="ingredient__paragraph">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DishesInfo;
