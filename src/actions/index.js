export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const CATCH_ERROR = 'CATCH_ERROR';

export const saveEmailAndPassword = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: {
    currencies,
  },
});

export const catchError = (error) => ({
  type: CATCH_ERROR,
  payload: error,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    return fetch(URL)
      .then((data) => data.json()
        .then((results) => dispatch(saveCurrencies(results))));
  };
}
