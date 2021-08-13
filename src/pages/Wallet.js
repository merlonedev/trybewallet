import React, { Component } from 'react';
import Header from './Header';
import AddExpense from './AddExpense';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
      </div>
    );
  }
}

export default Wallet;
