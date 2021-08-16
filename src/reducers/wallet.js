// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API, GET_EXPENSES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const deleteExpense = (state, action) => {
  const { expenses } = state;
  const elimin = expenses.filter((expense) => expense.id !== +action);
  return elimin;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return { ...state, currencies: [...action.payload] };
  case GET_EXPENSES:
    return { ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.expenses }],
      error: '' };
  case DELETE_EXPENSE:
    return {
      ...state, expenses: deleteExpense(state, action.eliminate),
    };
  default:
    return state;
  }
};

export default wallet;
