// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES } from '../actions';

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
  default:
    return state;
  }
}

export default walletReducer;
