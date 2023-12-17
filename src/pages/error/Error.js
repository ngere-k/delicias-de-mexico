import { Link } from "react-router-dom";
import errorImage from "../../assets/img/errorImage.svg";

// styles
import "./Error.scss";

const Error = () => {
  return (
    <section className="section-error">
      <div className="error">
        <img
          src={errorImage}
          alt="monsters eating donut"
          className="error__img"
        />

        <div className="error__content">
          <h3 className="heading-tertiary">Opps! Something went wrong.</h3>
          <p className="error__text">
            We couldn't find the page you were looking for.
          </p>
          <p className="error__text">
            Maybe it was eaten by a hungry donut monster.
          </p>
          <p className="error__text">
            You can check the URL and try again, or go back to the homepage.
          </p>

          <Link to="/">
            <button className="error__btn">Back to home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
