import PropTypes from "prop-types";

export const Input = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  ...props
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        {...props}
        name={name}
        type={type}
        value={value}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "number", "date"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
