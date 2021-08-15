// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API, GET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
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
  default:
    return state;
  }
};

export default wallet;
