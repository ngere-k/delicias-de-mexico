import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleFood } from "../../features/foods/foodsSlice";

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
  const { title, description, ingredients, image, method } = food;

  useEffect(() => {
    dispatch(fetchSingleFood(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  console.log(food);

  return (
    <article className="food">
      <div className="container">
        <div className="food__grid">
          <figure className="food__figure">
            <img src={image} alt={title} className="food__img" />
          </figure>

          <div className="food__content">
            <h2>{title}</h2>
            <p>N 10,000.00</p>
            <p className="food__description">{description}</p>
          </div>

          <div className="food__more-info">
            <div className="food__method"></div>
            <div className="food__ingredient"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DishesInfo;
