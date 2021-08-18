// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const getLogin = (email) => ({ type: LOGIN, email });

export const COIN = 'COIN';
export const getCoin = () => ({ type: COIN });

export const COIN_SUCESS = 'COIN_SUCESS';
export const getCoinSucess = (currencies) => ({ type: COIN_SUCESS, currencies });

export const COIN_FAIL = 'COIN_FAIL';
export const getCoinFailed = (error) => ({ type: COIN_FAIL, error });

export const fetchCoinAPI = () => async (dispatch) => {
  dispatch(getCoin());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestJSON = await request.json();
    const currencies = Object.keys(requestJSON)
      .filter((moedas) => moedas !== 'USDT');
    dispatch(getCoinSucess(currencies));
  } catch (error) {
    return dispatch(getCoinFailed(error));
  }
};

export const EXPENSES = 'EXPENSES';
export const getExpenses = (payload, exchangeRates) => ({
  type: EXPENSES,
  payload,
  exchangeRates,
});

export const fetchExpenses = (payload) => async (dispatch) => {
  dispatch(getCoin());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestJSON = await request.json();
    dispatch(getExpenses(payload, requestJSON));
  } catch (error) {
    return dispatch(getCoinFailed(error));
  }
};

export const TOTAL = 'TOTAL';
export const getTotal = (total) => ({ type: TOTAL, total });

export const REMOVE = 'REMOVE';
export const removeLine = (line) => ({ type: REMOVE, line });
