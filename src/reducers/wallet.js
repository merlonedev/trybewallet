// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_WALLET_API,
  GET_SUCESS,
  GET_FAILL,
  DELETE_EXPENSES,
} from '../actions/actionTypes';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  error: 'error',
};

const DeleteExpense = (state, action) => {
  const { expenses } = state;
  const deleted = expenses.filter((expense) => expense.id !== +action);
  return deleted;
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

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: DeleteExpense(state, action.payload),
    };

  default:
    return state;
  }
};

export default wallet;
