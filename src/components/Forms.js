import React, { Component } from 'react';

class Forms extends Component {
  inputForms() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="name"
          id="value"
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.inputForms() }
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="name"
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="name"
            id="currency"
          >
            <option value="brl">BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="name"
            id="payment"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="name"
            id="tag"
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
