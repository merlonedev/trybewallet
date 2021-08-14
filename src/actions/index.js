export const SAVE_USER = 'SAVE_USER';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_API = 'GET_API';

export const saveUser = (value) => ({ type: SAVE_USER, value });
export const saveEmail = (email) => ({ type: GET_EMAIL, email });
export const getApi = (payload) => ({ type: GET_API, payload });
