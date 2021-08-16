// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIA_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  total: 0,
};

const wallet = (state = INICIA_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCY':
    return state;
  case 'GET_CURRENCY_SUCESS':
    return ({
      ...state,
      currencies: action.currencies,
    });
  case 'GET_CURRENCY_ERROR':
    return ({
      ...state,
      error: action.error,
    });
  default:
    return state;
  }
};

export default wallet;
