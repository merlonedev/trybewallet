export const USER_EMAIL = 'user-email';

export const saveEmail = (actualEmail) => ({
  type: USER_EMAIL,
  user: {
    email: actualEmail,
  },
});
