import { useState } from "react";
import InputRow from "../../components/inputRow/InputRow";
import InputSelect from "../../components/inputSelect/InputSelect";
import PageHero from "../../components/pageHero/PageHero";
import { people } from "../../utils/people";
import { times } from "../../utils/times";
import { toast } from "react-toastify";

// styles
import "./Reservation.scss";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numPeople, setNumPeople] = useState("1 person");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 am");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your reservation is confirmed.");

    setName("");
    setEmail("");
    setDate("");
    setNumPeople("1 person");
    setPhone("");
    setDate("");
    setTime("10:00 am");
  };

  return (
    <article className="reservation">
      <PageHero
        subheading="reservation"
        heading=" Book your spot for a delicious Mexican breakfast"
        heroClass="reservation__hero"
      />

      <div className="container">
        <form className="reservation__form" onSubmit={handleSubmit}>
          {/* name */}
          <InputRow
            type="text"
            name="name"
            value={name}
            placeholder="Your full name"
            handleChange={(e) => setName(e.target.value)}
          />
          {/* email */}
          <InputRow
            type="email"
            name="email"
            value={email}
            placeholder="Your email address"
            handleChange={(e) => setEmail(e.target.value)}
          />
          {/* phone */}
          <InputRow
            type="tel"
            name="phone"
            value={phone}
            placeholder="Your phone"
            handleChange={(e) => setPhone(e.target.value)}
          />
          {/* number of people */}
          <InputSelect
            label="we are"
            name="people"
            array={people}
            value={numPeople}
            handleChange={(e) => setNumPeople(e.target.value)}
          />
          {/* date */}
          <InputRow
            type="date"
            name="date"
            value={date}
            handleChange={(e) => setDate(e.target.value)}
          />
          {/* time */}
          <InputSelect
            label="time"
            name="time"
            array={times}
            value={time}
            handleChange={(e) => setTime(e.target.value)}
          />

          <div className="reservation__btn-box">
            <button type="submit" className="btn btn--block">
              Reserve a table
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Reservation;
