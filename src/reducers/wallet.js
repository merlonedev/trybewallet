// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENT_EXCHANGE,
  FETCH_CURRENCIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  currentExchange: 'BRL',
  currencies: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case GET_CURRENT_EXCHANGE:
    return {
      ...state,
      currentExchange: action.payload,
    };
  default:
    return state;
  }
};

export default reducerWallet;
