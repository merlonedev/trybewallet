import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Selects extends Component {
  render() {
    const { currencies, onChange, currency, method, tag } = this.props;
    return (
      <form>
        <label htmlFor="select-moeda">
          Moeda:
          <select
            id="select-moeda"
            name="currency"
            value={ currency }
            onChange={ onChange }
          >
            { currencies.filter((currencie) => currencie.codein !== 'BRLT')
              .map((coin) => (
                <option
                  key={ coin.name }
                  value={ coin.code }
                >
                  { coin.code }
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="select-method">
          Método de pagamento:
          <select
            id="select-method"
            name="method"
            value={ method }
            onChange={ onChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag:
          <select id="select-tag" name="tag" onChange={ onChange } value={ tag }>
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
}

Selects.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
