// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default reducerUser;
