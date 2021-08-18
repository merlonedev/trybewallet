export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const deleteExpenses = (id) => ({ type: DELETE_EXPENSE, id });

export default deleteExpenses;
