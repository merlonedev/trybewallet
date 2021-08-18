import { USER_CURRENCIES, USER_EXPENSES } from '../actions/index.login';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CURRENCIES:
    return {
      ...state, currencies: action.payload,
    };
  case USER_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
    // case USER_SUM_TOTAL:
    //   return {
    //     ...state,
    //   };
  default:
    return state;
  }
};

export default userWallet;
