import { ADD_CURRENCIES } from '../actions';

const INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL, action) => {
  if (action.type === ADD_CURRENCIES) return { currencies: action.currencies };
  return state;
};

export default wallet;
