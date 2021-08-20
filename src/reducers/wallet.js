import { WALLET, WALLET_SUCESS, WALLET_ERROR,
  FORMWALLET, DELETE_ITEM } from '../actions/actionsTypes';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  erro: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET: return {
    ...state,
  };
  case WALLET_SUCESS: return {
    ...state,
    currencies: action.state,
  };
  case WALLET_ERROR: return {
    ...state,
    error: action.error,
  };
  case FORMWALLET: return {
    ...state,
    expenses: [...state.expenses, action.state],
  };
  case DELETE_ITEM: return {
    ...state,
    expenses: state.expenses.filter((item) => action.state !== item),
  };
  default: return state;
  }
};

export default wallet;
