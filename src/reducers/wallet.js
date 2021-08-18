import {
  ADD_CURRENCIE,
  ADD_CURRENCIE_SUCCES,
  ADD_CURRENCIE_ERROR,
  USER_EXPENSE,
  USER_EXPENSE_SUCCES,
  USER_EXPENSE_ERROR,
  REMOVE_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
};
function filterCurrencies(allCurrencies) {
  const keys = Object.keys(allCurrencies);
  const filterK = keys.filter((key) => key !== 'USDT');
  return filterK;
}
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCIE:
    return { ...state, isFetching: true };

  case ADD_CURRENCIE_SUCCES: {
    // console.log(filterCurrencies(action.payload));
    return { ...state, currencies: filterCurrencies(action.payload) };
  }
  case ADD_CURRENCIE_ERROR:
    return { ...state, error: action.error };

  case USER_EXPENSE:
    return { ...state, isFetching: true };

  case USER_EXPENSE_SUCCES: {
    return {
      ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length, ...action.payload }],
    };
  }
  case USER_EXPENSE_ERROR:
    return { ...state, error: action.error };

  case REMOVE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };

  default:
    return state;
  }
}
export default wallet;
