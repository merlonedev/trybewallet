import { GET_COINS, GET_COINS_SUCCESS, GET_COINS_ERROR,
  GET_EXPENSES_SUCCESS, GET_EXPENSES_ERROR, DELETE_TABLE } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

function filterCoins(allCurrencies) {
  const keys = Object.keys(allCurrencies);
  const removeUsdt = keys.filter((key) => key !== 'USDT');
  return removeUsdt;
}

function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return { ...state, isLoading: true };

  case GET_COINS_SUCCESS:
    return { ...state, currencies: filterCoins(action.payload) };

  case GET_COINS_ERROR:
    return { ...state, error: action.error, isLoading: false };

  case GET_EXPENSES_ERROR: {
    return { ...state, error: action.error, isLoading: false };
  }

  case GET_EXPENSES_SUCCESS: {
    return {
      ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length, ...action.payload }],
    };
  }

  case DELETE_TABLE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.id)),
    };

  default:
    return state;
  }
}
export default wallet;
