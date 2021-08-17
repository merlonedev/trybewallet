import {
  SAVE_CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, FINISH_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: false,
  itemID: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          exchangeRates: action.response,
        },
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state, edit: true, itemID: action.payload,
    };
  case FINISH_EDIT:
    return {
      ...state,
      edit: false,
      itemID: 0,
      expenses: state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
