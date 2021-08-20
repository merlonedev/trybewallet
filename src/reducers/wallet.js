import { FETCH_COIN_SUCCESS, ADD_EXPENSE } from '../actions/wallet';

const INITIAL_STATE = {
  coin: [],
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN_SUCCESS:
    return {
      ...state, coin: action.coin,
    };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };

  default:
    return state;
  }
};

export default wallet;
