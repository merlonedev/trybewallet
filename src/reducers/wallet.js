import { ADD_EXPENSE, CURRENCY, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  totalExpenses: [],
  currencies: [],
};

const addExpense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      totalExpenses: [
        ...state.totalExpenses,
        action.totalExpenses,
      ],
    };
  case CURRENCY:
    return {
      ...state,
      currency: [...state.currency, ...action.currency],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      totalExpenses: state.totalExpenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default addExpense;
