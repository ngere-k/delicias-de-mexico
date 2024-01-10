// styles
import "./InputRow.scss";

const InputRow = ({ type, placeholder, name }) => {
  return (
    <label className="input__box">
      <span className="input__name">{name}</span>
      <input
        type={type}
        className="input__field"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default InputRow;
