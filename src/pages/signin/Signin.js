import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputRow from "../../components/inputRow/InputRow";
import { registerUser, signInUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

// styles
import "./Signin.scss";

const initialState = {
  username: "",
  email: "",
  password: "",
  isAlreadyMember: true,
};

const Signin = () => {
  const { user } = useSelector((store) => store.user);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, isAlreadyMember } = state;

    if (isAlreadyMember) {
      dispatch(signInUser({ email, password }));
      setState(initialState);
      return;
    }

    dispatch(registerUser({ username, email, password }));
    setState({ ...initialState, isAlreadyMember: false });
  };

  const toggleMember = () => {
    setState({ ...state, isAlreadyMember: !state.isAlreadyMember });
  };

  useEffect(() => {
    // navigate to the previous route when authenticated
    user && navigate(-1);
  }, [user, navigate]);

  return (
    <section className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__heading">
          <h2 className="heading-secondary">
            {state.isAlreadyMember ? "Sign In" : "Register"}
          </h2>
        </div>

        <div className="form__content">
          {/* user name */}
          {!state.isAlreadyMember && (
            <InputRow
              type="text"
              name="username"
              value={state.username}
              handleChange={handleChange}
            />
          )}
          {/* email */}
          <InputRow
            type="email"
            name="email"
            value={state.email}
            handleChange={handleChange}
          />
          {/* password */}
          <InputRow
            type="password"
            name="password"
            value={state.password}
            handleChange={handleChange}
          />
        </div>

        <div className="form__btn-box">
          <button type="submit" className="btn btn--block">
            {state.isAlreadyMember ? "Sign in" : "Register"}
          </button>
        </div>

        <p className="form__paragraph">
          {!state.isAlreadyMember
            ? "Already have an account?"
            : "Don't have an account yet?"}
          <button type="button" onClick={toggleMember} className="form__toggle">
            {state.isAlreadyMember ? "Register" : "Sign in"}
          </button>
        </p>
      </form>
    </section>
  );
};

export default Signin;
