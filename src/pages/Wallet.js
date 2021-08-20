import React, { Component } from 'react';
import Header from '../componentsWallet/Header';
import ExpensesTable from '../componentsWallet/ExpensesTable';

class Wallet extends Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
