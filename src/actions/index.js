// action para pegar dados do usuário
export const GET_USER = 'GET_USER';
const GET_CURRENT_EXCHANGE = 'GET_CURRENT_EXCHANGE';
export default GET_CURRENT_EXCHANGE;

export const getUserData = (payload) => ({
  type: GET_USER,
  info: 'Get the current email user',
  payload,
});

// action cambio

export const getExchange = (payload) => ({
  type: GET_CURRENT_EXCHANGE,
  info: '',
  payload,
});
