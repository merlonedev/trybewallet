import React, { Component } from 'react';

class Expenses extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            <option value="vazio">Vazio</option>
          </select>
        </label>
        <label htmlFor="coin">
          Método de Pagamento
          <select id="coin">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimentation">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Expenses;
