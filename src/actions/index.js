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
  return async (dispatch) => {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencieItem) => {
        delete currencieItem.USDT;
        dispatch(newCurrencies(currencieItem));
      });
  };
}

// O projeto de Bruno Affonso me ajudou a entender e consertar o problema com 'USDT': https://github.com/tryber/sd-010-b-project-trybewallet/pull/44/files

export const fetchApiExpenses = (expense) => async (dispatch) => {
  const exchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
  dispatch(newExpenses({ ...expense, exchangeRates }));
};
