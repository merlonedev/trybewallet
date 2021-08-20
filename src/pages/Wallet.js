import React from 'react';
import { connect } from 'react-redux';
import AddExpense from './AddExpense';
import WalletHeader from './WalletHeader';
import WalletTable from './WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <AddExpense />
        <WalletTable />
      </div>
    );
  }
}

export default connect()(Wallet);
