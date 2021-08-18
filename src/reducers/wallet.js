import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  GET_RATES,
  GET_RATES_SUCCESS,
  GET_RATES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: {},
  error: null,
  isLoading: false,
  rates: {},
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload, isLoading: false };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.error, isLoading: false };
  case GET_RATES:
    return { ...state, isLoading: true };
  case GET_RATES_SUCCESS:
    return { ...state, expenses: action.payload, isLoading: false };
  case GET_RATES_ERROR:
    return { ...state, error: action.error, isLoading: false };
  default:
    return state;
  }
}

export default walletReducer;
