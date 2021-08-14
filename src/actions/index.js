export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';

export const addingUserEmail = (state) => ({
  type: USER_EMAIL,
  state,
});

export const addingUserPwd = (state) => ({
  type: USER_PASSWORD,
  state,
});
