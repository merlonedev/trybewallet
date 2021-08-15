// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSES, GET_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };

  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => Number(expense.id !== action.id)),
      // tive que consultar o repositorio: https://github.com/tryber/sd-012-project-trybewallet/pull/140/commits/5a658a485daf12684df15441d5e16116b13d1a84
    };

  default:
    return state;
  }
};

export default wallet;
