import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

// prettier-ignore
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.CHANGE_USER:
    return { email: action.value };
  default:
    return state;
  }
}

export default userReducer;
