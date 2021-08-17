import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-payment">
          Método de pagamento
          <select
            id="input-payment"
            placeholder="método de pagamento"
            onChange={ handleChange }
            name="method"
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default PaymentMethod;
