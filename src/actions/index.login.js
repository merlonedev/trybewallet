// Coloque aqui suas actions
export const USER_EMAIL = 'userEmail';
// export const USER_WALLET = 'USER_WALLET';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  user: {
    email: payload,
  },
});

// export const userWallet = (payload) => ({
//   type: USER_WALLET,
//   payload,
// });
