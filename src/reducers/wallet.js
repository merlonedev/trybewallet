// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_EXPENSES, DEL_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };

  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expensesValues] };

  case DEL_EXPENSES:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id) };
  default:
    return state;
  }
};

export default wallet;
