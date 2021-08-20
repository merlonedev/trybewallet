export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCESS = 'GET_CURRENCY_SUCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const getCurrency = () => ({ type: GET_CURRENCY });

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCESS,
  payload,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCY_ERROR,
  error,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(getCurrency());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(endpoint)
    .then((result) => result.json())
    .catch((error) => dispatch(getCurrencyError(error)));
  dispatch(getCurrencySuccess(data));
  // const dataCurrency = await data.json();
  // if (dataCurrency.response_code === 0) {
  //   dispatch(getCurrencySuccess(dataCurrency));
  // } else if (!dataCurrency.results) {
  //   dispatch(getCurrencyError(dataCurrency));
  // }
};
