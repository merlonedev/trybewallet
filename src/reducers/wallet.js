import { ADD_CURRENCIES, ADD_EXPENSES, REMOVE_EXPENSES } from '../actions';

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
      currencies: currenciesData.filter((iten) => iten !== 'USDT'),
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
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.id)),
    };
  default: return state;
  }
};

export default wallet;
