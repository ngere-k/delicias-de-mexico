import { useState } from "react";
import InputRow from "../../components/inputRow/InputRow";

// styles
import "./Signin.scss";

const initialState = {
  username: "",
  email: "",
  password: "",
  isAlreadySignedIn: true,
};

const Signin = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, isAlreadySignedIn } = state;

    if (isAlreadySignedIn) {
      console.log("sign in", { email, password });
      setState(initialState);
      return;
    }

    console.log("register", { username, email, password });
    setState({ ...initialState, isAlreadySignedIn: false });
  };

  const toggleMember = () => {
    setState({ ...state, isAlreadySignedIn: !state.isAlreadySignedIn });
  };

  return (
    <section className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__heading">
          <h2 className="heading-secondary">
            {state.isAlreadySignedIn ? "Sign In" : "Register"}
          </h2>
        </div>

        <div className="form__content">
          {!state.isAlreadySignedIn && (
            <InputRow
              type="text"
              name="username"
              value={state.username}
              handleChange={handleChange}
            />
          )}

          <InputRow
            type="email"
            name="email"
            value={state.email}
            handleChange={handleChange}
          />

          <InputRow
            type="password"
            name="password"
            value={state.password}
            handleChange={handleChange}
          />
        </div>

        <div className="form__btn-box">
          <button type="submit" className="btn btn--block">
            {state.isAlreadySignedIn ? "Sign in" : "Register"}
          </button>
        </div>

        <p className="form__paragraph">
          {!state.isAlreadySignedIn
            ? "Already have an account?"
            : "Don't have an account yet?"}
          <button type="button" onClick={toggleMember} className="form__toggle">
            {state.isAlreadySignedIn ? "Register" : "Sign in"}
          </button>
        </p>
      </form>
    </section>
  );
};

export default Signin;
