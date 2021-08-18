// Esse reducer será responsável por tratar as informações da pessoa usuária

import { NEW_EMAIL, NEW_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: 'gletisonjr@gmail.com',
  password: '123456',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_EMAIL:
    return { ...state, email: action.email };
  case NEW_PASSWORD:
    return { ...state, password: action.password };
  default:
    return state;
  }
};

export default user;
