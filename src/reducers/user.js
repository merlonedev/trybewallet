import { SAVE_EMAIL_AND_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL_AND_PASSWORD:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default user;
