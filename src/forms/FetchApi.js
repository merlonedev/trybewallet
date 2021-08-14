import { getApi } from '../actions/index';

const fetchApi = () => async (dispatch) => {
  const getCurrency = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await getCurrency.json();
  const currencies = Object.keys(response);
  const abreviationCurrencies = currencies
    .filter((currencie) => currencie !== 'USDT');
  dispatch(getApi(abreviationCurrencies));
};

export default fetchApi;
