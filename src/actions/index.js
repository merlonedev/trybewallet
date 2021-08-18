export const ADD_USER = 'ADD_USER';
export const addUser = (value) => ({ type: ADD_USER, value });

export const GET_COINS = 'GET_COINS';
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';
export const GET_COINS_ERROR = 'GET_COINS_ERROR';
export const getCoins = () => ({ type: GET_COINS });
export const getCoinsSuccess = (payload) => ({ type: GET_COINS_SUCCESS, payload });
export const getCoinsError = (error) => ({ type: GET_COINS_ERROR, error });

export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_ERROR = 'GET_EXPENSES_ERROR';
export const getExpensesSuccess = (payload) => ({ type: GET_EXPENSES_SUCCESS, payload });
export const getExpensesError = (error) => ({ type: GET_EXPENSES_ERROR, error });

export const DELETE_TABLE = 'DELETE_TABLE';
export const deleteTable = (id) => ({ type: DELETE_TABLE, id });

export const fetchAPI = (state) => async (dispatch) => {
  dispatch(getCoins());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    if (!state) return dispatch(getCoinsSuccess(currencies));
    dispatch(getExpensesSuccess({ ...state, exchangeRates: currencies }));
    return currencies;
  } catch (error) {
    dispatch(getCoinsError(error));
  }
};
