// rrd imports
import { useLoaderData } from 'react-router-dom';

// helpers
import { deleteItem, fetchData } from '../helpers';

// component imports
import Table from '../components/Table';

// library import
import { toast } from 'react-toastify';

//loader
export function expensesLoader() {
  const expenses = fetchData('expenses');
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  // delete expense
  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      });
      return toast.success('¡Gasto eliminado!');
    } catch (e) {
      throw new Error('Hubo un problema al eliminar tu gasto.');
    }
  }
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
        <p>Ningún gasto que mostrar.</p>
      )}
    </div>
  );
};

export default ExpensesPage;
