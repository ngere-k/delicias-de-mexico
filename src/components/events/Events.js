import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import SectionError from "../sectionError/SectionError";
import EventBlog from "./EventBlog";
import { toast } from "react-toastify";

// styles
import "./Events.scss";

const Events = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(63, 66);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
  }

  return (
    <section className="section-events">
      <div className="container">
        <div>
          <span className="subheading">upcoming events</span>
          <h2 className="heading-secondary">
            Wake up to our amazing Mexican breakfast events
          </h2>
        </div>

        <div className="events">
          {foodsSlice.map((food) => {
            return (
              <div key={food.id} className="events__event">
                <figure className="events__figure">
                  <img src={food.image} alt="" className="events__img" />
                </figure>

                <div className="events__content">
                  <p className="events__date">
                    January 1, {new Date().getFullYear()}
                  </p>
                  <p className="events__title">{food.title}</p>
                  <p className="events__text">
                    <EventBlog foodId={food.id} />
                  </p>

                  <button
                    className="btn-underline"
                    onClick={() =>
                      toast.error(
                        "We're sorry, this feature is not yet ready for use."
                      )
                    }
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
