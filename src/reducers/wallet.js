// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API_ACTION,
  GET_CURRENCIES_NAMES,
  GET_CURRENCIES,
  SAVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API_ACTION:
    return ({ ...state, isFetching: true });
  case GET_CURRENCIES_NAMES:
    return ({
      ...state,
      isFetching: false,
      currencies: [...Object.keys(action.payload)],
    });
  case GET_CURRENCIES:
    return ({
      ...state,
      isFetching: false,
      expenses: [{
        exchangeRates: action.payload.exchangeRates,
      }],
    });
  case SAVE_EXPENSE:
    return ({
      ...state,
      expenses: [{ ...action.payload.expenseSpecs }],
    });
  default:
    return state;
  }
};

export default walletReducer;
