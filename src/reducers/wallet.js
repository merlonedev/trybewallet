const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'get_currency':
    return state;

  case 'get_currency_sucess':
    return ({ ...state, currencies: action.value });

  case 'get_expenses':
    return ({ ...state, expenses: [...state.expenses, action.value] });

  case 'detele_expense':
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.value) });

  default: return state;
  }
};

export default wallet;
