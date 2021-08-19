import {
  USER_CURRENCIES,
  USER_EXPENSES,
  USER_TABLE,
  USER_DELETE,
} from '../actions/index.login';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CURRENCIES:
    return {
      ...state, currencies: action.payload,
    };
  case USER_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  case USER_TABLE:
    return {
      ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.payload),
    };
  case USER_DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.state),
    };
  default:
    return state;
  }
};

export default userWallet;
