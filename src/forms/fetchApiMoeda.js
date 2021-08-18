import { apiMoeda } from '../actions';

const fetchApi = () => async (dispatch) => {
  const linkApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const returnApi = await linkApi.json();
  const keyApi = Object.keys(returnApi);
  const removeKey = keyApi
    .filter((moeda) => moeda !== 'USDT');
  dispatch(apiMoeda(removeKey));
};

export default fetchApi;
