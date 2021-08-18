import { EXPENSES } from '../actions/getExpenses';
import { CURRENCIES } from '../actions/getCurrencies';
import { DELETE_EXPENSE } from '../actions/deleteExpenses';

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
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((del) => del.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
