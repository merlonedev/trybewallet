import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="expenseValue">
          Valor
          <input id="expenseValue" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" />
        </label>
        <label htmlFor="coins">
          Moeda
          <select id="coins">
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="payMethods">
          Método de pagamento
          <select id="payMethods">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
