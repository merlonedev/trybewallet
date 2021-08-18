export const GET_RATES = 'GET_RATES';
export const GET_RATES_SUCCESS = 'GET_RATES_SUCCESS';
export const GET_RATES_ERROR = 'GET_RATES_ERROR';

export const getRates = () => ({
  type: GET_RATES,
});

export const getRatesSuccess = (payload) => ({
  type: GET_RATES_SUCCESS,
  payload,
});

export const getRatesError = (error) => ({
  type: GET_RATES_ERROR,
  error,
});

export const fetchAPI2 = () => async (dispatch) => {
  dispatch(getRates);
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((results) => dispatch(getRatesSuccess(results)))
    .catch((error) => dispatch(getRatesError(error)));
};
