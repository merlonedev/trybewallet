import { EMAIL_LOGIN } from '../actions';

const INITIAL_STATE = '';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_LOGIN:
    return [...state, action.email];
  default:
    return state;
  }
};

export default user;
