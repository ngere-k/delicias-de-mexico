// styles
import "./InputSelect.scss";

const InputSelect = ({ label, array, SelectName }) => {
  return (
    <label className="select__box">
      <span className="select__label">{label}</span>

      <select name={SelectName} className="select__field">
        {array.map((ele) => {
          return (
            <option key={ele} value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default InputSelect;
