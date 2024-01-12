import { useState } from "react";
import { contacts } from "../../utils/contacts";
import InputRow from "../../components/inputRow/InputRow";
import { toast } from "react-toastify";

// styles
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <article className="article-contact">
      <div className="container contact">
        <div className="contact__content">
          <span className="subheading">get in touch</span>
          <h2 className="heading-secondary">
            Got a question or a suggestion? We’re all ears!
          </h2>

          <ul className="contact__lists">
            {contacts.map((contact) => {
              const { id, name, icon, text } = contact;
              return (
                <li key={id} className="contact__list">
                  <span className="contact__icon">{icon}</span>
                  <p className="contact__name">{name}</p>
                  <p className="contact__text">{text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <InputRow
            name="name"
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />

          <InputRow
            name="email"
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <label className="contact__message">
            <span className="contact__label">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact__textarea"
            ></textarea>
          </label>

          <div className="form__btn-box">
            <button type="submit" className="btn">
              Send message
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Contact;
