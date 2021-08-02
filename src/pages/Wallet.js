import React from 'react';
import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
    };
  }

  render() {
    const { valor } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">Email:</p>
          <p data-testid="total-field">Despesa Total:{ valor }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

      </div>
    );
  }
}

export default Wallet;
