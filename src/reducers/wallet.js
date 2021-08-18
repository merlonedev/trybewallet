import {
  CURRENCIES,
  WALLET,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const n = -2;
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: Math.round((action.payload * 100), n) / 100,
    };
  default:
    return state;
  }
};

export default wallet;
