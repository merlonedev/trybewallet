import React from 'react';

class SelectPayMet extends React.Component {
  render() {
    return (
      <label htmlFor="wallet-pay-met">
        Método de pagamento
        <select
          name="pay-met"
          id="wallet-pay-met"
        >
          <option value="money">Dinheiro</option>
          <option value="cred-card">Cartão de crédito</option>
          <option value="deb-card">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default SelectPayMet;
