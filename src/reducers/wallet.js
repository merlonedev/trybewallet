import { API_COTACAO, API_MOEDA, BTN_DELETE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const deleteExpense = (state, action) => {
  const { expenses } = state;
  const deleteItem = expenses.filter((despesas) => despesas.id !== +action);
  return deleteItem;
};

const wallet = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
  case API_MOEDA:
    return {
      ...state,
      currencies: [...action.currency],
    };
  case API_COTACAO:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.expenses }],
      error: '' };
  case BTN_DELETE:
    return {
      ...state,
      expenses: deleteExpense(state, action.remove),
    };
  default:
    return state;
  }
};

export default wallet;
