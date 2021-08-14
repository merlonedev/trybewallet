import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  const { type, email } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email,
    };

  default:
    return state;
  }
};

export default user;
