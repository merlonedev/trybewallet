import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    const payment = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            {payment.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <label htmlFor="expense">
          Tag
          <select id="expense">
            {tag.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
