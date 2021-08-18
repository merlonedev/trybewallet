export const PEGANDO_MOEDAS = 'PEGANDO_MOEDAS';
export const PEGOU_AS_MOEDAS = 'PEGOU_AS_MOEDAS';
export const PEGOU_GASTOS = 'PEGOU_GASTOS';
export const DELETA_GASTOS = 'DELETA_GASTOS';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PEGANDO_MOEDAS:
    return { ...state, ...action.state };
  case PEGOU_AS_MOEDAS:
    return {
      ...state,
      currencies: action.state };
  case PEGOU_GASTOS:
    return { ...state,
      expenses: [...state.expenses, action.state] };
  case DELETA_GASTOS:
    return { ...state,
      expenses: state.expenses.filter((remove) => remove.id !== action.id),
    };
  default:
    return state;
  }
};

export default reducerFetch;
