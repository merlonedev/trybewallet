export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addUser = (email) => ({ type: ADD_USER, email });
export const addCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });
export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });

export const fetchAPI = () => (
  async (dispatch) => {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(URL);
    const obj = await fetchApi.json();
    delete obj.USDT;
    dispatch(addCurrencies(obj));
  }
);
