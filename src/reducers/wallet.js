import { SAVE_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  totalExpenses: 0,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      totalExpenses: action.payload.totalExpenses,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
