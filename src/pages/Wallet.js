import React from 'react';
import WalletHeader from '../components/HeaderWallet';
import Expense from '../components/Expense';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <Expense />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
