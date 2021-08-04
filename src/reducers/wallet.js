import {
  CHANGE_WALLET_INFORMATION,
  GET_CURRENCIES,
  SET_CURRENCIES,
  SET_EXPENSE,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_WALLET_INFORMATION:
    return { ...state, ...action.info };
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: Object.entries(action.payload), isFetching: false };
  case SET_CURRENCIES:
    return { ...state, currencies: action.selecteds };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
