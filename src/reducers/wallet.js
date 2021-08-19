// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SECOND_ACTION':
    return { ...state, action };
  default:
    return state;
  }
}

export default walletReducer;
