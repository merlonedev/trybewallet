// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES } from '../actions/getExpenses';
import { CURRENCIE } from '../actions/getCurrencies';
import { DELETE } from '../actions/deleteExpenses';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case CURRENCIE:
    return {
      ...state,
      currencies: Object.values(action.currencies),
    };
  case DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
