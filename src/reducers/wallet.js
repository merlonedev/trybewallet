import { ADD_CURRENCIES, ADD_EXPENSE, RMV_EXPENSE } from '../actions';

const INITIAL = {
  currencies: {},
  expenses: [],
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case RMV_EXPENSE:
    return { ...state, expenses: state.expenses.filter((exp) => exp.id !== action.id) };
  default:
    return state;
  }
};

export default wallet;
