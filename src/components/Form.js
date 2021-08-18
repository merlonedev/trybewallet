import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.renderCurrencies = this.renderCurrencies.bind(this);
  }

  renderCurrencies() {
    const { currencies } = this.props;
    const currenciesKeys = Object.keys(currencies);
    return currenciesKeys.map(
      (currency) => <option key={ currency }>{ currency }</option>,
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { this.renderCurrencies() }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

Form.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Form;
