import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";

export const ExpenseCard = ({ expense, onDelete }) => (
  <li className="p-2 rounded-xl border flex items-center gap-x-4">
    <section className="flex flex-row flex-grow justify-between">
      <p className="font-medium">{expense.name}</p>
      <p className="font-medium">${expense.amount}</p>
    </section>
    <button onClick={() => onDelete(expense.id)}>
      <FaRegTrashCan size={24} className="fill-red-600" />
    </button>
  </li>
);

ExpenseCard.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};
