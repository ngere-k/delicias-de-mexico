import { useSelector } from "react-redux";
import { PiCurrencyNgn } from "react-icons/pi";
import { Link } from "react-router-dom";

// styles
import "./HomeMenu.scss";

const HomeMenu = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);

  console.log(foods);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="section-home-menu">
      <div className="container home-menu-container">
        <div className="text-center">
          <span className="subheading">menu</span>
          <h2 className="heading-secondary">
            A range of hearty dishes to satisfy your appetite
          </h2>
        </div>

        <div className="menu">
          {foods.slice(23, 29).map((food) => {
            const { id, image, title } = food;
            return (
              <div key={id} className="menu__container">
                <div className="menu__img-box">
                  <img src={image} alt={title} className="menu__img" />
                </div>

                <div className="menu__details">
                  <p className="heading-tertiary">{title}</p>
                  <p className="menu__ingredients">eggs / beans / tortillas</p>
                </div>

                <div className="price__container">
                  <div>
                    <PiCurrencyNgn className="price__icon" />
                  </div>
                  <p className="price__amount">4,000.00</p>
                </div>
              </div>
            );
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
