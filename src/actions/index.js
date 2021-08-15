export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const saveEmail = (email) => ({ type: EMAIL_LOGIN, email });

export const expenseEnd = (coin, gasto) => ({ type: ADD_EXPENSES, gasto, coin });

export const addCurrency = (coin) => ({ type: ADD_CURRENCY, coin });

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const currency = (gasto) => (dispatch) => fetch(endpoint)
  .then((packJason) => packJason.json())
  .then((resp) => (
    dispatch(gasto === undefined ? addCurrency(resp) : expenseEnd(resp, gasto))));
