import { USER_EMAIL, USER_PASSWORD } from '../actions';

const INTIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INTIAL_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.state,
    };
  case USER_PASSWORD:
    return {
      ...state,
      password: action.state,
    };
  default:
    return state;
  }
}

export default user;
