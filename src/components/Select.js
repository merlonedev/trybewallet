import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { handleChange, currency, method, tag, currencies } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="currency"
            id="moeda"
            onChange={ handleChange }
            value={ currency }
          >
            { currencies.map((curr, index) => (
              <option key={ index }>{ curr.code }</option>
            )) }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="method"
            id="metodo"
            onChange={ handleChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            onChange={ handleChange }
            value={ tag }
          >
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

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};
