// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export function saveUserEmail(state) {
  return ({
    type: SAVE_EMAIL,
    state,
  });
}
