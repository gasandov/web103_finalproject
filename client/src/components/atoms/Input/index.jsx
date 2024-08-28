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
  <div className="flex flex-col gap-y-1">
    <label className="text-sm">{label}</label>
    <input
      {...props}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md"
    />
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
