export const LOGIN = 'LOGIN';

const addUser = (email) => ({
  type: LOGIN,
  email,
});

export default addUser;
