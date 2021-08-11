export const EMAIL = 'EMAIL';
export const EXPENSES = 'EXPENSES';

const getEmail = (payload) => ({ type: EMAIL, payload });

export default getEmail;
