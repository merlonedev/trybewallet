// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const CURRENCIES_ACTION = 'CURRENCIES_ACTIONS';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';
export const TRIGGER_LOADING = 'TRIGGER_LOADING';
export const FAILED_REQUEST = 'FAILED_REQUUEST';

export const userAction = (email) => (
  {
    type: USER_ACTION,
    email,
  }
);

// Código baseado no código: https://github.com/tryber/sd-012-project-trybewallet/blob/75e5a078f040b0532f5ed04352f8098198edac58/src/actions/index.js
export const currenciesAction = (currencies) => {
  const currence = Object.keys(currencies);
  const currenciesFiltered = currence.filter((currenceItem) => currenceItem !== 'USDT');
  return (
    {
      type: CURRENCIES_ACTION,
      currenciesFiltered,
    }
  );
};
// -------------------------------------------------------------------------------------------

export const expensesAction = (expenses) => (
  {
    type: EXPENSES_ACTION,
    expenses,
  }
);

export const triggerLoading = (isFetching) => (
  {
    type: TRIGGER_LOADING,
    isFetching,
  }
);

export const failedRequest = (error) => (
  {
    type: FAILED_REQUEST,
    error,
  }
);

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(triggerLoading());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(currenciesAction(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
