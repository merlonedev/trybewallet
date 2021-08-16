import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

export default class AddExpenses extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <section>
        <Inputs />
        <label htmlFor="select-moeda">
          Moeda:
          <select id="select-moeda">
            { currencies.filter((currencie) => currencie.codein !== 'BRLT')
              .map((coin) => (
                <option
                  key={ coin.name }
                >
                  { coin.code }
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="select-moeda">
          Método de pagamento:
          <select id="select-moeda">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-moeda">
          Tag:
          <select id="select-moeda">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </section>
    );
  }
}

AddExpenses.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
