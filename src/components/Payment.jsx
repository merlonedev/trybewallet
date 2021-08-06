import React, { Component } from 'react';

export default class Payment extends Component {
  render() {
    return (
      <div>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" name="payment" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}
