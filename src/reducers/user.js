import { GET_EMAIL }
  from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      email: action.payload,
    };

  default:
    return state;
  }
};

export default user;
