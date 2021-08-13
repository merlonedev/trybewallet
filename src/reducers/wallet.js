import {
  GET_CURRENCY,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
  GET_EXPENSES,
  GET_EXCHANGE,
  GET_EX_SUCCESS,
  GET_EX_ERROR,
} from '../actions';

const INICIAL_STATE = {
  expenses: {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: [],
  },
  currencies: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state };

  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: Object.keys(action.payload),
    };

  case GET_CURRENCY_ERROR:
    return { ...state };

  case GET_EXCHANGE:
    return { ...state };

  case GET_EX_SUCCESS:
    return { ...state,
      exchangeRates: action.payload,
    };

  case GET_EX_ERROR:
    return { ...state };

  case GET_EXPENSES:
    return {
      ...state,
      id: state.id + 1,
      expenses: { id: state.expenses.length, ...action.payload },
    };

  default: return state;
  }
};

export default wallet;
