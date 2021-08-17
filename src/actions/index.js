export const USER_EMAIL = 'user-email';
export const ADD_EXPENSE = 'add-expense';
export const DELETE_EXPENSE = 'delete-expense';
export const CURRENCY = 'currency';

export const saveEmail = (actualEmail) => ({
  type: USER_EMAIL,
  user: {
    email: actualEmail,
  },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const addCurrency = (currency) => ({
  type: CURRENCY,
  currency,
});