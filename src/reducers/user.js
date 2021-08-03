/* import user from './user';
import wallet from './wallet'; */
import { EMAIL } from '../actions/index';

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
  case EMAIL:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default reducer;
