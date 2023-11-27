import { useSelector } from "react-redux";
import { PiCurrencyNgn } from "react-icons/pi";

// styles
import "./Special.scss";

const Special = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="section-special">
      <div className="container">
        <div>
          <span className="subheading">special dishes</span>
          <h2 className="heading-secondary">
            The best of our menu, handpicked for you
          </h2>
        </div>

        <div className="special">
          {foods.slice(2, 8).map((food) => {
            const { id, image, title } = food;

            return (
              <div key={id} className="special__box">
                <div className="special__img-container">
                  <img src={image} alt={title} className="special__img " />
                </div>

                <div className="special__content">
                  <p className="special__title">{title}</p>
                  <p className="special__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate incidunt mollitia inventore hic deleniti possimus.
                  </p>
                  <div className="special__price price__container ">
                    <div>
                      <PiCurrencyNgn className="price__icon" />
                    </div>
                    <p className="price__amount">4,500.00</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Special;
