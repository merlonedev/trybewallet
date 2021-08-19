export const LOGIN = 'LOGIN';
export const API_MOEDA = 'API_MOEDA';
export const API_COTACAO = 'API_COTACAO';
export const API_COTACAO_ERROR = 'API_COTACAO_ERROR';
// export const BTN_DELETE = 'BTN_DELETE';

export const addEmail = (email) => ({
  type: 'LOGIN',
  email,
});

export const apiMoeda = (currency) => ({
  type: 'API_MOEDA',
  currency,
});

export const apiCotacao = (expenses) => ({
  type: 'API_COTACAO',
  expenses,
});

export const apiCotacaoError = () => ({
  type: 'API_COTACAO_ERROR',
});

// export const deleteBtn = (remove) => ({
//   type: 'BTN_DELETE',
//   remove,
// });
