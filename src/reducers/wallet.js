import { ADD_CURRENCY, ADD_EXPENSES, REMOVE_EXPENSE } from '../actions';

const INICIAL_STATE = {
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
    };
  }

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...gasto,
        exchangeRates: action.coin,
      }],
    };
  default:
    return state;
  }
};

export default wallets;
