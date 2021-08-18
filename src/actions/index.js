const URL_MOEDAS = 'https://economia.awesomeapi.com.br/json/all';
export const SAVED_EMAIL = 'SAVED_EMAIL';
export const FETCH_API = 'FETCH_API';
export const SAVED_EXPENSES = 'SAVED_EXPENSES';

export const actionSaveEmail = (payload) => ({
  type: SAVED_EMAIL,
  payload,
});

export const actionFetchApi = (payload) => ({
  type: FETCH_API,
  payload,
});

export const actionExpenses = (payload) => ({
  type: SAVED_EXPENSES,
  payload,
});

// Requisito 7 com ajuda, Kelvin Oliveira(adaptação de função junto com dispatch)
export function fetchAPI() {
  return (async function test(dispatch) {
    const response = await fetch(URL_MOEDAS);
    const result = await response.json();
    dispatch(actionFetchApi(result));
  });
}

export async function fetchCotation() {
  const response = await fetch(URL_MOEDAS);
  const result = await response.json();
  return result;
}

fetchCotation();

export default fetchAPI;
