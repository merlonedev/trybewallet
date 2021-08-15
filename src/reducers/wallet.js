import { ADD_CURRENCY, ADD_EXPENSES } from '../actions';

const INICIAL_STATE = {
  currenciesKey: {},
  currencies: [],
  expenses: [],
};

const wallets = (state = INICIAL_STATE, action) => {
  const { gasto } = action;
  switch (action.type) {
  case ADD_CURRENCY: {
    const coinArray = Object.keys(action.coin);
    return {
      ...state,
      currencies: coinArray.filter((iten) => iten !== 'USDT'),
      currenciesKey: action.coin,
    };
  }
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        gasto,
        exchangeRates: state.currenciesKey,
      }],
    };
  default:
    return state;
  }
};

export default wallets;
