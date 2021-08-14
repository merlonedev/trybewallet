import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select value={ value } onChange={ onChange } id="method" name="method">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

export default Payment;

Payment.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
