import React from "react";

const FooterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <label className="footer__form-container">
      <span className="footer__label">Sign up for our newsletter</span>

      <form className="footer__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="footer__input"
          placeholder="Your email here..."
        />
        <button type="submit" className="footer__sign-up">
          Sign up
        </button>
      </form>
    </label>
  );
};

export default FooterForm;
