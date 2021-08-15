import { COIN, COIN_FAIL, COIN_SUCESS, EXPENSES } from '../actions';

const STATE_INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = STATE_INITIAL, action) => {
  switch (action.type) {
  case COIN:
    return {
      ...state,
    };
  case COIN_SUCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case COIN_FAIL:
    return {
      ...state,
      error: 'Erro',
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.payload,
        exchangeRates: {
          ...action.exchangeRates,
        },
      }],
    };

  default:
    return state;
  }
};

export default wallet;
