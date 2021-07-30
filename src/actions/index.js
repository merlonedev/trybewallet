export const SET_PERSONAL_VALUE = 'SET_PERSONAL_VALUE';
export const SET_WALLET_CURRENCY = 'SET_WALLET_CURRENCY';

export const setPersonalValue = (payload) => (
  {
    type: SET_PERSONAL_VALUE, payload,
  });

export const setProfessionalValue = (payload) => (
  {
    type: SET_WALLET_CURRENCY, payload,
  });
