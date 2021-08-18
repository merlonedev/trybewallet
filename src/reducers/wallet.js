import { API_MOEDA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_MOEDA:
    return {
      ...state,
      currencies: [...action.currency],
    };
  default:
    return state;
  }
}

export default wallet;
