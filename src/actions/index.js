export const ADD_USER = (state) => ({
  type: 'add_user',
  state,
});

export const GET_CURRENCY = () => ({
  type: 'get_currency',
});

export const GET_CURRENCY_SUCESS = (value) => ({
  type: 'get_currency_sucess',
  value,
});

export const GET_API = () => (dispatch) => {
  dispatch(GET_CURRENCY());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      delete response.USDT;
      const MOEDAS = Object.values(response);
      dispatch(GET_CURRENCY_SUCESS(MOEDAS));
    });
};

export const GET_EXPENSES = (value) => ({
  type: 'get_expenses',
  value,
});
