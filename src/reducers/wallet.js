import {
  FETCH_CURRENCIES,
  FETCH_SUCCESS_CURRENCIES,
  FETCH_ERROR_CURRENCIES,
  ADD_EXPENSE,
  ADD_SUCCESSFUL,
  ADD_ERROR,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  messageError: '',
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case FETCH_CURRENCIES:
    return { ...state, isFetching: true };
  case FETCH_SUCCESS_CURRENCIES:
    return { ...state, currencies: payload, isFetching: false };
  case FETCH_ERROR_CURRENCIES:
    return { ...state, messageError: payload, isFetching: false };
  case ADD_EXPENSE:
    return state;
  case ADD_SUCCESSFUL:
    return {
      ...state,
      expenses:
        [
          ...state.expenses,
          {
            id: payload.idExpense,
            ...payload.newExpense,
            exchangeRates: payload.results,
          },
        ],
      isFetching: false,
    };
  case ADD_ERROR:
    return { ...state, messageError: payload, isFetching: false };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(({ id }) => id !== +payload)],
    };
  default:
    return state;
  }
};

export default walletReducer;
