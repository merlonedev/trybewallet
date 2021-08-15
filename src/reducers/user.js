import { ADD_USER } from '../actions';

const INITIAL_USER_STATE = {
  email: '',
};

function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return ({
      ...state,
      email: action.value,
    });

  default:
    return state;
  }
}

export default user;
