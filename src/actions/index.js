import { ADD_EMAIL, GET_COINS, GET_COINS_SUCCES, ADD_EXCHANGES } from './actionsType';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email,
  };
}

export function getCoins() {
  return {
    type: GET_COINS,
  };
}

export function getCoinsSucces(coins) {
  return {
    type: GET_COINS_SUCCES,
    payload: coins,
  };
}

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCoins());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const results = await response.json();
  const array = Object.values(results);
  dispatch(getCoinsSucces(array));
};

export function addExchanges(exchanges) {
  return {
    type: ADD_EXCHANGES,
    payload: exchanges,
  };
}
