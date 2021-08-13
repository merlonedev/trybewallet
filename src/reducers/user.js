const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'add_user':
    return ({ email: action.state.email, password: action.state.password });

  default: return state;
  }
}

export default user;
