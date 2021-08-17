export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const CURRENCIES = 'CURRENCIES';

export const addingUserEmail = (state) => ({
  type: USER_EMAIL,
  state,
});

export const addingUserPwd = (state) => ({
  type: USER_PASSWORD,
  state,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const takeCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});
