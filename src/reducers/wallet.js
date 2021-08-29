import {
  // SET_CURRENCIES,
  SET_CURRENCIES_SUCCESS,
  // SET_CURRENCIES_ERROR,
  INSERT_EXPENSE,
  SUM_EXPENSES,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
  EDIT_EXPENSE,
}
  from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  editing: false,
  idExpense: 0,
};

function sumTotalExpense(expenses) {
  return expenses.reduce((acc, expense) => {
    const { ask } = expense.exchangeRates[expense.currency];
    return acc + (expense.value * ask);
  }, 0);
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES_SUCCESS:
    return {
      ...state, currencies: Object.keys(action.payload).filter((code) => code !== 'USDT'),
    };

  case INSERT_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((item, index) => index !== action.payload),
    };

  case SUM_EXPENSES: return { ...state, total: sumTotalExpense(action.expenses) };

  case UPDATE_EXPENSE:
    return {
      ...state,
      editing: false,
      idExpense: 0,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return { ...action.payload, exchangeRates: expense.exchangeRates };
        }
        return expense;
      }),
    };

  case EDIT_EXPENSE: return { ...state, editing: true, idExpense: action.payload };

  default:
    return state;
  }
};

export default wallet;
