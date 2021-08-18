import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { name, value, onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" onChange={ onChange } value={ value } name={ name }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

    );
  }
}

PaymentMethod.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentMethod;
