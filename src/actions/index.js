export const LOGIN = 'LOGIN';
export const API_MOEDA = 'API_MOEDA';

export const addEmail = (email) => ({
  type: 'LOGIN',
  payload: email,
});

export const apiMoeda = (currency) => ({
  type: 'API_MOEDA',
  currency,
});
