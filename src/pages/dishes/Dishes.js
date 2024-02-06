import { useSelector } from "react-redux";
import PageHero from "../../components/pageHero/PageHero";
import { PiCurrencyNgn } from "react-icons/pi";
import { Link } from "react-router-dom";

// styles
import "./Dishes.scss";

const Dishes = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(94, 109);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <article className="dishes">
      <PageHero
        subheading="Food Delivery"
        heading="Enjoy the flavors of Mexico at your doorstep"
        heroClass="dishes__hero"
      />
      <div className="container">
        <div className="dishes__items">
          {foodsSlice.map((food) => {
            return (
              <Link
                key={food.id}
                to={`/dishes/${food.id}`}
                className="dishes__list"
              >
                <figure className="dishes__figure">
                  <img
                    src={food.image}
                    alt={food.title}
                    className="dishes__img"
                  />
                </figure>

                <div className="dishes__content">
                  <h4 className="dishes__heading">{food.title}</h4>

                  <div className="price__container">
                    <div>
                      <PiCurrencyNgn className="price__icon" />
                    </div>
                    <p className="price__amount">10,000.00</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Dishes;
