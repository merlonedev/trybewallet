export const LOGIN = 'LOGIN';

export default function LoginUser(emailLogin) {
  return {
    type: 'LOGIN',
    email: emailLogin,
  };
}
