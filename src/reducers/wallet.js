// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  totalExpenses: 0.00,
};

function sum(data) {
  return Number(data.reduce(
    (
      accumulator,
      value,
    ) => accumulator + (value.value * value.exchangeRates[value.currency].ask), 0,
  ).toFixed(2));
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      totalExpenses: sum([...state.expenses, action.payload]),
    };
  default:
    return state;
  }
};

export default wallet;
