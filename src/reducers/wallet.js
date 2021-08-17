// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIA_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INICIA_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCY':
    return state;
  case 'GET_CURRENCY_SUCESS':
    return ({
      ...state,
      currencies: action.currencies,
    });
  case 'GET_CURRENCY_ERROR':
    return ({
      ...state,
      error: action.error,
    });
  case 'SET_EXPENSES':
    return state;
  case 'SET_EXPENSES_SUCESS':
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  case 'REMOVE_EXPENSE':
    state.expenses.split(expenses.indexOF(action.id), 1);
    return ({
      ...state,
    });
  default:
    return state;
  }
};

export default wallet;
