// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_NEW_CURRENCIES':
    return ({ ...state, currencies: [action.state] });
  case 'ADD_NEW_EXPENSE':
    return ({ ...state, expenses: [...state.expenses, action.state] });
  case 'EXPENSES':
    return ({ ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.state),
    });
  default:
    return state;
  }
}

export default wallet;
