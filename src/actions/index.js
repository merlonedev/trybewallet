// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const EXPENSES = 'EXPENSES';
export const CURRENCIES = 'CURRENCIES';
export const DELETE = 'DELETE';

export const loginAction = (value) => ({ type: 'LOGIN', value });
export const expensesAction = (value) => ({ type: 'EXPENSES', value });
export const currenciesAction = (value) => ({ type: 'CURRENCIES', value });
export const deleteAction = (value) => ({ type: 'DELETE', value });
