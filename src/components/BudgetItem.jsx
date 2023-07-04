// helpers functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from '../helpers';

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={{
        '--accent': color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)}</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} gastado</small>
        <small>{formatCurrency(amount - spent)} restante</small>
      </div>
    </div>
  );
};

export default BudgetItem;
