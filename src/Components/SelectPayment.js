import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectPayment extends Component {
  render() {
    const { handlerChange, value } = this.props;
    return (
      <label
        htmlFor="payment"
        onChange={ handlerChange }
        value={ value }
      >
        Método de pagamento
        <select name="payment">
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
