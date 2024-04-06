import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodMenu from "../foodMenu/FoodMenu";
import Loading from "../loading/Loading";
import SectionError from "../sectionError/SectionError";

// styles
import "./HomeMenu.scss";

const HomeMenu = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(23, 29);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
  }

  return (
    <section className="section-home-menu">
      <div className="container">
        <div className="text-center">
          <span className="subheading">menu</span>
          <h2 className="heading-secondary">
            A range of hearty dishes to satisfy your appetite
          </h2>
        </div>

        <div className="menu-container">
          {foodsSlice.map((food) => {
            return <FoodMenu key={food.id} {...food} />;
          })}
        </div>

        <div className="menu-link-box">
          <Link to="/menu">
            <button className="btn">View full menu</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
