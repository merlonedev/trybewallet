export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCESS';

export default function sucessFetch(coin) {
  return {
    type: 'FETCH_COIN_SUCCESS',
    coin,
  };
}
