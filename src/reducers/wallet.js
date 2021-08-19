import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  GET_RATES,
  GET_RATES_SUCCESS,
  GET_RATES_ERROR,
  RMV_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
  error: null,
  isLoading: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  const { expenses } = state;
  const { payload, error, type } = action;
  switch (type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: payload, isLoading: false };
  case GET_CURRENCIES_ERROR:
    return { ...state, error, isLoading: false };
  case GET_RATES:
    return { ...state, isLoading: true };
  case GET_RATES_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...payload,
        },
      ],
      isLoading: false,
    };
  case GET_RATES_ERROR:
    return { ...state, error, isLoading: false };
  case RMV_EXPENSE:
    return {
      ...state,
      expenses: expenses.filter((expense) => expense.id !== payload),
    };
  default:
    return state;
  }
}

export default walletReducer;
