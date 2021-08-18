import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetodoPagamento extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="teste-pagamento">
          Método de pagamento
          <select
            id="teste-pagamento"
            name="method"
            value={ method }
            onChange={ handleChange }
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

MetodoPagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default MetodoPagamento;
