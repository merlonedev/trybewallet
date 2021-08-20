// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.value };

  default:
    return state;
  }
}

export default userReducer;
