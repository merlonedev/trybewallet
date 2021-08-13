export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_SUCCESS';
export const SAVE_STATE_FORM = 'SAVE_STATE_FORM';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const GET_EX_SUCCESS = 'GET_EX_SUCCESS';
export const GET_EX_ERROR = 'GET_EX_ERROR';

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const actGetEmail = (email) => ({ type: 'GET_EMAIL', payload: email });
export const getCurrency = () => ({ type: GET_CURRENCY });
export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

const fetchAPI = async () => {
  const response = await fetch(endpoint);
  const result = response.json();
  console.log(result);
  return result;
};

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrency());
  try {
    dispatch(getCurrencySuccess(await fetchAPI()));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

export const getExchange = () => ({
  type: GET_EXCHANGE,
});

export const getExchangeSuccess = (payload) => ({
  type: GET_EX_SUCCESS,
  payload,
});

export const getExchangeError = (payload) => ({
  type: GET_EX_ERROR,
  payload,
});

export const getExchangeThunk = () => async (dispatch) => {
  dispatch(getExchange());
  try {
    dispatch(getExchangeSuccess(await fetchAPI()));
  } catch (error) {
    dispatch(getExchangeError(error));
  }
};

// export const saveStateForm = (state) => ({ type: SAVE_STATE_FORM, payload: state });

export const actGetExpenses = (expenses) => ({ type: GET_EXPENSES, payload: expenses });
