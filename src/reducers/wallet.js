import { RECEIVE_CURRENCY } from '../actions';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
};

export default wallet;
