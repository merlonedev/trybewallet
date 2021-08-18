import { EXPENSES } from '../actions/getExpenses';
import { CURRENCIES } from '../actions/getCurrencies';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: Object.values(action.currencies),
    };
  case EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
