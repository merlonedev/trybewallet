import { RECEIVE_CURRENCY, ADD_EXPENSE } from '../actions';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
};

export default wallet;
