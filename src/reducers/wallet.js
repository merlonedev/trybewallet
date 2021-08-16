import { GET_COINS } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return { ...state };
  default:
    return state;
  }
}

export default wallet;
