export const LOGIN = 'LOGIN';
export const API_MOEDA = 'API_MOEDA';
export const BTN_DELETE = 'BTN_DELETE';

export const addEmail = (email) => ({
  type: 'LOGIN',
  email,
});

export const apiMoeda = (currency) => ({
  type: 'API_MOEDA',
  currency,
});

export const deleteBtn = (remove) => ({
  type: 'BTN_DELETE',
  remove,
});
