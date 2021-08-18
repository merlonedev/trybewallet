import React, { Component } from 'react';

export default class PaymentMethod extends Component {
  constructor() {
    super();
    this.state = {
      paymentMethod: 'money',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.state({
      paymentMethod: target.value,
    });
  }

  render() {
    const { paymentMethod } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento
        <select id="paymentMethod" onChange={ this.handleChange } value={ paymentMethod }>
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de Crédito</option>
          <option value="debit">Cartão de Débito</option>
        </select>
      </label>

    );
  }
}
