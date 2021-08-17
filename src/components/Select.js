import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            name="value"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option>Moeda</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento:
          <select name="método de pagamento" id="método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            maxLength="50"
          />
        </label>
      </form>
    );
  }
}

Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Select;
