// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
    redirect: false,
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, email: action.value };
  default:
    return state;
  }
}

export default userReducer;
