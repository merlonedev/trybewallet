export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY_SUCESS = 'GET_CURRENCY_SUCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCESS,
  payload,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCY_ERROR,
  error,
});
