import heroImage from "../../assets/img/hero.jpg";
import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";

// styles
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero__text-container">
          <h1 className="heading-primary">
            A cozy and authentic place to enjoy the best of Mexican breakfast
          </h1>

          <p className="hero__description">
            If you are looking for a delicious and satisfying way to start your
            day, look no further than Delicias de Mexico. We offer a variety of
            traditional dishes that will make your mouth water and your stomach
            happy. Come and join us at Delicias de Mexico, where you can
            experience the flavors and culture of Mexico in every bite.
          </p>

          <div className="hero__btn-container">
            <Link to="/menu">
              <button className="btn">Enjoy a hearty breakfast</button>
            </Link>

            <Link to="/reservation" className="hero__btn-secondary">
              <button className="btn btn--find">
                <span>Find a table</span>
                <PiArrowRight className="hero__icon" />
              </button>
            </Link>
          </div>
        </div>

        <figure className="hero__image-container">
          <img
            src={heroImage}
            alt="A table topped with plates of food and bowls of fruit"
            className="hero__img"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
