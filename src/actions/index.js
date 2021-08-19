export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECIEVE_CURRENCY = 'RECIEVE_CURRENCY';
export const GET_TOTAL = 'GET_TOTAL';

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});

export default function LoginUser(emailLogin) {
  return {
    type: 'LOGIN',
    email: emailLogin,
  };
}

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const recieveCurrency = (payload) => ({
  type: RECIEVE_CURRENCY,
  payload,
});
