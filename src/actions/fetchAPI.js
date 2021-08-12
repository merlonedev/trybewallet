import getCurrencies from './getCurrencies';
import getExpenses from './getExpenses';

const fetchAPIRedux = (expenses) => async (dispatch) => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const JSON = await fetchAPI.json();
  if (!expenses) {
    const ObjectFilter = Object.keys(JSON).filter((obj) => obj !== 'USDT');
    return dispatch(getCurrencies(ObjectFilter));
  }
  dispatch(getExpenses({ ...expenses }));
};

export default fetchAPIRedux;
