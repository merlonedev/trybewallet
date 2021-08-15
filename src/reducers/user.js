// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

const ESTADO_INICIAL = ({
  email: '',
});

const user = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
