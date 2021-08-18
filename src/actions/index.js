// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTIONS';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';

export const userAction = (email) => (
  {
    type: USER_ACTION,
    email,
  }
);

export const currenciesAction = (currencies) => (
  {
    type: CURRENCIES_ACTION,
    currencies,
  }
);

export const expensesAction = (expenses) => (
  {
    type: EXPENSES_ACTION,
    expenses,
  }
);
