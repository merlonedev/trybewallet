import { FETCH_ERROR_CASES,
  FETCH_SUCCESS_COINS,
  FETCH_SUCCESS_CURRENT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, error, response, payload } = action;
  switch (type) {
  case FETCH_SUCCESS_COINS:
    return {
      ...state,
      currencies: response,
    };
  case FETCH_ERROR_CASES:
    console.log(error);
    return {
      ...state,
      error,
    };
  case FETCH_SUCCESS_CURRENT:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        payload,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
