// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_COIN_SUCCESS, ADD_EXPENSE } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN_SUCCESS:
    return { ...state, currencies: action.coin };

  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };

  default:
    return state;
  }
};

export default wallet;
