/* import user from './user';
import wallet from './wallet'; */
import { SET_PERSONAL_VALUE, SET_WALLET_CURRENCY } from '../actions/index';

const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PERSONAL_VALUE:
    return { ...state, user: action.payload };
  case SET_WALLET_CURRENCY:
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
};

export default reducer;
