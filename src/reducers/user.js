import { ADD_EMAIL_TO_STORE } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL_TO_STORE:
    return {
      email: action.payload,
    };

  default:
    return state;
  }
};

export default user;
