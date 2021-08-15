import { COIN_SUCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const STATE_INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = STATE_INITIAL, action) => {
  switch (action.type) {
  case 'COIN':
    return {
      ...state,
    };
  case COIN_SUCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'COIN_FAIL':
    return {
      ...state,
      error: 'Erro',
    };

  default:
    return state;
  }
};

export default wallet;
