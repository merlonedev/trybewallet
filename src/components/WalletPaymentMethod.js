import React from 'react';
import propTypes from 'prop-types';

class WalletPaymentMethod extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="met-pagamento">
        Método de pagamento&nbsp;
        <select
          type="text"
          id="met-pagamento"
          name="method"
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

WalletPaymentMethod.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default WalletPaymentMethod;
