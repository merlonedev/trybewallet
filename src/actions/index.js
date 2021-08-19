export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const addCurrency = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const fetchApiCurrency = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const fetchCurrencyApi = await fetch(url);
  const data = await fetchCurrencyApi.json();
  const filterData = Object.keys(data)
    .filter((item) => item !== 'USDT')
    .filter((item) => item !== 'DOGE');

  dispatch(addCurrency(filterData));
};

export const fetchApiExpenses = (state) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const fetchExpensesApi = await fetch(url);
  const data = await fetchExpensesApi.json();
  dispatch(addExpense({ ...state, exchangeRates: data }));
};
