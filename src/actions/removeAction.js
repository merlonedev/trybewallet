export const RMV_EXPENSE = 'RMV_EXPENSE';

export const removeExpense = (id) => ({
  type: RMV_EXPENSE,
  payload: id,
});
