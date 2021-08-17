export const USER_EMAIL = 'user_email';
export const ADD_EXPENSE = 'add_expense';
export const DELETE_EXPENSE = 'delete_expense';
export const CURRENCY = 'currency';

export const saveEmail = (actualEmail) => ({
  type: USER_EMAIL,
  user: {
    email: actualEmail,
  },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const addCurrency = (currency) => ({
  type: CURRENCY,
  currency,
});

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

// mudar
export const fetchApi = (expenses) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApiResquest = await fetch(URL);
  const jsonResponse = await fetchApiResquest.json();

  if (!expenses) {
    const currents = Object.keys(jsonResponse)
      .filter((current) => current !== 'USDT');
    return dispatch(getCurrencies(currents));
  }
  dispatch(addExpense({ ...expenses, exchangeRates: jsonResponse }));
};
