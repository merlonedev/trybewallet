import { FETCH_ERROR, FETCH_SUCCESS, FETCHING } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, error, response, isFetching } = action;
  switch (type) {
  case FETCHING:
    return {
      ...state,
      isFetching,
    };
  case FETCH_SUCCESS:
    return {
      ...state,
      isFetching,
      currencies: [...response],
    };
  case FETCH_ERROR:
    return {
      ...state,
      isFetching,
      error,
    };
  default:
    return state;
  }
};

export default wallet;
