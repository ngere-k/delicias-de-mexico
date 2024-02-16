import { useSelector } from "react-redux";
import PageHero from "../../components/pageHero/PageHero";
import { Link } from "react-router-dom";
import Price from "../../components/price/Price";
import { normalPrice } from "../../utils/prices";
import Loading from "../../components/loading/Loading";
import SectionError from "../../components/sectionError/SectionError";

// styles
import "./Dishes.scss";

const Dishes = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(36, 54);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
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
                  <Price amount={normalPrice} />
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
