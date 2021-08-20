// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY,
  GET_CURRENCY_SUCESS,
  GET_CURRENCY_ERROR,
} from '../actions/fetchCurrency';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state };
  case GET_CURRENCY_SUCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCY_ERROR:
    return { ...state, error: action.error };
  default:
    return { ...state };
  }
};

export default wallet;
