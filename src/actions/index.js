// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const RESOLVE_API = 'RESOLVE_API';
const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export function saveUserEmail(state) {
  return ({
    type: SAVE_EMAIL,
    state,
  });
}

const requestApiAction = () => ({ type: REQUEST_API });

const requestApiResolve = (apiReturn) => ({
  type: RESOLVE_API,
  payload: apiReturn,
  isFetching: false,
});

export const fetchApi = () => async (dispatch) => {
  dispatch(requestApiAction());
  const apiResponse = await fetch(URL_API);
  const apiResolve = await apiResponse.json();
  dispatch(requestApiResolve(apiResolve));
};
