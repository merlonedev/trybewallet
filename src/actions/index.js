// Coloque aqui suas actions
export const ACTION_LOGIN = 'ACTION_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const actionLogin = (email, password) => ({
  type: ACTION_LOGIN,
  email,
  password,
});

export const actionFetchAPI = () => (
  async (dispatch) => {
    try {
      const result = await fetch('https://economia.awesomeapi.com.br/json/all');
      const currencies = await result.json();
      delete currencies.USDT;

      dispatch({ type: GET_CURRENCIES, currencies });
    } catch (e) {
      console.log(e);
    }
  }
);
