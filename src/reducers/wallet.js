// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/expenses';
import {
  // GET_CURRENCY,
  // GET_CURRENCY_SUCESS,
  // GET_CURRENCY_ERROR,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCESS,
  GET_CURRENCIES_ERROR,
} from '../actions/fetchCurrency';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currency: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.error };
  // case GET_CURRENCY:
  //   return { ...state };
  // case GET_CURRENCY_SUCESS:
  //   return { ...state, currency: action.payload };
  // case GET_CURRENCY_ERROR:
  //   return { ...state, error: action.error };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.expenses.length }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.id)),
    };
  default:
    return { ...state };
  }
};

export default wallet;
