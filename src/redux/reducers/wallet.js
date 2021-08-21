import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  sum: 0,
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

function sumValueBasedOnExpense(expense) {
  const curr = expense.currency;
  // Source: https://stackoverflow.com/questions/922544/using-variable-keys-to-access-values-in-javascript-objects
  const exchange = expense.exchangeRates[curr].ask;
  const conversion = exchange * expense.value;
  const roundedConversion = Math.round(conversion * 100) / 100;
  return roundedConversion;
}

// prettier-ignore
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case types.GET_CURRENCIES:
    return { ...state, currencies: Object.keys(action.payload), isLoading: false };
  case types.ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload], sum: state.sum + sumValueBasedOnExpense(action.payload) };
  case types.IS_LOADING:
    return { ...state, isLoading: action.payload };
  case types.FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
