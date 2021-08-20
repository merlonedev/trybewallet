export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

export const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});
