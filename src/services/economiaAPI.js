import { requestCurrencies, takeCurrencies } from '../actions/index';

const ECONOMIA_API = 'https://economia.awesomeapi.com.br/json/all';

function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch(ECONOMIA_API)
      .then((request) => request.json()
        .then(
          (currency) => dispatch(takeCurrencies(Object.keys(currency))),
        ));
  };
}

export default fetchCurrencies;
