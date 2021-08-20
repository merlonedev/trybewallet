import React from 'react';
import WalletHeader from '../components/WalletHeader';
import Expense from '../components/Expense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <Expense />
      </div>
    );
  }
}

export default Wallet;
