// Coloque aqui suas actions
import getApi from '../api';

export const GET_MAIL = 'GET_MAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export const getMail = (email) => ({ type: GET_MAIL, email });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export const getExpenses = (expenses, data) => {
  const expensesValues = {
    ...expenses,
    exchangeRates: { ...data },
  };
  return ({ type: GET_EXPENSES, expensesValues,

  });
};
export const requestExpenses = (expenses) => (dispatch) => (
  getApi()
    .then((response) => dispatch(getExpenses(expenses, response)))
);
