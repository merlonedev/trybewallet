import React from 'react';

class FormsWallet extends React.Component {
  renderForms() {
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input id="expense-value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select id="coin"> </select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      this.renderForms()
    );
  }
}

export default FormsWallet;
