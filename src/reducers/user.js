
const INITIAL_STATE = { email: '', password: '' };

const login = ( state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'EMAIL':
      return action.email
  }
}

export default login