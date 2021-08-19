import React from 'react';
import PropTypes from 'prop-types';

class SelectPayMet extends React.Component {
  render() {
    const { payMet, onChange } = this.props;

    return (
      <label htmlFor="wallet-pay-met">
        Método de pagamento
        <select
          name="method"
          value={ payMet }
          id="wallet-pay-met"
          onChange={ onChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayMet.propTypes = {
  payMet: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectPayMet;
