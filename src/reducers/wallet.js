import { ADD_EXPENSE, ADD_CURRENCIES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const updateExpense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case ADD_CURRENCIES:
    return { ...state, currencies: [...state.currencies, ...action.payload] };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload };

  default:
    return state;
  }
};

export default updateExpense;
