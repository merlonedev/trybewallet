export const SAVE_USER = 'SAVE_USER';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_API = 'GET_API';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_EXPENSES_ERROR = 'GET_EXPENSES_ERROR';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const saveUser = (value) => ({ type: SAVE_USER, value });
export const saveEmail = (email) => ({ type: GET_EMAIL, email });
export const getApi = (payload) => ({ type: GET_API, payload });
export const getExpenses = (expenses) => ({ type: GET_EXPENSES, expenses });
export const getExpensesError = () => ({ type: GET_EXPENSES_ERROR });
export const eliminateExpense = (eliminate) => ({ type: DELETE_EXPENSE, eliminate });
