import { GET_COINS, GET_COINS_SUCCES } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return { ...state };
  case GET_COINS_SUCCES:
    return { ...state, currencies: [...action.payload] };
  default:
    return state;
  }
}

export default wallet;
