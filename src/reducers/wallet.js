import {
  FETCHING_CURRENCY,
  ADD_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_CURRENCY:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.id, ...action.payload }],
      id: state.id + 1,
    };
  default:
    return state;
  }
}

export default wallet;
