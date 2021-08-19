// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CURRENCIES_ACTION, EXPENSES_ACTION } from '../actions';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  error: '',
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return (
      {
        ...state,
        currencies: action.currenciesFiltered,
      }
    );
  case EXPENSES_ACTION:
    return (
      {
        ...state,
        expenses: action.expenses,
      }
    );
  default:
    return state;
  }
};

export default wallet;
