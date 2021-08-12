import {
  GET_CURRENCY,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
  // SAVE_STATE_FORM,
  GET_EXPENSES,
} from '../actions';

const INICIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state };

  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: Object.keys(action.payload),
    };

  case GET_CURRENCY_ERROR:
    return { ...state };

    // case SAVE_STATE_FORM:
    //  return { ...state, expenses: action.payload };

  case GET_EXPENSES:
    return {
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };

  default: return state;
  }
};

export default wallet;
