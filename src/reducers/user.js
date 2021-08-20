// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_LOGIN_SUCESS } from '../actions';

const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN_SUCESS:
    return { ...state, isLogged: true, email: action.payload };
  default:
    return state;
  }
}
export default userReducer;
