export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';

export const saveEmail = (email) => ({ type: EMAIL_LOGIN, email });

export const addCurrency = (coin) => ({ type: ADD_CURRENCY, coin });

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const currency = () => (dispatch) => fetch(endpoint)
  .then((packJason) => packJason.json())
  .then((resp) => dispatch(addCurrency(resp)));
