const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case 'NEW_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
