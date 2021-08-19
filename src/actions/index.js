export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  email,
});

export const newCurrencies = (currencies) => ({
  type: 'NEW_CURRENCIES',
  currencies,
});

export const newExpenses = (expenses) => ({
  type: 'NEW_EXPENSES',
  expenses,
});

export const deleteExpense = (expenses) => ({
  type: 'DELETE_EXPENSE',
  expenses,
});

export function fetchApiCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencieItem) => {
        delete currencieItem.USDT;
        dispatch(newCurrencies(currencieItem));
      });
  };
}

export const fetchApiExpenses = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
  dispatch(newExpenses(expense));
};
