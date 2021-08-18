export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const getCurrency = () => ({
  type: GET_CURRENCIES,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCurrency);
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((currencies) => {
      const currencyList = [...Object.keys(currencies)];
      return currencyList;
    })
    .then((coins) => {
      const filteredCoins = coins.filter((coin) => coin !== 'USDT');
      return filteredCoins;
    })
    .then((results) => dispatch(getCurrencySuccess(results)))
    .catch((error) => dispatch(getCurrencyError(error)));
};
