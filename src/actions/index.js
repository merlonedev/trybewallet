// Coloque aqui suas actions

export const addEmail = (email) => ({ type: 'ADD_EMAIL', email });

export const getCurrency = () => ({
  type: 'GET_CURRENCY',
});

export const getCurrencySucess = (currencies) => ({
  type: 'GET_CURRENCY_SUCESS', currencies,
});

export const getCurrencyError = (error) => ({
  type: 'GET_CURRENCY_ERROR', error,
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(getCurrency());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      delete response.USDT;
      const currencies = Object.values(response);
      dispatch(getCurrencySucess(currencies));
    })
    .catch((error) => dispatch(getCurrencyError(error)));
};

export const setExpenses = () => ({
  type: 'SET_EXPENSES',
});

export const setExpensesSucess = (expense) => ({
  type: 'SET_EXPENSES_SUCESS', expense,
});

export const setExpensesError = (error) => ({
  type: 'SET_EXPENSES_ERROR', error,
});

export const fetchExpenses = (state) => (dispatch) => {
  dispatch(setExpenses());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const expense = { ...state, exchangeRates: response };
      dispatch(setExpensesSucess(expense));
    })
    .catch((error) => dispatch(getCurrencyError(error)));
};
