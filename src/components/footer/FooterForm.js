import { useState } from "react";
import { toast } from "react-toastify";

const FooterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please fill in the email field!");
      return;
    }

    toast.success("You have successfully subscribe to our newsletter!");
    setEmail("");
  };

  return (
    <label className="footer__form-container">
      <span className="footer__label">Sign up for our newsletter</span>

      <form className="footer__form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          className="footer__input"
          placeholder="Your email here..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="footer__sign-up">
          Sign up
        </button>
      </form>
    </label>
  );
};

export default FooterForm;
