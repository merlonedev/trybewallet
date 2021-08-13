async function fetchCoinApi() {
  const endpointURL = 'https://economia.awesomeapi.com.br/json/all';
  const API = await fetch(endpointURL).then((data) => data.json());
  return API;
}

export default fetchCoinApi;
