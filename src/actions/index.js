export const USER_EMAIL = 'user_email';
export const ADD_EXPENSE = 'add_expense';
export const DELETE_EXPENSE = 'delete_expense';
export const CURRENCIES = 'currencies';

export const addEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const addCurrency = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

export const fetchApiCurrency = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const fetchCurrencyApi = await fetch(URL);
  const data = await fetchCurrencyApi.json();
  const filterData = Object.keys(data).filter((item) => item !== 'USDT');

  dispatch(addCurrency(filterData));
};

export const fetchApiExpenses = (prevState) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(addExpense({ ...prevState, exchangeRates: response })))
);
