export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const actGetEmail = (email) => ({ type: 'GET_EMAIL', payload: email });
export const getCurrencySuccess = (data) => ({
  type: GET_CURRENCY_SUCCESS,
  data,
});

const fetchAPI = async () => {
  const response = await fetch(endpoint);
  const result = response.json();
  return result;
};

export function getCurrencies() {
  return async (dispatch) => {
    const data = await fetchAPI();
    dispatch(getCurrencySuccess(data));
  };
}

export const actGetExpenses = (expenses) => ({ type: GET_EXPENSES, expenses });

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });
