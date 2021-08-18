export const ADD_LOGIN = 'ADD_LOGIN';
export const API_DATA = 'API_DATA';
export const GET_EXPENSE = 'GET_EXPENSE';
export const EXPENSE_DATA = 'EXPENSE_DATA';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const addLogin = (login) => ({
  type: ADD_LOGIN,
  payload: login,
});

export const getAPI = (payload) => ({
  type: API_DATA,
  payload,
});

export const getExpenses = (state, response) => ({
  type: EXPENSE_DATA,
  test: {
    ...state,
    exchangeRates: response,
  },
});

export const fetchAPI = () => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(endpoint);
  const response = await request.json();
  const results = Object.keys(response).filter((curr) => curr !== 'USDT');
  try {
    return dispatch(getAPI(results));
  } catch (error) {
    return error;
  }
};

export const fetchCurrencies = (state) => async (dispatch) => {
  const endpoint2 = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(endpoint2);
  const response = await request.json();
  try {
    return dispatch(getExpenses(state, response));
  } catch (error) {
    return error;
  }
};
