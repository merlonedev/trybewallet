import { ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES: {
    const currenciesData = Object.keys(action.payload);
    return {
      ...state,
      currenciesLessUSDT: currenciesData.filter((iten) => iten !== 'USDT'),
      currencies: action.payload,
    };
  }
  default: return state;
  }
};

export default wallet;
