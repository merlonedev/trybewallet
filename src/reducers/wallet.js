// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, CURRENCIES, DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.id, ...action.value }],
      id: state.id + 1 };
  case CURRENCIES:
    return {
      ...state,
      currencies: action.value,
    };
  case DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => action.value !== expense.id),
    };
  default:
    return state;
  }
}

export default walletReducer;
