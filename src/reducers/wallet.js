const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_CHANGE':
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  case 'API_DATA':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'EXPENSE_DATA':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.test,
      ],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
