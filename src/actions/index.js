// Coloque aqui suas actions
export const ACTION_LOGIN = 'ACTION_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const actionLogin = (email, password) => ({
  type: ACTION_LOGIN,
  email,
  password,
});

export const actionFetchAPI = () => (
  async (dispatch) => {
    try {
      const result = await fetch('https://economia.awesomeapi.com.br/json/all');
      const currencies = await result.json();
      delete currencies.USDT;

      dispatch({ type: GET_CURRENCIES, currencies });
    } catch (e) {
      console.log(e);
    }
  }
);

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const fetchExchangeRate = (object) => (
  async (dispatch) => {
    try {
      const result = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = await result.json();
      const newObj = { ...object, exchangeRates: response };

      dispatch(addExpense(newObj));
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });
