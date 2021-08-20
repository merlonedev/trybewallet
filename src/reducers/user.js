import { ADD_USER } from '../actions';

const INITIAL = { email: undefined };

const user = (state = INITIAL, action) => {
  if (action.type === ADD_USER) return { email: action.email };
  return state;
};

export default user;
