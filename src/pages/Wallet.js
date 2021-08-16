import React from 'react';
import WalletHeader from '../components/WalletHeader';
import WalletExpenseForm from '../components/WalletExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletExpenseForm />
      </div>
    );
  }
}

export default Wallet;
