export const USER_EMAIL = 'USER_EMAIL';
export const USER_CURRENCIES = 'USER_CURRENCIES';
export const USER_EXPENSES = 'USER_EXPENSES';
export const USER_TABLE = 'USER_TABLE';
export const USER_DELETE = 'USER_DELETE';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const userExpencies = (expenses) => ({
  type: USER_EXPENSES,
  payload: expenses,
});

export const userCurrencies = (currencies) => ({
  type: USER_CURRENCIES,
  payload: currencies,
});

export const userSumTotal = (table) => ({
  type: USER_TABLE,
  payload: table,
});

export const userDelete = (del) => ({
  type: USER_DELETE,
  payload: del,
});

export const fetchApiCurriencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();

  const coins = Object.keys(currencies).filter((coin) => coin !== 'USDT');
  dispatch(userCurrencies(coins));
};
