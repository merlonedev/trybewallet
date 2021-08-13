export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCESS';

export const successFetch = (coin) => ({
  type: 'FETCH_COIN_SUCCESS',
  coin,
});
