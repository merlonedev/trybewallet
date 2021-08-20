import { ADD_USER } from '../actions';

const INITIAL = {
  email: undefined,
};

const user = (state = INITIAL, action) =>
  action.type === ADD_USER ? { email: action.email } : state;

export default user;
