export const USER_EMAIL = 'USER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const addExpense = (expense) => async (dispatch) => {
  const isEmpty = Object.keys(expense).length === 0;
  if (!isEmpty) {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchExpensesApi = await fetch(url);
    const data = await fetchExpensesApi.json();
    dispatch({
      type: ADD_EXPENSE,
      payload: { ...expense, exchangeRates: data },
    });
  }
};

export const addCurrency = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const deleteExpense = (expense) => async (dispatch, getState) => {
  const { expenses } = getState().wallet;
  dispatch({
    type: DELETE_EXPENSE,
    payload: expenses.filter((e) => e.id !== expense.id),
  });
};

export const fetchApiCurrency = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const fetchCurrencyApi = await fetch(url);
  const data = await fetchCurrencyApi.json();
  const filterData = Object.keys(data)
    .filter((item) => item !== 'USDT')
    .filter((item) => item !== 'DOGE');

  dispatch(addCurrency(filterData));
};
