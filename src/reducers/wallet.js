// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_PRICES_SUCCESS,
  FETCH_PRICES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case FETCH_PRICES_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case FETCH_PRICES_ERROR:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default reducerWallet;
