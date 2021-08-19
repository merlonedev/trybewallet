import { FETCH_COIN_SUCCESS } from '../actions/wallet';
import { REQUEST_CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  coin: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN_SUCCESS:
    return {
      ...state, coin: action.coin,
    };
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
