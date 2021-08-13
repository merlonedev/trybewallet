// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_COIN_SUCCESS } from '../actions/wallet';

const INITIAL_STATE = {
  coin: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN_SUCCESS:
    return {
      ...state, coin: action.coin,
    };
  default: return state;
  }
};

export default wallet;
