export const CURRENCIE = 'CURRENCIE';

const getCurrencies = (currencies) => ({
  type: CURRENCIE,
  currencies,
});

export default getCurrencies;
