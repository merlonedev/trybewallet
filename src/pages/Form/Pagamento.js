import React from 'react';
import PropTypes from 'prop-types';

class Pagamento extends React.Component {
  render() {
    const { method, handlechange } = this.props;
    return (
      <div>
        <label htmlFor="selected-currency">
          Método de pagamento:
          <select
            value={ method }
            onChange={ handlechange }
            id="selected-currency"
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

Pagamento.propTypes = {
  handlechange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default Pagamento;
