export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS_COINS = 'FETCH_SUCCESS_COINS';
export const FETCH_ERROR_CASES = 'FETCH_ERROR_CASES';
export const FETCH_SUCCESS_CURRENT = 'FETCH_SUCCESS_CURRENT';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (email) => ({
  type: LOGIN,
  email,
});

// Actions fetch na api

const getCoinsSuccessCase = (response) => ({
  type: FETCH_SUCCESS_COINS,
  response,
});

const failCases = (error) => ({
  type: FETCH_ERROR_CASES,
  error,
});

export const fetchCoins = () => (async (dispatch) => {
  try {
    const request = await fetch(END_POINT);
    const response = await request.json();
    const currencies = Object.keys(response);
    const result = currencies.filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );
    const coins = result.map((coin) => ({ val: coin, lab: coin }));

    dispatch(getCoinsSuccessCase(coins));
  } catch (error) {
    dispatch(failCases(error));
  }
});

// actions para salvas despesas

const getCurrentSuccessCase = (payload) => ({
  type: FETCH_SUCCESS_CURRENT,
  payload,
});

export const saveExpenses = (expense) => (async (dispatch) => {
  try {
    const request = await fetch(END_POINT);
    const response = await request.json();
    const payload = { ...expense, exchangeRates: response };
    dispatch(getCurrentSuccessCase(payload));
  } catch (error) {
    dispatch(failCases(error));
  }
});

// actions para remover despesa

export const removeExpenses = (id) => ({
  type: REMOVE_EXPENSES,
  id,
});
