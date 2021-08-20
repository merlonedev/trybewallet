import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="value" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" aria-label="moeda" name="currency" />
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" aria-label="payment" name="payment-method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-type">
          Tag
          <select id="expense-type" arial-label="tag" name="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" name="description" />
        </label>
        <button type="button" name="submit-button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default ExpensesForm;
