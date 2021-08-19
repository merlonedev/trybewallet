import { GET_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  Currencies: [],
  CurrenciesResp: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      Currencies: [...Object.keys(action.currencies)],
      CurrenciesResp: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
