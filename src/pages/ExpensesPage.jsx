// rrd imports
import { useLoaderData } from 'react-router-dom';

// helpers
import { fetchData } from '../helpers';

// component imports
import Table from '../components/Table';

//loader
export function expensesLoader() {
  const expenses = fetchData('expenses');
  return { expenses };
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>Todos los Gastos</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Gastos Recientes <small>({expenses.length} en total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>Ningún gasto</p>
      )}
    </div>
  );
};

export default ExpensesPage;
