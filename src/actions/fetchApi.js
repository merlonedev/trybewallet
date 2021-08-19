import getCurrencies from './getCurrencies';
import getExpenses from './getExpenses';

const fetchAPIRdx = (expenses) => async (dispatch) => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const JSON = await fetchAPI.json();
  if (!expenses) {
    const ObjFilter = Object.keys(JSON).filter((obj) => obj !== 'USDT');
    return dispatch(getCurrencies(ObjFilter));
  }
  dispatch(getExpenses({ ...expenses }));
};

export default fetchAPIRdx;
