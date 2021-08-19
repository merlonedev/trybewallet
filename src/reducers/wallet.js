import { ADD_EXPENSE, ADD_CURRENCIES, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const updateExpense = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...prevState, expenses: [...prevState.expenses, action.expenses] };

  case ADD_CURRENCIES:
    return { ...prevState, currencies: [...prevState.currencies, ...action.currencies] };

  case DELETE_EXPENSE:
    return {
      ...prevState,
      expenses: prevState.expenses.filter(({ item }) => item !== action.item) };

  default:
    return prevState;
  }
};

export default updateExpense;
