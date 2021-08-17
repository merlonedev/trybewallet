import { USER_CURRENCIES, USER_EXPENSES } from '../actions/index.login';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CURRENCIES:
    return {
      ...state, currencies: [payload.currencies],
    };
  case USER_EXPENSES:
    return {
      ...state, expencies: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default userWallet;
