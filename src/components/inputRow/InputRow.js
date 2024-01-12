// styles
import "./InputRow.scss";

const InputRow = ({ type, placeholder, name, handleChange, value }) => {
  return (
    <label className="input__box">
      <span className="input__name">{name}</span>
      <input
        type={type}
        className="input__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default InputRow;
