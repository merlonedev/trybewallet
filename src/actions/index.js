export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const newCurrencie = (currencie) => ({
  type: 'NEW_CURRENCIE',
  payload: {
    currencie,
  },
});
