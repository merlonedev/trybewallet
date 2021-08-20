import { GET_COINS,
  GET_COINS_SUCCES,
  ADD_EXCHANGES,
  DELETE_EXPENSE } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS:
    return { ...state };
  case GET_COINS_SUCCES:
    return { ...state, currencies: [...action.payload] };
  case ADD_EXCHANGES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((del) => del.id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
