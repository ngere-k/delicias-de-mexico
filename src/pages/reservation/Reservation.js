import InputRow from "../../components/inputRow/InputRow";
import InputSelect from "../../components/inputSelect/InputSelect";
import PageHero from "../../components/pageHero/PageHero";
import { people } from "../../utils/people";
import { time } from "../../utils/time";

// styles
import "./Reservation.scss";

const Reservation = () => {
  return (
    <article className="reservation">
      <PageHero
        subheading="reservation"
        heading=" Book your spot for a delicious Mexican breakfast"
      />

      <form className="container reservation__form">
        <InputRow type="text" name="name" placeholder="Your full name" />
        <InputRow type="email" name="email" placeholder="Your email address" />
        <InputRow type="tel" name="phone" placeholder="Your phone" />
        <InputSelect label="we are" name="people" array={people} />
        <InputRow type="date" name="date" />
        <InputSelect label="time" name="time" array={time} />
        <div className="reservation__btn-box">
          <button type="submit" className="btn btn--block">
            Reserve a table
          </button>
        </div>
      </form>
    </article>
  );
};

export default Reservation;
