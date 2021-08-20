export const DELETE = 'DELETE';

const deleteExpenses = (id) => ({
  type: DELETE,
  id,
});

export default deleteExpenses;
