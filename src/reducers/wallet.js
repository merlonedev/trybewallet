import { ADD_CURRENCY, ADD_EXPENSES } from '../actions';

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
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: action.gasto,
    };
  default:
    return state;
  }
};

export default wallets;
