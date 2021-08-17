import fetchAPI from '../services/currencyAPI';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINISH_EDIT = 'FINISH_EDIT';

export const saveEmail = (payload) => (
  { type: SAVE_EMAIL, payload }
);

export const saveCurrencies = (payload) => (
  { type: SAVE_CURRENCIES, payload }
);

export const addExpense = (expense, response) => (
  { type: ADD_EXPENSE, expense, response }
);

export const removeExpense = (payload) => (
  { type: DELETE_EXPENSE, payload }
);

export const editExpense = (payload) => (
  { type: EDIT_EXPENSE, payload }
);

export const finishEdit = (payload) => (
  { type: FINISH_EDIT, payload }
);

export const actionAddExpense = (state) => async (dispatch) => {
  const response = await fetchAPI();
  dispatch(addExpense(state, response));
};

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetchAPI();
  dispatch(saveCurrencies(response));
};
