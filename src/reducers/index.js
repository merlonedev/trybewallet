// import user from './user';
// import wallet from './wallet';
const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_STATE: {
      return {
        ...state,
        user: [...state.user, action.payload],
        wallet: [...state.wallet, action.payload],
      };
    }
    default: return state;
  }
};
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
