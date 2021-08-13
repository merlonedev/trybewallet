import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  const { type, email } = action;
  switch (type) {
  case LOGIN:
    return {
      ...state,
      user: {
        email,
      },
    };

  default:
    return state;
  }
};

export default user;
