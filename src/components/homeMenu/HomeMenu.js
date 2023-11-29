import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodMenu from "../foodMenu/FoodMenu";

// styles
import "./HomeMenu.scss";

const HomeMenu = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(23, 29);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="section-home-menu">
      <div className="container grid-centered-container">
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

        <Link to="/menu">
          <button className="btn ">View full menu</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeMenu;
