import * as types from './actionTypes';

export const changeUser = (email) => ({
  type: types.CHANGE_USER,
  value: email,
});

const getCurrencies = (json) => ({
  type: types.GET_CURRENCIES,
  payload: json,
});

const requestCurrencies = () => ({ type: types.REQUEST_CURRENCIES });

export const failedRequest = (error) => ({
  type: types.FAILED_REQUEST,
  payload: error,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const results = await response.json();
    dispatch(getCurrencies(results));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};

export const addExpense = (expense) => ({
  type: types.ADD_EXPENSE,
  payload: expense,
});

export const isLoading = (bool) => ({
  type: types.IS_LOADING,
  payload: bool,
});
