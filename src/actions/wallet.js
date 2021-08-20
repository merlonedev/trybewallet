export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const successFetch = (coin) => ({
  type: FETCH_COIN_SUCCESS,
  coin,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});
