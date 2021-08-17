const INITIAL_STATE = {
  email: 'alguem@email.com',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      emial: action.email,
    };
  default:
    return state;
  }
}

export default user;
