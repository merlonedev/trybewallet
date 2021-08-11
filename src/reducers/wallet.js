import { EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default reducer;
