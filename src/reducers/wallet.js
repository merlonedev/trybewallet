const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalPrice: '0',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.data };
  case 'SAVE_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.expense] };
  case 'UPDATE_TOTAL_PRICE':
    return { ...state, totalPrice: action.price };
  default: return state;
  }
};

export default wallet;
