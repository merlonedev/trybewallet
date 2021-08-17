import { FETCH_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    // return {
    //   ...state,
    //   currencies: {...action.payload},
    // };
    // Lógica emplementada de Repositorio de Roberval Filho para transformar objeto em array!
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((ele) => !ele.includes('USDT'))
        .filter((ele) => !ele.includes('DOGE')),
    };
  default: return state;
  }
};

export default wallet;
