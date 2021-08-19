import { API_COTACAO, API_MOEDA } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
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
  default:
    return state;
  }
};

export default wallet;
