// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_WALLET_API,
  GET_SUCESS,
  GET_FAILL,
} from '../actions/actionTypes';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case GET_WALLET_API:
    return {
      ...state,
    };

  case GET_FAILL:
    return {
      ...state,
      error: action.error,
    };

  case GET_SUCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload] };

  default:
    return state;
  }
};

export default wallet;
