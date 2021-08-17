import React from 'react';

class AddExpensesForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input type="number" id="expense-value" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency">
            <option>Vazio</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method" name="payment-method">
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input type="text" id="expense-description" />
        </label>
      </form>
    );
  }
}

export default AddExpensesForm;
