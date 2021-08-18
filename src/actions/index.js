export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmailAndPassword = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});
