import {
  USER_EMAIL,
  GET_WALLET_API,
  GET_SUCESS,
  GET_FAILL,

} from './actionTypes';

const urlApi = 'https://economia.awesomeapi.com.br/json/all';

export const actionEmail = (payloadEmail) => ({ type: USER_EMAIL, payloadEmail });

export const getWalletApi = () => ({ type: GET_WALLET_API });

export const getSucess = (payload) => ({ type: GET_SUCESS, payload });

export const getFaill = (error) => ({ type: GET_FAILL, error });

export function requestExchangeRates(expenseData) {
  return async (dispatch) => {
    const fetchExchangeRates = await fetch(urlApi);
    const fetchExchangeRatesJSON = await fetchExchangeRates.json();
    const exchange = { exchangeRates: fetchExchangeRatesJSON };
    Object.assign(expenseData, exchange);
    dispatch(getSucess(expenseData));
  };
}

// Conultei o repositório do colega { Nawanda } para resolver o requisito 08.
// https://github.com/tryber/sd-012-project-trybewallet/blob/Caio-Morato-project-trybewallet/src/components/AddExpenses.js
