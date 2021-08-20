import React from 'react';
import { connect } from 'react-redux';
import AddExpense from './AddExpense';
import WalletHeader from './WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <AddExpense />
      </div>
    );
  }
}

export default connect()(Wallet);
