export const SAVE_EMAIL_AND_PASSWORD = 'SAVE_EMAIL_AND_PASSWORD';

export const saveEmailAndPassword = (email) => ({
  type: SAVE_EMAIL_AND_PASSWORD,
  payload: {
    email,
  },
});
