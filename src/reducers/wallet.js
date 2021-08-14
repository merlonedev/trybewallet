// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { STATE, DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STATE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case DELETE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.value),
      ],
    };
  default:
    return state;
  }
};
export default wallet;
