import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";
import CustomerReview from "../customerReview/CustomerReview";

// styles
import "./HomeTestimonials.scss";

const HomeTestimonials = () => {
  const { reviews, isLoading, error } = useSelector((store) => store.reviews);

  const reviewsSlice = reviews?.slice(0, 3);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="section-home-testimonials">
      <div className="container">
        <div>
          <span className="subheading">testimonials</span>
          <h2 className="heading-secondary">Don't just take our word for it</h2>
        </div>

        <div className="reviews">
          {reviewsSlice.map((review) => {
            return <CustomerReview key={review.id} {...review} />;
          })}
        </div>

        <div className="read-more">
          <Link className="read-more__link">
            <button className="read-more__btn">
              Read more customer reviews
            </button>
            <PiArrowRight className="read-more__icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
