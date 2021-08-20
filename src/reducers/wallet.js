import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES: {
    const currenciesData = Object.keys(action.payload);
    const currenciesDatas = Object(action.payload);
    return {
      ...state,
      currenciesLessUSDT: currenciesData.filter((iten) => iten !== 'USDT'),
      exchangeRates: currenciesDatas,
    };
  }
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length,
          ...action.expenses,
          exchangeRates: state.exchangeRates }],
    };
  default: return state;
  }
};

export default wallet;
