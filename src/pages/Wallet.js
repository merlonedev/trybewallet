import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <h3 data-testid="email-field">
          Email da pessoa retirado do estado Global
        </h3>
        <h2 data-testid="total-field">
          Campo de despesa geral
        </h2>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </main>
    );
  }
}

export default Wallet;
