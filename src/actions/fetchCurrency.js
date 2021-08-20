export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCESS = 'GET_CURRENCIES_SUCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCESS = 'GET_CURRENCY_SUCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const getCurrencies = () => ({ type: GET_CURRENCIES });

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCESS,
  payload,
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const getCurrency = () => ({ type: GET_CURRENCY });

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCESS,
  payload,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCY_ERROR,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(endpoint)
    .then((result) => result.json())
    .catch((error) => dispatch(getCurrenciesError(error)));
  dispatch(getCurrenciesSuccess(data));
};

export const fetchCurrency = (code) => async (dispatch) => {
  dispatch(getCurrency());
  const endpoint = `https://economia.awesomeapi.com.br/json/${code}`;
  const data = await fetch(endpoint)
    .then((result) => result.json())
    .catch((error) => dispatch(getCurrencyError(error)));
  dispatch(getCurrencySuccess(data));
};
