// action para pegar dados do usuário
const GET_USER = 'GET_USER';
export default GET_USER;

export const getUserData = (payload) => ({
  type: GET_USER,
  info: 'Get the current email user',
  payload,
});
