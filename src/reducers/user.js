
export const INITIAL_STATE = { email: '', password: '' };

export const login = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL':
      return payload.email,
    default:
      return state,
  }
}
