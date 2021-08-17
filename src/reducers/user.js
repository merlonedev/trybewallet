import GET_USER from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default reducerUser;
