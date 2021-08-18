export const USER_EMAIL = 'USER_EMAIL';
export const USER_CURRENCIES = 'USER_CURRENCIES';
export const USER_EXPENSES = 'USER_EXPENSES';
export const USER_SUM_TOTAL = 'USER_SUM_TOTAL';

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

export const userSumTotal = (sumTotal) => ({
  type: USER_SUM_TOTAL,
  payload: sumTotal,
});

// export const userDelete = => {
//   type: USER_DELETE,
//     pay
// }

export const fetchApiCurriencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();

  const coins = Object.keys(currencies).filter((coin) => coin !== 'USDT');
  dispatch(userCurrencies(coins));
};
