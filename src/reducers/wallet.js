import {
  FETCH_CURRENCIES,
  FETCH_SUCCESS_CURRENCIES,
  FETCH_ERROR_CURRENCIES,
  ADD_EXPENSE,
  ADD_SUCCESSFUL,
  ADD_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  messageError: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return { ...state, isFetching: true };
  case FETCH_SUCCESS_CURRENCIES:
    return { ...state, currencies: action.payload, isFetching: false };
  case FETCH_ERROR_CURRENCIES:
    return { ...state, messageError: action.payload, isFetching: false };
  case ADD_EXPENSE:
    return state;
  case ADD_SUCCESSFUL:
    return {
      ...state,
      expenses:
        [
          ...state.expenses,
          {
            id: action.payload.idExpense,
            ...action.payload.newExpense,
            exchangeRates: action.payload.results,
          },
        ],
    };
  case ADD_ERROR:
    return { ...state, messageError: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default walletReducer;
