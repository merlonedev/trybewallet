import { apiCotacao, apiCotacaoError } from '../actions/index';

const fetchApiCotacao = (state) => async (dispatch) => {
  const linkApiDespesas = await fetch('https://economia.awesomeapi.com.br/json/all');
  if (!linkApiDespesas.ok) return dispatch(apiCotacaoError());
  const returnApiDespesas = await linkApiDespesas.json();
  dispatch(apiCotacao({ ...state, exchangeRates: returnApiDespesas }));
};

export default fetchApiCotacao;
