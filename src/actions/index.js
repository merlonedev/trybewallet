import { fetchAPI } from '../services';

export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload: payload.email,
});

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_SUCCESS_CURRENCIES = 'FETCH_SUCCESS_CURRENCIES';
export const FETCH_ERROR_CURRENCIES = 'FETCH_ERROR_CURRENCIES';

const requestCurrencies = () => ({
  type: FETCH_CURRENCIES,
});

const successCurrencies = (payload) => ({
  type: FETCH_SUCCESS_CURRENCIES,
  payload,
});

const errorCurrencies = (payload) => ({
  type: FETCH_ERROR_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const results = await fetchAPI(URL);
    const coins = Object.keys(results)
      .map((coin) => ({ name: coin, value: coin }))
      .filter((coin) => coin.name !== 'USDT' && coin.name !== 'DOGE');
    dispatch(successCurrencies(coins));
  } catch (error) {
    dispatch(errorCurrencies(error));
  }
};

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_SUCCESSFUL = 'ADD_SUCCESSFUL';
export const ADD_ERROR = 'ADD_ERROR';

const requestAddExpense = () => ({
  type: ADD_EXPENSE,
});

const successfulAddtion = (newExpense, idExpense, results) => ({
  type: ADD_SUCCESSFUL,
  payload: {
    newExpense,
    idExpense,
    results,
  },
});

const errorAddtion = (payload) => ({
  type: ADD_ERROR,
  payload,
});

export const actionAddExpense = (state, id) => async (dispatch) => {
  dispatch(requestAddExpense());

  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const results = await fetchAPI(URL);
    dispatch(successfulAddtion(state, id, results));
  } catch (error) {
    dispatch(errorAddtion(error));
  }
};

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const actionDeleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
