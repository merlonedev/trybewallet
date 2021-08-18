// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import GET_CURRENT_EXCHANGE from '../actions/index';

const INITIAL_STATE = {
  currentExchange: 'BRL',
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENT_EXCHANGE:
    return {
      ...state,
      currentExchange: action.payload,
    };
  default:
    return state;
  }
};

export default reducerWallet;
