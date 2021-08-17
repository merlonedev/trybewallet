export const LOGIN = 'LOGIN';

export function LoginUser(emailLogin) {
  return {
    type: 'LOGIN',
    payload: emailLogin,
  };
}
