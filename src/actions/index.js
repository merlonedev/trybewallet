import { ADD_EMAIL, GET_COINS } from './actionsType';

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
