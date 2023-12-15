import { useSelector, useDispatch } from "react-redux";
import { VscChromeClose } from "react-icons/vsc";
import CustomerReview from "../customerReview/CustomerReview";
import { closeReview } from "../../features/modal/modalSlice";

// styles
import "./Testimonials.scss";

const Testimonials = () => {
  const { isLoading, error, reviews } = useSelector((store) => store.reviews);
  const { isReviewOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div
      className={
        isReviewOpen
          ? "modal-testimonials show-testimonials"
          : "modal-testimonials"
      }
    >
      <div className="testimonials">
        <div className="testimonials__btn-box">
          <button
            className="testimonials__btn"
            onClick={() => dispatch(closeReview())}
          >
            <VscChromeClose className="testimonials__close" />
          </button>
        </div>

        <div className="testimonials__line" />

        <div className="testimonial">
          {reviews.map((review) => {
            return <CustomerReview key={review.id} {...review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
