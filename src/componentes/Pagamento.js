import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Pagamento extends Component {
  render() {
    const { handleChange } = this.props;
    const pagamentos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select name="method" id="pagamento" onChange={ handleChange }>
          { pagamentos.map((pagamento, index) => (
            <option value={ pagamento } key={ index }>
              { pagamento }
            </option>))}
        </select>
      </label>
    );
  }
}

Pagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Pagamento;
