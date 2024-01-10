import InputRow from "../../components/inputRow/InputRow";

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
          <InputRow type="text" name="user name" />
          <InputRow type="email" name="email" />
          <InputRow type="password" name="password" />
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
