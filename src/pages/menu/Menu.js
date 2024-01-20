import { useSelector } from "react-redux";
import FoodMenu from "../../components/foodMenu/FoodMenu";
import PageHero from "../../components/pageHero/PageHero";

// styles
import "./Menu.scss";

const Menu = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(8, 22);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <article className="menu-page">
      <PageHero
        subheading="menu"
        heading="A range of hearty dishes to satisfy your appetite"
        heroClass="menu-page__hero"
      />

      <div className="container">
        <div className="menu-page__content">
          {foodsSlice.map((food) => {
            return <FoodMenu key={food.id} {...food} />;
          })}
        </div>
      </div>
    </article>
  );
};

export default Menu;
