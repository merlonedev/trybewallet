export const fetchAPI = async (URL) => {
  const response = await fetch(URL);
  const DATA = await response.json();
  return DATA;
};

export const paymentMethods = [
  { value: 'Cartão de crédito' },
  { value: 'Dinheiro' },
  { value: 'Cartão de débito' },
];

export const expenseCategory = [
  { value: 'Alimentação' },
  { value: 'Lazer' },
  { value: 'Trabalho' },
  { value: 'Transporte' },
  { value: 'Saúde' },
];
