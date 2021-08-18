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
  default:
    return state;
  }
};

export default wallet;
