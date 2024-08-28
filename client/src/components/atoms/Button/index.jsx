import PropTypes from "prop-types";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      {...(onClick && { onClick })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
