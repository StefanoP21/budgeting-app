// rrd imports
import { redirect } from 'react-router-dom';

// library
import { toast } from 'react-toastify';

// helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete the user info
  deleteItem({ key: 'userName' });
  deleteItem({ key: 'budgets' });
  deleteItem({ key: 'expenses' });
  toast.success('¡Has eliminado tu cuenta!');

  // return redirect
  return redirect('/');
}
