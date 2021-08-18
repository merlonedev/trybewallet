// action para pegar dados do usuário
export const GET_USER = 'GET_USER';
export const GET_CURRENT_EXCHANGE = 'GET_CURRENT_EXCHANGE';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';

export const getUserData = (payload) => ({
  type: GET_USER,
  info: 'Get the current email user',
  payload,
});

// action cambio

export const getExchange = (payload) => ({
  type: GET_CURRENT_EXCHANGE,
  info: '',
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

export default fetchCurrencyAction;
