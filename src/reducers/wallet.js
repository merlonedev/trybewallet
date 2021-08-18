// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, RESOLVE_API } from '../actions';

const INITIAL_STATE = {
  fetchAPI: {},
  isFetching: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return ({ ...state, isFetching: true });
  case RESOLVE_API:
    return ({ ...state, isFetching: false, fetchAPI: action.payload });
  default:
    return state;
  }
};

export default walletReducer;
