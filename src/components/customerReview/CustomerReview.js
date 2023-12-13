import { PiStarFill } from "react-icons/pi";

// styles
import "./CustomerReview.scss";

const CustomerReview = ({ id, name, text, image }) => {
  return (
    <div className="review" key={id}>
      <div className="review__img-box">
        <img className="review__img" src={image} alt={name} />
      </div>

      <div>
        <p className="review__name">{name}</p>
        <div className="review__stars">
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
        </div>
      </div>

      <blockquote className="review__text">{text}</blockquote>
    </div>
  );
};

export default CustomerReview;
