export const GET_USER = 'GET_USER';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';
export const FETCH_PRICES_SUCCESS = 'FETCH_PRICES_SUCCESS';
export const FETCH_PRICES_ERROR = 'FETCH_PRICES_ERROR';

export const getUserData = (payload) => ({
  type: GET_USER,
  info: 'Get the current email user',
  payload,
});

const fetchCurrencies = () => ({ type: FETCH_CURRENCIES });
const fetchCurrenciesSuccess = (payload) => ({ type: FETCH_CURRENCIES_SUCCESS, payload });
const fetchCurrenciesError = (payload) => ({ type: FETCH_CURRENCIES_ERROR, payload });

export const fetchCurrencyAction = () => async (dispatch) => {
  dispatch(fetchCurrencies);
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const result = await response.json();
  try {
    dispatch(fetchCurrenciesSuccess(result));
  } catch (error) {
    dispatch(fetchCurrenciesError(error));
  }
};

const fetchPricesSuccess = (expenses) => ({
  type: FETCH_PRICES_SUCCESS,
  payload: expenses,
});
const fetchPricesError = (error) => ({ type: FETCH_PRICES_ERROR, payload: error });

export const fetchPricesAction = (expenses) => async (dispatch) => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  try {
    const result = await response.json();
    dispatch(fetchPricesSuccess({ ...expenses, exchangeRates: result }));
  } catch (err) {
    dispatch(fetchPricesError(err));
  }
};
