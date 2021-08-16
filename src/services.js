export const fetchAPI = async (URL) => {
  const response = await fetch(URL);
  const DATA = await response.json();
  return DATA;
};

export const paymentMethods = [
  { value: 'Cartão de Crédito' },
  { value: 'Dinheiro' },
  { value: 'Cartão de Débito' },
];

export const expenseCategory = [
  { value: 'Alimentação' },
  { value: 'Lazer' },
  { value: 'Trabalho' },
  { value: 'Transporte' },
  { value: 'Saúde' },
];
