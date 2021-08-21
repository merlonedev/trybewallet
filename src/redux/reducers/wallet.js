import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

// prettier-ignore
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case types.GET_CURRENCIES:
    return { ...state, currencies: Object.keys(action.payload), isLoading: false };
  case types.ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case types.IS_LOADING:
    return { ...state, isLoading: action.payload };
  case types.FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
