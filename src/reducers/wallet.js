// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'editExpense':
    return {
      ...state,
      expenses:
          [...state.expenses.filter((e) => e.id !== action.value)],
    };
  case 'fetchCurrencies':
    return { ...state, currencies: action.value };
  case 'addExpense':
    return { ...state, expenses: [...state.expenses, action.value] };
  default:
    return state;
  }
};

export default walletReducer;
