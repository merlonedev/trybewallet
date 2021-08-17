import React from 'react';
import PropTypes from 'prop-types';

class PaymentMetod extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          id="Método de pagamento"
          value={ value }
          name="method"
          alt="Método de pagamento"
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMetod.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentMetod;
