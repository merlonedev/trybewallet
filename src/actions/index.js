export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (email) => ({
  type: LOGIN,
  email,
});

// Actions fetch na api

const isFetching = () => ({
  type: FETCHING,
  isFetching: true,
});

const fetchSuccessCase = (response) => ({
  type: FETCH_SUCCESS,
  response,
  isFetching: false,
});

const fetchFailCase = (error) => ({
  type: FETCH_ERROR,
  error,
  isFetching: false,
});

export const fetchAwesomeAPI = () => (async (dispatch) => {
  dispatch(isFetching());
  try {
    const request = await fetch(END_POINT);
    const response = request.json();
    const currencies = Object.keys(response);
    const result = currencies.filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );

    dispatch(fetchSuccessCase(result));
  } catch (error) {
    dispatch(fetchFailCase(error));
  }
});
