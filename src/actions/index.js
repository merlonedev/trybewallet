// Coloque aqui suas actions
export const NEW_EMAIL = 'NEW_EMAIL';
export const NEW_PASSWORD = 'NEW_PASSWORD';

export const setEmail = (email) => (
  {
    type: NEW_EMAIL,
    email,
  }
);

export const setPassword = (password) => (
  {
    type: NEW_PASSWORD,
    password,
  }
);
