import {
  SET_CURRENCIES,
  SET_CURRENCIES_SUCCESS,
  SET_CURRENCIES_ERROR,
  SET_EMAIL,
  INSERT_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
  EDIT_EXPENSE,
  SUM_EXPENSES,
} from './actionTypes';

export const emailAction = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setCurrencies = () => ({ type: SET_CURRENCIES });

export const setCurrenciesSuccess = (payload) => ({
  type: SET_CURRENCIES_SUCCESS,
  payload,
});

export const setCurrenciesError = (error) => ({
  type: SET_CURRENCIES_ERROR,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(setCurrencies());
  try {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(endpoint);
    const dataCurrencies = await data.json();
    dispatch(setCurrenciesSuccess(dataCurrencies));
    return dataCurrencies;
  } catch (error) {
    dispatch(setCurrenciesError(error));
  }
};

export const insertExpense = (payload) => ({
  type: INSERT_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export function updateExpense(payload) {
  return {
    type: UPDATE_EXPENSE,
    payload,
  };
}

export function editExpense(payload) {
  return {
    type: EDIT_EXPENSE,
    payload,
  };
}

export const sumExpenses = () => (dispatch, getState) => {
  const { wallet: { expenses } } = getState();

  dispatch({
    type: SUM_EXPENSES,
    expenses,
  });
};
