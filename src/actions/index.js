// Coloque aqui suas actions
export const USER_INFORMATION = 'USER_INFORMATION';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const GET_EXCHANGE_SUCCES = 'GET_EXCHANGE_SUCCES';
export const GET_EXCHANGE_ERROR = 'GET_EXCHANGE_ERROR';
export const ADD_EXCHANGE_SUCCES = 'ADD_EXCHANGE_SUCCES';
export const REMOVE_TABLE_LINE = 'REMOVE_TABLE_LINE';

export const userInformation = (user) => ({
  type: USER_INFORMATION,
  user,
});

export const getExchange = () => ({ type: GET_EXCHANGE });
export const getExchangeSucces = (payload) => ({ type: GET_EXCHANGE_SUCCES, payload });
export const getExchangeError = (error) => ({ type: GET_EXCHANGE_ERROR, error });
export const addExchangeSucces = (payload) => ({ type: ADD_EXCHANGE_SUCCES, payload });
export const removeTableLine = (id) => ({ type: REMOVE_TABLE_LINE, id });

export const fetchAPI = (state) => async (dispatch) => {
  dispatch(getExchange());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    if (!state) return dispatch(getExchangeSucces(currencies));
    dispatch(addExchangeSucces({ ...state, exchangeRates: currencies }));
    return currencies;
  } catch (error) {
    dispatch(getExchangeError(error));
  }
};
