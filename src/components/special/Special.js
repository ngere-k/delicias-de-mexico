import { useSelector } from "react-redux";
import { specialPrice } from "../../utils/prices";
import Loading from "../loading/Loading";
import SectionError from "../sectionError/SectionError";
import { formatPrice } from "../../utils/formatPrice";

// styles
import "./Special.scss";

const Special = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
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
                  <p className="special__price">{formatPrice(specialPrice)}</p>
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
