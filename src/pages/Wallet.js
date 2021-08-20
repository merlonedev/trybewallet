import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container">
        <div className="wallet">
          <Header />
        </div>
        <div className="expense-form">
          <AddExpenseForm />
        </div>
        <div className="expense-table">
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

export default Wallet;
