import React, { Component } from 'react';
import Header from './Header';
import AddExpense from './AddExpense';
import ShowExpenses from './ShowExpenses';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
        <ShowExpenses />
      </div>
    );
  }
}

export default Wallet;
