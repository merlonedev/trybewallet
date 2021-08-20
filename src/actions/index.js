// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_API_ACTION = 'REQUEST_API_ACTION';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_NAMES = 'GET_CURRENCIES_NAMES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export function saveUserEmail(state) {
  return ({
    type: SAVE_EMAIL,
    state,
  });
}

const requestApiAction = () => ({ type: REQUEST_API_ACTION });

const getCoins = (apiReturn) => ({
  type: GET_CURRENCIES_NAMES,
  payload: apiReturn,
  isFetching: false,
});

const requestApiResolve = (apiReturn) => apiReturn;

export const saveExpenseSpecs = (expenseSpecs, fecth) => ({
  type: SAVE_EXPENSE,
  payload: { ...expenseSpecs, exchangeRates: fecth() },
});

export const fetchApi = () => async (dispatch) => {
  dispatch(requestApiAction());
  const apiResponse = await fetch(URL_API);
  const apiResolve = await apiResponse.json();
  dispatch(getCoins(apiResolve));
};

export const clickButtonFetchApi = (expenseSpecs) => async (dispatch) => {
  dispatch(requestApiAction());
  const apiResponse = await fetch(URL_API);
  const apiResolve = await apiResponse.json();
  dispatch(saveExpenseSpecs(expenseSpecs, () => requestApiResolve(apiResolve)));
};
