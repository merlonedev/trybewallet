import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: 0,
  error: null,
  isLoading: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, error: null, currencies: action.payload, isLoading: false };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.error, isLoading: false };
  default:
    return state;
  }
}

export default walletReducer;
