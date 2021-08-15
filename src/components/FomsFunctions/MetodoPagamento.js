import React, { Component } from 'react';

class MetodoPagamento extends Component {
  render() {
    return (
      <div>
        <label htmlFor="teste-pagamento">
          Método de pagamento
          <select id="teste-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

      </div>
    );
  }
}
export default MetodoPagamento;
