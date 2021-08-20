import { CURRENCIES, ADD_EXPENSES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };

  // Código feito com base no PR de Martin Brazon
  // https://github.com/tryber/sd-012-project-trybewallet/pull/61/commits/928cb06031bc85d3c4dc887c75db90c6d9c1396e
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => Number(expense.id !== action.state)),
    };

  default:
    return state;
  }
}

export default wallet;
