// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
export const ADD_CURRENCIE_SUCCES = 'ADD_CURRENCIE_SUCCES';
export const ADD_CURRENCIE_ERROR = 'ADD_CURRENCIE_ERROR';
export const USER_EXPENSE = 'USER_EXPENSE';
export const USER_EXPENSE_SUCCES = 'USER_EXPENSE_SUCCES';
export const USER_EXPENSE_ERROR = 'USER_EXPENSE_ERROR';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const userEmail = (value) => ({ type: USER_EMAIL, value });
export const addCurrencie = () => ({ type: ADD_CURRENCIE });
export const addCurrencieSucces = (payload) => ({ type: ADD_CURRENCIE_SUCCES, payload });
export const addCurrencieError = (error) => ({ type: ADD_CURRENCIE_ERROR, error });
export const userExpense = () => ({ type: USER_EXPENSE });
export const userExpenseSucces = (payload) => ({ type: USER_EXPENSE_SUCCES, payload });
export const userExpenseError = (error) => ({ type: USER_EXPENSE_ERROR, error });
export const removeExpense = (id) => ({ type: REMOVE_EXPENSE, id });

export const fetchAPICurrencie = () => async (dispatch) => {
  dispatch(addCurrencie());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(addCurrencieSucces(currencies));
    return currencies;
  } catch (error) {
    dispatch(addCurrencieError(error));
  }
};

export const fetchAPIExpense = (state) => async (dispatch) => {
  dispatch(userExpense());
  console.log(state);
  try {
    const responseTwo = await fetch('https://economia.awesomeapi.com.br/json/all');
    const expenses = await responseTwo.json();
    dispatch(userExpenseSucces({ ...state, exchangeRates: expenses }));
    return expenses;
  } catch (error) {
    dispatch(userExpenseError(error));
  }
};
