// Coloque aqui suas actions
export const userLogin = (value) => ({
  type: 'userLogin',
  value,
});

export const getCurrencies = (value) => ({
  type: 'fetchCurrencies',
  value,
});

export const addExpense = (value) => ({
  type: 'addExpense',
  value,
});

export const editExpense = (value) => ({
  type: 'editExpense',
  value,
});

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(getCurrencies(json)));
}
