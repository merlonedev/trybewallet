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
export const getExpensesSuccess = () => ({ type: GET_EXPENSES_SUCCESS });
export const getExpensesError = () => ({ type: GET_EXPENSES_ERROR });

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCoins());
  // if (!teste) {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(getCoinsSuccess(currencies));
    return currencies;
  } catch (error) {
    dispatch(getCoinsError(error));
  }
  // } else {
  //   const resp2 = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   if (!resp2.ok) return dispach(getExpensesError);
  //   const currenciesData = await respJson.json();
  //   dispach(getExpensesSucess({ ...teste, exchangeRates: currenciesData }));
  // }
};
