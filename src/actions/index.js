// Coloque aqui suas actions

export const addEmail = (email) => ({ type: 'ADD_EMAIL', email });

export const getCurrency = () => ({
  type: 'GET_CURRENCY',
});

export const getCurrencySucess = (currencies) => ({
  type: 'GET_CURRENCY_SUCESS', currencies,
});

export const getCurrencyError = (error) => ({
  type: 'GET_CURRENCY_ERROR', error,
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(getCurrency());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(getCurrencySucess(response)))
    .catch((error) => dispatch(getCurrencyError(error)));
};
