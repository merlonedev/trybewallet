import { RECEIVE_CURRENCY, ADD_EXPENSE, DEL_ENTRY } from '../actions';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DEL_ENTRY:
    return { ...state,
      expenses: [...state.expenses
        .filter((expense) => expense.id !== action.expense.id)] };
  default:
    return state;
  }
};

export default wallet;
