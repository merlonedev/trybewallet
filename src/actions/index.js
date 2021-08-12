// Coloque aqui suas actions
export const ACTION_LOGIN = 'ACTION_LOGIN';

const actionLogin = (email, password) => ({
  type: ACTION_LOGIN,
  email,
  password,
});

export default actionLogin;
