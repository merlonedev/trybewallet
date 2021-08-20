import { ADD_EXPENSE, GET_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  Currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      Currencies: [...Object.keys(action.currencies)],
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  default:
    return state;
  }
}

export default wallet;
