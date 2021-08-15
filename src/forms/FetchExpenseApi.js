import { getExpenses, getExpensesError } from '../actions/index';

const fetchExpenseApi = (state) => async (dispatch) => {
  const getExpense = await fetch('https://economia.awesomeapi.com.br/json/all');
  if (!getExpense.ok) return dispatch(getExpensesError());
  const response = await getExpense.json();
  console.log(state);
  dispatch(getExpenses({ ...state, exchangeRates: response }));
};

export default fetchExpenseApi;
