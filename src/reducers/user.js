import { userEmail } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userEmail:
    return { ...state, email: action.state.email };
  default:
    return state;
  }
}

export default userReducer;
