import { FETCH_API, SAVED_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((ele) => !ele.includes('USDT'))
        .filter((ele) => !ele.includes('DOGE')),
    };
  case SAVED_EXPENSES:
    return {
      ...state,
      expenses: [...action.payload],
    };

  default: return state;
  }
};

export default wallet;
