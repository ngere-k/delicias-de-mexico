import React from "react";

// styles
import "./Signin.scss";

const Signin = () => {
  return (
    <section className="sign-in">
      <form className="form">
        <div>
          <h2 className="heading-secondary">Sign in</h2>
        </div>

        <div className="form__content">
          <label className="form__box">
            <span className="form__name">Name</span>
            <input type="text" className="form__input" />
          </label>

          <label className="form__box">
            <span className="form__name">Email</span>
            <input type="email" className="form__input" />
          </label>

          <label className="form__box">
            <span className="form__name">Password</span>
            <input type="password" className="form__input" />
          </label>
        </div>

        <div className="form__btn-box">
          <button type="submit" className="btn">
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signin;
