export const USER_EMAIL = 'USER_EMAIL';
export const USER_CURRENCIES = 'USER_CURRENCIES';
export const USER_EXPENSES = 'USER_EXPENSES';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const userExpencies = (expenses) => ({
  type: USER_CURRENCIES,
  payload: expenses,
});

export const userCurrencies = (currencies) => ({
  USER_EXPENSES,
  payload: currencies,
});

export const fetchApiCurriencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();

  const coins = currencies.filter((coin) => coin !== 'USDT');
  dispatch(userCurrencies(coins));
};
