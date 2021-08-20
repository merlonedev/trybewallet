import {
  ADD_CURRENCIES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  currenciesResp: {},
  expenses: [],
  editing: { edit: false, expense: {} },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state,
      currencies: [...Object.keys(action.currencies)],
      currenciesResp: action.currencies,
    };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state, editing: { edit: true, expense: action.expense },
    };
  case SAVE_EDIT:
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(
          0,
          state.expenses.findIndex(({ id }) => id === action.expense.id),
        ),
        action.expense,
        ...state.expenses.slice(
          state.expenses.findIndex(({ id }) => id === action.expense.id) + 1,
        ),
      ],
      editing: { edit: false, expense: {} },
    };
  default:
    return state;
  }
};

export default wallet;
