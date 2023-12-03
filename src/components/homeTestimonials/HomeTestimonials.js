import { useSelector } from "react-redux";

// styles
import "./HomeTestimonials.scss";

const HomeTestimonials = () => {
  const { reviews, isLoading, error } = useSelector((store) => store.reviews);

  return (
    <section className="section-home-testimonials">
      <div className="container">
        <div>
          <span className="subheading">testimonials</span>
          <h2 className="heading-secondary">Don't just take our word for it</h2>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
