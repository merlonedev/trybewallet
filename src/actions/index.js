export const LOGIN = 'LOGIN';
export const loginAction = (value) => ({
  type: LOGIN,
  value,
});

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrenciesAction = (data) => ({
  type: GET_CURRENCIES,
  data,
});

export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const saveExpenseAction = (expense) => ({
  type: SAVE_EXPENSE,
  expense,
});

export const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE';
export const updateTotalPriceAction = (price) => ({
  type: UPDATE_TOTAL_PRICE,
  price,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpenseAction = (id) => ({ type: DELETE_EXPENSE, id });
