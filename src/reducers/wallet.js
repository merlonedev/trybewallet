import { ADD_CURRENCY } from '../actions';

const INICIAL_STATE = {
  currencies: {},
  currenciesKey: [],
  expenses: [],
};

const wallets = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY: {
    const coinArray = Object.keys(action.coin);
    return {
      ...state,
      currenciesKey: coinArray.filter((iten) => iten !== 'USDT'),
      currencies: action.coin,
    };
  }
  default:
    return state;
  }
};

export default wallets;
