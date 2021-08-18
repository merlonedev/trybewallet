const initialState = {
  currencies: 'BRL',
  expenses: 0,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default walletReducer;
