export const SAVE_LOGIN = 'SAVE_LOGIN';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const login = (email) => ({
  type: SAVE_LOGIN, email,
});

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES, payload,
});

export function currencies() {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(API_URL);
    const result = await response.json();
    dispatch(addCurrencies(result));
  };
}
