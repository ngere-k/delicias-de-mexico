import { useSelector } from "react-redux";
import FoodMenu from "../../components/foodMenu/FoodMenu";
import PageHero from "../../components/pageHero/PageHero";
import Loading from "../../components/loading/Loading";
import SectionError from "../../components/sectionError/SectionError";

// styles
import "./Menu.scss";

const Menu = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(8, 22);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
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
