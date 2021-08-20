import React from 'react';
import WalletHeader from '../components/WalletHeader';
import Expense from '../components/Expense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>.</div>
        <WalletHeader />
        <Expense />
      </div>
    );
  }
}

export default Wallet;
